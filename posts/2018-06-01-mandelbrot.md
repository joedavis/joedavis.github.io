---
title: Fun Code Snippet №3
subtitle: Obfuscated Mandelbrot
comments: true
---

Procrastination strikes again. I wrote a bit of code a while ago to
print the Mandelbrot set to the terminal, but I was bored today so I
decided to obfuscate it:

```c
#define C     char     /* The Mandelbrot set is a fractal,  */
#define U unsigned     /* defined as the set of complex     */
#define u      U C     /* numbers {c}, which, under the     */
#define f    float     /* iterated map                      */
#define s   static
s u i ;s f z ,w,t;     /*       z = z² + c,                 */
_(f r,f c){u i ;z=
0.2;w=0.0;for(i=0;     /* for some initial value of z, do   */
i-(u)-1&&(z*z+w*w)     /* not diverge to infinity.          */
<4.;i=-~i){t=z+w;w
=2*z*w+c;z=t*(z-t+     /* This code assumes that the size   */
z)+r;}return(i);}p     /* of the terminal is at least       */
(U C c,u*i){*i=-~*     /* 80×25 characters, and that chars  */
i;return putchar(c     /* are encoded using ASCII/UTF-8.    */
);*i=-~*i;}main(){
u m,j;for(j=0;j-24     /* An additional assumption, is that */
;j=-~j,i=0)for(;(i     /* chars are 8 bits wide. Aside from */
-80)||!p('\n',&i);     /* that, I don't think there is      */
p(m,&i)){m=_(3.75*     /* anything in the code that isn't   */
0.01*i+-2.2,j/(12+     /* fully standards conforming (C89). */
1.e-9)+-1);m=((m>=
200)?64:(m>99)?111     /* Compile with:                     */
:(m>'1')?45:32);}}     /*     make mandelbrot               */
```

Output:
```sh
					     --@
					     @@@@@-
					      @@@o
				     @ o@@@@@@@@@@@@@@@o
				     @@@@@@@@@@@@@@@@@@@@@@-
				 -@@@@@@@@@@@@@@@@@@@@@@@@@@
				 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		       @        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		  -@@@@@@@@@@  -@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 --o@------oo@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		  -@@@@@@@@@@  -@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		       @        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
				 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
				 -@@@@@@@@@@@@@@@@@@@@@@@@@@
				     @@@@@@@@@@@@@@@@@@@@@@-
				     @ o@@@@@@@@@@@@@@@o
					      @@@o
					     @@@@@-
					     --@

```
