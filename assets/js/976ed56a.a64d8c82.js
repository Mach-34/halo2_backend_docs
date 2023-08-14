"use strict";(self.webpackChunkhalo_2_backend_docs=self.webpackChunkhalo_2_backend_docs||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="Trusted Setup (CRS)",s={unversionedId:"crs",id:"crs",title:"Trusted Setup (CRS)",description:'A "Common Reference String" (CRS), alternatively known as a "Structured Reference String" (SRS), is the artifact from a trusted setup ("Powers of Tau") ceremony needed from most ZKP proving systems. In Halo2\'s vanilla (Zcash) version using IPA, there is no CRS. However, the Halo2 Backend for Aztec Noir uses the KZG commitment scheme which does use a CRS. Thus, our proving system needs to manage a CRS.',source:"@site/docs/5_crs.md",sourceDirName:".",slug:"/crs",permalink:"/halo2_backend_docs/crs",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"ACVM Backends",permalink:"/halo2_backend_docs/acvm"},next:{title:"Translating Noir to Halo2",permalink:"/halo2_backend_docs/contraints"}},c={},l=[{value:"Choosing a CRS",id:"choosing-a-crs",level:2},{value:"Computing Circuit Size",id:"computing-circuit-size",level:2},{value:"Putting the Ignite CRS into Halo2",id:"putting-the-ignite-crs-into-halo2",level:2},{value:"Driving from Nargo",id:"driving-from-nargo",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trusted-setup-crs"},"Trusted Setup (CRS)"),(0,a.kt)("p",null,'A "Common Reference String" (CRS), alternatively known as a "Structured Reference String" (SRS), is the artifact from a trusted setup ("Powers of Tau") ceremony needed from most ZKP proving systems. In Halo2\'s vanilla (Zcash) version using IPA, there is no CRS. However, the Halo2 Backend for Aztec Noir uses the KZG commitment scheme which does use a CRS. Thus, our proving system needs to manage a CRS.'),(0,a.kt)("p",null,"Since proving and verifying both rely on the CRS, most of the core nargo commands will prompt the backend to provide the CRS before proceeding with the actual functionality(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/noir-lang/noir/blob/master/crates/nargo_cli/src/cli/compile_cmd.rs#L75-L79"},"exmaple"),"). Nargo will prompt the update of the CRS, however in the Halo2 backend ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/noir-lang/noir/blob/master/crates/nargo_cli/src/cli/fs/common_reference_string.rs#L29-L47"},"we opt to regenerate the CRS each time")," this request is made for simplicity's sake. Ideally, we would cache this in the future."),(0,a.kt)("h2",{id:"choosing-a-crs"},"Choosing a CRS"),(0,a.kt)("p",null,"Given this fork of PlonK uses KZG commitments, we can use a standard universal trusted setup. There are a couple of options - for instance, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.axiom.xyz/axiom-architecture/how-axiom-works/kzg-trusted-setup"},'Axiom recommends the "Perpetual Powers of Tau Ceremony"'),". However, given the connection to Aztec in this project, we opt to use ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/aztec-protocol/aztec-crs-the-biggest-mpc-setup-in-history-has-successfully-finished-74c6909cd0c4"},"Aztec's Ignite CRS"),"."),(0,a.kt)("h2",{id:"computing-circuit-size"},"Computing Circuit Size"),(0,a.kt)("p",null,'A CRS has a specified size which is a power of two. We need to know the "dimensions" of our circuit to retrieve the minimal CRS large enough to support our circuit. Specifically, in Plonkish arithemtization, we want to know the number of rows our circuit uses (',(0,a.kt)("inlineCode",{parentName:"p"},"k"),"). To do this, we first use a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/dimension_measure.rs#L32-L42"},(0,a.kt)("inlineCode",{parentName:"a"},"dimension_measure.rs"))," file. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub(crate) fn k(&self) -> u32 {\n    u64::BITS\n        - ([self.instance, self.advice, self.fixed]\n            .into_iter()\n            .max_by(Ord::cmp)\n            .expect("Unexpected empty column iterator")\n            + self.blinding_factor)\n            .next_power_of_two()\n            .leading_zeros()\n        - 1\n}\n')),(0,a.kt)("p",null,"This function will find the length of the longest column used in the witness and add the length of the blinding factor rows. As mentioned, a CRS size must be to a power of two, so it finds the next value for ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," such that ",(0,a.kt)("inlineCode",{parentName:"p"},"2^k")," is less than the number of rows."),(0,a.kt)("h2",{id:"putting-the-ignite-crs-into-halo2"},"Putting the Ignite CRS into Halo2"),(0,a.kt)("p",null,"Now that we can compute the size of our circuit, we need an API to return a Halo2-compatible CRS. In a common ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_common/src/aztec_crs.rs#L13-L20"},(0,a.kt)("inlineCode",{parentName:"a"},"aztec_crs.rs"))," file, we can prompt an Aztec webserver to serve us the properly sized CRS. This is managed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/halo2_params.rs#L21-L42"},(0,a.kt)("inlineCode",{parentName:"a"},"halo2_params.rs")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub(crate) async fn constuct_halo2_params_from_aztec_crs(\n    translator: impl pse_halo2wrong::halo2::plonk::Circuit<Fr>,\n) -> Result<ParamsKZG<Bn256>, Error> {\n    let dimension = DimensionMeasurement::measure(&translator).unwrap();\n\n    let k = dimension.k();\n    let n = 1 << k;\n    assert!(n == 1 << k);\n\n    let (g1_data, g2_data) = get_aztec_crs(n).await?;\n\n    let mut g = vec![<<Bn256 as Engine>::G1Affine as PrimeCurveAffine>::generator()];\n\n    g.extend(g1_data.chunks(64).map(to_g1_point));\n\n    let g_lagrange = g_to_lagrange(g.iter().map(PrimeCurveAffine::to_curve).collect(), k);\n\n    let g2 = <<Bn256 as Engine>::G2Affine as PrimeCurveAffine>::generator();\n    let s_g2 = to_g2_point(&g2_data);\n\n    Ok(params_kzg(k, g, g_lagrange, g2, s_g2))\n}\n")),(0,a.kt)("h2",{id:"driving-from-nargo"},"Driving from Nargo"),(0,a.kt)("p",null,"Nargo specifies a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ethan-000/halo2_backend/blob/master/crates/noir_halo2_backend_pse/src/acvm_interop/common_reference_string.rs#L42"},(0,a.kt)("inlineCode",{parentName:"a"},"CommonReferenceString"))," trait that any ACVM backend must implement. ",(0,a.kt)("inlineCode",{parentName:"p"},"construct_halo2_params_from_aztec_crs")," will marshall the KZG trusted setup parameters into Halo2's API for a CRS, and we can serialize/ deserialize the params as they are passed back and forth through the ACVM driver and the Halo2 Backend."))}m.isMDXComponent=!0}}]);