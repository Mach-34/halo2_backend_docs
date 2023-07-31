---
sidebar_position: 4
---

# ACVM Backends

Todo: API for the ACVM Backend


Note that we can control the number of terms in the ACIR expression. In our case and Barretenberg's case, [we choose to have 3 witness columns](https://github.com/Ethan-000/halo2_backend/blob/0.1.2/crates/noir_halo2_backend_pse/src/acvm_interop/proof_system.rs#L144). This is configurable according to the needs of your backend, however.
```rust
fn np_language(&self) -> Language {
        Language::PLONKCSat { width: 3 }
}
```