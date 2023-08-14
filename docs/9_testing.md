---
sidebar_position: 9
---

# Testing
The Halo2 Backend ships with comprehensive testing of the included functionality. This comes in three forms:
 * Unit testing Halo2 circuits using Halo2's testing functionality
 * Integration testing Halo2 circuits by checking for proper outcomes when driven by Nargo
 * Integration testing of Halo2 EVM verifiers using REVM

Todo: Fuzzing

## Halo2 Unit Testing
In order to unit test a Noir circuit inside of Halo2, we need to retrieve some build artifacts that are unique to Noir. Specifically, we use a [`build_artifacts`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_common/src/test_helpers.rs#L201) function which compiles a circuit and solves the witness. We can read in these artifacts and marshall them into the proper ACVM objects in order to reuse the `NoirHalo2Translator` circuit synthesizer in our unit tests.

### Checking Equality Constraints
It is important to ensure that the arithmetic expressions being given to the circuit are actually constrained. We can do this by mutating the witness such that incorrect values are given. For instance, in [`test_public_io_circuit_fail_witness`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/tests.rs#L68-L110), we know that the witness at index `1` should be 3. We instead change that to 5. The circuit then adds 5 and 4 together expecting it to equal 7. This results in the Maingate constraint being unsatisfied when checked.

### Equality Constraints/ Public Inputs
Another case we want to check for is whether or not our Halo2 circuits are sensitive to improper public inputs. This is done by [`test_public_io_circuit_fail_instance`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/tests.rs#L34-L65). This circuit adds 3 and 4 together, and expects a public input that equals this arithmetic operation. In this case, we simply change the expected public input to something else (ex: 8). The unit test expects a permutation (equality constraint) error, which is found when executing the test.

### Checking Proper Execution
We've proven that the circuit will not verify when malicious inputs are given, but we also want to make sure a rational prover can generate Halo2 proofs. This is handled by [`test_circuits_native`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/tests.rs#L113-L138) which runs all circuits with no public IO through the Halo2 unit tester successfully. This unit test is additionally proven with public IO in [`test_public_io_circuit_success`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/tests.rs#L16-L31).

## Nargo Integration Testing
We want an automated check that the Halo2 Backend for Noir works in Nargo. To start, we have a [`test_helpers.rs`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_common/src/test_helpers.rs) utility which handles:
 * Installation of Noir using the Halo2 Backend
 * Execution of every Nargo command using the Halo2 backend.
With this utility, we can verify that any command one expects to use in Nargo will perform as necessary with the Halo2 Backend. This is automated by the [`test_pse_backend`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/tests/test_pse.rs#L14-L21) test. This test executes all commands and succeeds only if every command finishes without error.

## EVM Verifier Integration Testing
Though we have a [demonstration](./9_testing.md) of the evm contract verifier working as intended in solidity, it is equally as important to automate an integrity check.

We can check both the circuits with [no public IO](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/tests/test_pse.rs#L46-L63) and [those with public IO](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/tests/test_pse.rs#L66-L86). 

This step includes the use of `REVM` in a function [`evm_verify`](https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/tests/test_pse.rs#L29-L43):
```rust
fn evm_verify(deployment_code: Vec<u8>, instances: Vec<Vec<Fr>>, proof: Vec<u8>) {
    let calldata = encode_calldata(&instances, &proof);
    let success = {
        let mut evm = ExecutorBuilder::default().with_gas_limit(u64::MAX.into()).build();

        let caller = Address::from_low_u64_be(0x01);
        let verifier = evm.deploy(caller, deployment_code.into(), 0.into()).address.unwrap();
        let result = evm.call_raw(caller, verifier, calldata.into(), 0.into());

        dbg!(result.gas_used);

        !result.reverted
    };
    assert!(success);
}
```
Simply, this function will:
 * encode calldata used in the proof
 * deploy the Yul proof verifier in a simulated EVM environment
 * simulate a call to the verifier contract with the given proof
 * ensure that the call passes without issue