# grep 1

## Problem

>Can you find the flag in [file](https://2018shell.picoctf.com/static/805ac70722810caa0b1c02bc88ef68d8/file) ? This would be really obnoxious to look through by hand, see if you can find a faster way. You can also find the file in /problems/grep-1_0_c0c0c16438cdbee39591397e16389f59 on the shell server.

## Hints

>grep [tutorial](https://ryanstutorials.net/linuxtutorial/grep.php)

## Solution

Read the given tutorial above and we can find what is grep.

Let's start with find a sentence contain 'picoCTF'

```
tumdoan$ egrep 'picoCTF' file
```

Oh, the answer is appeared

```
tumdoan$ egrep 'picoCTF' file
picoCTF{grep_and_you_will_find_52e63a9f}
```
