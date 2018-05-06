---
title: GSOC Early Milestones
subtitle: U-Boot now builds on NetBSD
layout: post
background: circuit
comments: true
...

Last night I managed to get the first builds of U-Boot on NetBSD up and 
running. I hadn't expected this part of the project to be happening 
so early in the process. This is a screenshot of the serial console, after
running U-Boot's `version` command:

![U-Boot version command over serial 
console](/media/serial-screenshot.png)

As of now I've tested this build on a BeagleBone Black, but I've yet to boot
an entire NetBSD system from it. I hope to bootstrap an entire NetBSD
system on my BeagleBone, U-Boot included, over the coming weeks. (I'm not
particularly looking forward to the compile times, but there's not much
I can do about them)

Given my rate of progress so far, and having familiarized myself further
with the U-Boot source, I'm considering adding an FFS driver to my
project deliverables, as was in the original project idea page off of which I
based my submitted proposal. Unfortunately, that decision will have to
wait a while longer; I've a *Linear Algebra 2* exam tomorrow, and I
really should be studying right now.
