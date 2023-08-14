"use strict";(self.webpackChunkhalo_2_backend_docs=self.webpackChunkhalo_2_backend_docs||[]).push([[303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:8},o="EVM Verification",l={unversionedId:"evm",id:"evm",title:"EVM Verification",description:"WARNING: Halo2 Verifier Contracts MUST be compiled with solc version 0.8.19 or earlier. Failure to do so will result in an OpcodeNotFound when trying to deploy the contract. See related issue for explanation.",source:"@site/docs/8_evm.md",sourceDirName:".",slug:"/evm",permalink:"/halo2_backend_docs/evm",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Proving and Verifying (Proof System)",permalink:"/halo2_backend_docs/proof_system"},next:{title:"Testing",permalink:"/halo2_backend_docs/testing"}},s={},c=[{value:"Methodology",id:"methodology",level:2},{value:"Demo Repository",id:"demo-repository",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evm-verification"},"EVM Verification"),(0,a.kt)("p",null,"WARNING: Halo2 Verifier Contracts MUST be compiled with solc version 0.8.19 or earlier. Failure to do so will result in an ",(0,a.kt)("inlineCode",{parentName:"p"},"OpcodeNotFound")," when trying to deploy the contract. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/privacy-scaling-explorations/snark-verifier/issues/37"},"See related issue for explanation"),"."),(0,a.kt)("p",null,"Zero Knowledge is highly applicable outside of blockchain. However, many usecases for snarks enable privacy preserving mechanics on the EVM, or simply rely on the decentralized execution environment as a neutral settlement layer for snark computations. For this reason, EVM verification is an integral part of an ACVM backend. "),(0,a.kt)("h2",{id:"methodology"},"Methodology"),(0,a.kt)("p",null,"An ACVM Backend must implement a trait ",(0,a.kt)("inlineCode",{parentName:"p"},"SmartContract")," that includes the function ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/acvm_interop/smart_contract.rs#L46"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_contract_from_vk")),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn eth_contract_from_vk(\n    &self,\n    mut common_reference_string: &[u8],\n    circuit: &Circuit,\n    verification_key: &[u8],\n) -> Result<String, Self::Error> { ...\n")),(0,a.kt)("p",null,"Intuitively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"common_reference_string")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"verification_key")," parameters are what is being encoded in the solidity verifier. However, there are differences between how Barretenberg handles verification keys and how Halo2 does it. Specifically, barretenberg serializes the number of public inputs into the verification key, while Halo2 does not need this information for regular proof verification. This becomes an issue when reaching EVM contract generation, since the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/privacy-scaling-explorations/snark-verifier/"},"snark-verifier")," API needs to know the number of public inputs in order to generate the contract. Thus, ",(0,a.kt)("inlineCode",{parentName:"p"},"circuit")," is passed as well so that we can extract the number of public inputs that are used by the circuit."),(0,a.kt)("p",null,"Once we've marshalled all of this information into Halo2-friendly wrappers, we can simply call the []",(0,a.kt)("inlineCode",{parentName:"p"},"gen_evm_verifier"),"](",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/acvm_interop/smart_contract.rs#L23"},"https://github.com/Ethan-000/halo2_backend/blob/0.1.3/crates/noir_halo2_backend_pse/src/acvm_interop/smart_contract.rs#L23"),") function written to handle creation of the contract. The ",(0,a.kt)("inlineCode",{parentName:"p"},"snark-verifier")," SDK will construct a Yul contract that can be used to verify the snark, and passes it back as a string to the ACVM backend API. Nargo will subsequently save this in ",(0,a.kt)("inlineCode",{parentName:"p"},"contract/plonk_vk.sol")," (you may need to change this to ",(0,a.kt)("inlineCode",{parentName:"p"},"plonk_vk.yul"),")."),(0,a.kt)("h2",{id:"demo-repository"},"Demo Repository"),(0,a.kt)("p",null,"Though ",(0,a.kt)("a",{parentName:"p",href:"/halo2_backend_docs/testing"},"integration testing")," is performed, we also need to prove in full that the Halo2 Backend can be used on chain. This is done with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mach-34/snark-verifier-tests"},(0,a.kt)("inlineCode",{parentName:"a"},"snark-verifier-tests"))," repository."),(0,a.kt)("p",null,"This repository shows the basic use of the Halo2 verifier contracts generated by Nargo. Specifically, take the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mach-34/snark-verifier-tests/blob/main/test/PublicIOVerifier.t.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIOVerifier.t.sol")," test"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: UNLICENSED\npragma solidity <0.9;\n\nimport "forge-std/Test.sol";\nimport {PublicIOVerifierWrapper} from "../contracts/PublicIOVerifierWrapper.sol";\nimport {YulDeployer} from "../contracts/YulDeployer.sol";\n\ncontract PublicIOVerifierTest is Test {\n    address verifierAddress;\n    PublicIOVerifierWrapper verifierWrapper;\n    YulDeployer yulDeployer;\n\n    function setUp() public {\n        yulDeployer = new YulDeployer();\n        verifierAddress = address(\n            yulDeployer.deployContract("../snark-verifiers/9_public_io")\n        );\n        verifierWrapper = new PublicIOVerifierWrapper(verifierAddress);\n    }\n\n    function test_verifier() external {\n        // Read in proof from calldata file\n        string memory proofStr = vm.readFile(\n            "snark-verifiers/data/9_public_io.calldata"\n        );\n\n        // Verify proof and assert success\n        verifierWrapper.validProof(7, vm.parseBytes(proofStr));\n    }\n}\n')),(0,a.kt)("p",null,"First, we need to put our Yul verifier onchain. This is done with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mach-34/snark-verifier-tests/blob/main/contracts/YulDeployer.sol"},(0,a.kt)("inlineCode",{parentName:"a"},"YulDeployer.sol"))," helper contract which accesses the ",(0,a.kt)("inlineCode",{parentName:"p"},"cast")," CLI using forge ffi to deploy the contract and return the address."),(0,a.kt)("p",null,"Once we have deployed the verifier, we need to supply it the proof in the correct format. To do that, we need to generate the calldata using the ",(0,a.kt)("inlineCode",{parentName:"p"},"snark-verifier")," SDK. This repository includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"encode-calldata")," CLI tool for this purpose. Assuming that we have:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Compiled our contract with ",(0,a.kt)("inlineCode",{parentName:"li"},"nargo compile main")),(0,a.kt)("li",{parentName:"ol"},"Computed the witness with ",(0,a.kt)("inlineCode",{parentName:"li"},"nargo execute witness")),(0,a.kt)("li",{parentName:"ol"},"Computed the proof with ",(0,a.kt)("inlineCode",{parentName:"li"},"nargo prove p"),"\nWe will have the artifacts needed to construct the calldata needed to verify our proof. For instance, we can generate the calldata with ",(0,a.kt)("inlineCode",{parentName:"li"},"./target/release/calldata_encoder ./programs/10_public_io"),". These unit tests manually store this file, but a FFI call could similarly be made to programatically build and load the calldata into the contract call.")),(0,a.kt)("p",null,"Finally, we can verify our proof. In the given example, we have a simple ZK proof that X+Y=Z, where X is 3 and Y is 4. Z is a public input that we are expected to supply in the EVM. Thus, we can verify the ZK proof using ",(0,a.kt)("inlineCode",{parentName:"p"},"verifierWrapper.validProof(7, vm.parseBytes(proofStr));")))}u.isMDXComponent=!0}}]);