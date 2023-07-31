---
sidebar_position: 2
---

# Getting Started
As of now, the Halo2 Backend is not shipped to the production Nargo CLI. To use it, you'll need to manually build the command line.

## Building Nargo
### Manually
In order to work with this repository, you'll need [rust installed on your local machine](https://www.rust-lang.org/tools/install). A nightly version of rust is required (`nightly-2022-10-28`), but this is handled by the repository's `toolchain` file.

1. Download the halo2 backend repository
```bash
git clone https://github.com/ethan-000/halo2_backend
cd halo2_backend
```

2. Download a custom fork of Noir and the Nargo CLI
```bash
git clone https://github.com/Ethan-000/noir --branch demo-0.1.2
cd noir
```

3. Install Nargo with the PSE version of Halo2 as the proving system backend
```bash
cargo install --path crates/nargo_cli --locked --features pse_halo2_backend --no-default-features
```

4. Ensure that the custom build of nargo has been installed:
```bash
which nargo
# should return /home/USER/.cargo/bin/nargo or something similar
```
Note that when switching back to the `noirup` installation, you will likely have to remove this file!

### Nix

TODO

## Operating Halo2 using Nargo/ Noir
You can now use `nargo` from the command line as you would with the production Barretenberg library. This section is a brief overview of using commands to drive Halo2 with Noir. The mechanics of this functionality is covered in more depth in future sections.

## Proving and Verifying
You can see examples of .nr files in `crates/noir_halo2_backend_common/test_programs`. You can also write your own circuits, but beware of using unimplemented black box functions.

In this case, we will use the example `1_mul` which already includes `Prover.toml` and `Verifier.toml`.

1. In the halo2_backend root directory, go to one of the test programs (or navigate to your custom program)
```bash
cd crates/noir_halo2_backend_common/test_programs/1_mul
```

2. Prove the circuit in halo2 KZG:
```bash
nargo prove
```
This outputs a halo2 KZG proof of the circuit with your given inputs.

3. Verify the circuit in halo2 KZG
```bash
nargo verify
```
Unlike the `bb.js` (`halo2.js` coming soon!) repository, nargo will re-execute the proof and then verify it. 

## Verifying on the EVM.
Though nargo is using halo2, it can be difficult to tell. One way to easily prove to yourself that you are using the halo2 backend is to generate the EVM verifier contract. While Barreteberg generates a solidity verifier, you'll see a Yul verifier for Halo2.
```bash
nargo codegen-verifier
# old: cat contract/plonk_vk.sol
cat contract/verifier.yul
```

See the EVM Verification page for more details on implementing your unit tests.

