---
sidebar_position: 5
---

# Trusted Setup (CRS)

A "Common Reference String" (CRS), alternatively known as a "Structured Reference String" (SRS), is the artifact from a trusted setup ("Powers of Tau") ceremony needed from most ZKP proving systems. In Halo2's vanilla (Zcash) version using IPA, there is no CRS. However, the Halo2 Backend for Aztec Noir uses the KZG commitment scheme which does use a CRS. Thus, our proving system needs to manage a CRS.

Since proving and verifying both rely on the CRS, most of the core nargo commands will prompt the backend to provide the CRS before proceeding with the actual functionality([exmaple](https://github.com/noir-lang/noir/blob/master/crates/nargo_cli/src/cli/compile_cmd.rs#L75-L79)). Nargo will prompt the update of the CRS, however in the Halo2 backend [we opt to regenerate the CRS each time](https://github.com/noir-lang/noir/blob/master/crates/nargo_cli/src/cli/fs/common_reference_string.rs#L29-L47) this request is made for simplicity's sake. Ideally, we would cache this in the future.

## Choosing a CRS

Given this fork of PlonK uses KZG commitments, we can use a standard universal trusted setup. There are a couple of options - for instance, [Axiom recommends the "Perpetual Powers of Tau Ceremony"](https://docs.axiom.xyz/axiom-architecture/how-axiom-works/kzg-trusted-setup). However, given the connection to Aztec in this project, we opt to use [Aztec's Ignite CRS](https://medium.com/aztec-protocol/aztec-crs-the-biggest-mpc-setup-in-history-has-successfully-finished-74c6909cd0c4).

## Computing Circuit Size
A CRS has a specified size which is a power of two. We need to know the "dimensions" of our circuit to retrieve the minimal CRS large enough to support our circuit. Specifically, in Plonkish arithemtization, we want to know the number of rows our circuit uses (`k`). To do this, we first use a [`dimension_measure.rs`](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/dimension_measure.rs#L32-L42) file. 
```rust
pub(crate) fn k(&self) -> u32 {
    u64::BITS
        - ([self.instance, self.advice, self.fixed]
            .into_iter()
            .max_by(Ord::cmp)
            .expect("Unexpected empty column iterator")
            + self.blinding_factor)
            .next_power_of_two()
            .leading_zeros()
        - 1
}
```
This function will find the length of the longest column used in the witness and add the length of the blinding factor rows. As mentioned, a CRS size must be to a power of two, so it finds the next value for `k` such that `2^k` is less than the number of rows.

## Putting the Ignite CRS into Halo2
Now that we can compute the size of our circuit, we need an API to return a Halo2-compatible CRS. In a common [`aztec_crs.rs`](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_common/src/aztec_crs.rs#L13-L20) file, we can prompt an Aztec webserver to serve us the properly sized CRS. This is managed by [`halo2_params.rs`](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/halo2_params.rs#L21-L42).
```rust
pub(crate) async fn constuct_halo2_params_from_aztec_crs(
    translator: impl pse_halo2wrong::halo2::plonk::Circuit<Fr>,
) -> Result<ParamsKZG<Bn256>, Error> {
    let dimension = DimensionMeasurement::measure(&translator).unwrap();

    let k = dimension.k();
    let n = 1 << k;
    assert!(n == 1 << k);

    let (g1_data, g2_data) = get_aztec_crs(n).await?;

    let mut g = vec![<<Bn256 as Engine>::G1Affine as PrimeCurveAffine>::generator()];

    g.extend(g1_data.chunks(64).map(to_g1_point));

    let g_lagrange = g_to_lagrange(g.iter().map(PrimeCurveAffine::to_curve).collect(), k);

    let g2 = <<Bn256 as Engine>::G2Affine as PrimeCurveAffine>::generator();
    let s_g2 = to_g2_point(&g2_data);

    Ok(params_kzg(k, g, g_lagrange, g2, s_g2))
}
```

## Driving from Nargo
Nargo specifies a [`CommonReferenceString`](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/acvm_interop/common_reference_string.rs#L42) trait that any ACVM backend must implement. `construct_halo2_params_from_aztec_crs` will marshall the KZG trusted setup parameters into Halo2's API for a CRS, and we can serialize/ deserialize the params as they are passed back and forth through the ACVM driver and the Halo2 Backend.