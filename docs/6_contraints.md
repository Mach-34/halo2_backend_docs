---
sidebar_position: 6
---

# Translating Noir to Halo2
The prevailing functionality of any ACVM backend is translating the ACIR provided by Noir into the corresponding circuit. In the case of the Halo2 backend, this is handled by [`circuit_translator.rs`](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/circuit_translator.rs). The `NoirHalo2Translator` is a Halo2 circuit object that uses the ACIR to programmatically synthesize constraints.

Currently, the Halo2 backend relies extensively on the [`halo2wrong Main Gate`](https://github.com/privacy-scaling-explorations/halo2wrong/tree/master/maingate). The Main Gate provides an intuitive circuit that emulates the standard plonk equation. Additionally, it has an ergonomic API to use different logic expressions.


## OpCode Flags
In the future, other black box functions like Sha256 will require other "chips" that use more columns than the Main Gate chip. To programmatically allocate columns according to the needs of the circuit, the Halo2 backend passes "Opcode Flags" which are used by the standard [`configure_with_params`](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/circuit_translator.rs#L43) API given to Halo2 Circuits in the PSE fork.

When OpCodes for functions like Sha256 are present, the [configure API](https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/halo2_plonk_api.rs#L105-L121) would have varying logic that conditionally allocates chips as needed. Note that since black box functions are largely absent currently, this functionality is simply a foundation for future work.

## Arithmetic Functions
Recall the [ACIR](./3_acir.md) walkthrough - for our width 3 PlonK arithmetization, we know that we will either have 3 linear terms, or 1 linear term and 1 multiplicative term. We use the 
## Black Box Functions

## Equality Constraints

## Public IO