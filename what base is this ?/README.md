# What base is this ?

## Problem

> To be successful on your mission, you must be able read data represented in different ways, such as hexadecimal or binary. Can you get the flag from this program to prove you are ready? Connect with nc 2018shell.picoctf.com 14390.

## Hints

>I hear python is a good means (among many) to convert things.

>It might help to have multiple windows open

## Solution

Once you connect to the sever, you have to convert a given key into words in order to get the next key. There are total 3 keys in this section. That means you will solve 3 small problems one by one:

1. Convert binary to ascii

2. Convert hex (base 16) to ascii

3. Convert octal (base 8) to ascii

There are many tools decoding this online and easy to use but I wanna do it myself so here is the code:

#### Execute
```
node decode2str.js <base> <string>
```
Base here is 2,8,16
Example: 
```
node decode2str.js 2 "01110010 01101111 01100010 01101111 01110100"
```
> Output: robot
