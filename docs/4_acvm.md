---
sidebar_position: 4
---

# ACVM Backends
An ACVM Backend API is [comprised of a few parts](https://github.com/noir-lang/acvm/blob/master/acvm/src/lib.rs#L34-L40), as can be seen in [halo2_backend's `acvm_interop`](https://github.com/Ethan-000/halo2_backend/tree/0.1.2/crates/noir_halo2_backend_pse/src/acvm_interop):
 * [Common Reference String](./5_crs.md)
 * [Proof System Compiler](./7_proof_system.md)
 * Black Box Function Solver/ Partial Witness Generator (not included since black box funcitons largely unimplemented)
 * [Smart Contract](./8_evm.md)


