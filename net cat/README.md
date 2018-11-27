# net cat

## Problem

Using netcat (nc) will be a necessity throughout your adventure. Can you connect to `2018shell.picoctf.com` at port `37721` to get the flag?

## Hints

nc [tutorial](https://linux.die.net/man/1/nc)

## Solution

By reading the tutorial about netcat we know that netcat is the way we can connect/listen TCP/UDP by hand. 

Connect to the given hostname and port:

```
tumdoan$ nc  2018shell.picoctf.com 37721
```

Output
```
tumdoan$ nc  2018shell.picoctf.com 37721
That wasn't so hard was it?
picoCTF{NEtcat_iS_a_NEcESSiTy_0b4c4174}
```