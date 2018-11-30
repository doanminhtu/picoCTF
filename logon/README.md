# Logonss

## Problem

## Hints

## Solution

Open link in chrome, than sign in as any users. We can access the page but we could not get the flag since we did not sign in as "admin". Check the cookie, we find that there is a cookie name "admin" which is always set to "False". Change that cookie to True, we may get the flag. 

open Console tab in Deverloper Tools (F12)

```
document.cookie="admin=True";
```

Enter, then refresh the page. We got the flag:

> picoCTF{l0g1ns_ar3nt_r34l_a280e12c}