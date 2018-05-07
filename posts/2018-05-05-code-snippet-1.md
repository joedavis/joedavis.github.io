---
title: Fun Code Snippet №1
subtitle: Two instruction Fibonacci sequence
layout: post
comments: true
background: circuit
---

Here's a fun little snippet of code I came across on HN a few days ago:

```fasm
@@: xadd rax, rdx
    loop @b
```

Given inputs `rax`{.fasm} $= x_0$, `rdx`{.fasm} $= x_1$, and 
`rcx`{.fasm} $= N$, it computes the $N$-th element of the sequence,

$$x_{n} = x_{n-1} + x_{n-2}$$

For $x_0,x_1 = 0,1$ this is just the $N$-th Fibonacci number.
