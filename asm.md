---
title: SIMDsons rule
subtitle: Fun with Assembly and Floating Point
layout: post
---

``` nasm
;; Simpsons rule implemented in assembly

;; double simpson(double (*f)(double), double a, double b)
;; Args:
;;	rdi	f
;;	xmm0	a
;;	xmm1	b
;; Returns:
;;	xmm0	(b-a)/6 * (f(a) + 4*f((a+b)/2) + f(b))
simpson:
	sub	rsp, 40 ;; TODO
	mov	rbx, rdi
	movsd	[rsp], xmm0
	movsd	[rsp+8], xmm1

	addsd	xmm0, xmm1
	mov	rax, 2.0
	movq	xmm2, rax
	divsd	xmm0, xmm2
	movsd	[rsp+16], xmm0

	movsd	xmm0, [rsp]
	subsd	xmm1, xmm0
	mov	rax, 6.0
	movq	xmm2, rax
	divsd	xmm1, xmm2
	movsd	[rsp+24], xmm1

	movsd	xmm0, [rsp]
	call	rbx
	movsd	[rsp], xmm0

	movsd	xmm0, [rsp+8]
	call	rbx
	movsd	[rsp+8], xmm0

	movsd	xmm0, [rsp+16]
	call	rbx
	mov	rax, 4.0
	movq	xmm1, rax
	mulsd	xmm0, xmm1
	addsd	xmm0, [rsp+8]
	addsd	xmm0, [rsp]
	mulsd	xmm0, [rsp+24]

	add	rsp, 40
	ret
```

```python
def simpson(f, a, b):
    print('hello, world')
    return (b-a)/6 * (f(a) + 4*f((a+b)/2) + f(b))
```
