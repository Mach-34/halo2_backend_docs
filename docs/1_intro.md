---
slug: /
sidebar_position: 1
---

# Introduction

These docs serve two purposes:
1. Demonstrating the use of the Halo2 Backend in Aztec Noir
2. Providing clarity on adding a new backend to the Aztec Noir DSL

As is explained in the *Goals and Limitations* section, we only provide support for PSE's KZG version of Halo2 currently. Thus, all documentation focuses on the `noir_halo2_backend_pse` crate. Note that generally the connection to the ACVM Backend API is largely congruent across backends, but the arithmetization 

# Goals and Limitations
TODO
 * Scope of Zcash, axiom, pse
 * What is not working in axiom/ zcash
 * Missing black box functions in PSE
 * Fact that Noir will never be as efficient as pure halo2 since .nr cannot write custom gates and must rely on black box functions

# Getting help

You can join the [Noir Discord Channel](https://discord.gg/VgdzaDyffT) to get general help with the Aztec Noir DSL. This is the easiest way to get quick help with Noir. You can directly tag `jp4g#1337` in the Noir discord for assistance from one of the Halo2 Backend maintainers.


Additionally, you can use the [Aztec Discourse Forum](https://discourse.aztec.network) for longer form questions that involve more of the Aztec stack. While the discord is great for Noir-specific questions, you will find that questions involving the cryptography or engineering of the larget Aztec stack are best answered here.

# Credits

<ol>
  <li><a href="https://github.com/ethan-000">Ethan-000</a></li>
  <li><a href="https://mach34.space">Mach 34</a>
    <ul>
      <li><a href="https://github.com/jp4g">jp4g</a></li>
      <li><a href="https://github.com/ian-bright">ian-bright</a></li>
    </ul>
  </li>
</ol>

