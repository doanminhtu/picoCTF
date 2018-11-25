# Reversing Warmup 2

## Problem

>Can you decode the following string "dGg0dF93NHNfczFtcEwz" from base64 format to ASCII?



## Hints

>Submit your answer in our competition's flag format. For example, if you answer was 'hello', you would submit 'picoCTF{hello}' as the flag.

## Solution

First you need to know what is base64. 

![base64 table](http://www.tenminutetutor.com/img/data-formats/binary-encoding/base64-table.png)

There are many tools online to help you decode and encode this base64, such as: [Base64 Decode & Encode](https://www.base64decode.org/)

### Note

But if you wanna do it by hand, you may find it helpful from my above script written in JavaScript.

In terminal run

```
node base64toASCII.js <base64_string>
```

Example
```node base64toASCII.js "TWFu" ```

Output
```Result: Man```
