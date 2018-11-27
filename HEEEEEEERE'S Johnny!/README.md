# 

##

##

## Solution 
```
tumdoan$ ./john --wordlist=rockyou.txt shadow
tumdoan$ ./john --show  shadow
root:hellokitty:17770:0:99999:7:::

1 password hash cracked, 0 left
```

### Flag
```
umdoan$ nc 2018shell.picoctf.com 38860
Username: root
Password: hellokitty
picoCTF{J0hn_1$_R1pp3d_4e5aa29e}
```