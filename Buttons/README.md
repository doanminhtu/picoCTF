# Buttons

## Problem

>There is a website running at [Link](http://2018shell.picoctf.com:18342) . Try to see if you can push their buttons.

## Hints

>Submit your answer in our competition's flag format. For example, if you answer was 'hello', you would submit 'picoCTF{hello}' as the flag.

## Solution

We are failed whenever we click the button2.

Let's find what is the difference between 2 buttons.

In this solution I use 2 tools : 
1. Chrome Web Browser 
2. Postman ([download link](https://www.getpostman.com/apps))

Open the given link in chrome then press F12 (open Chrome DevTools)

In elements tab you will find these code from the 1st page:
```
<form action="button1.php" method="POST">
    <input type="submit" value="PUSH ME! I am your only hope!">
</form>
```

Then press it and see what we can find in the 2nd page:
```
<div>
    You did it! Try the next button: <a href="button2.php">Button2</a>
</div>
```

We can observe from the code that when we push the 1st button, the client will send a **POST** request to sever. BUt not like it, button2 sends a **GET** request then we get a respones "Button2: ACCESS DENIED". So we are expect to send a POST request too for the button2. 

Open the Postman app
-Select method **POST**
-Fill in the url *http://2018shell.picoctf.com:18342/button2.php*
-Click **Send**

![Postman_result](https://i.imgur.com/3XqfXh9.png)

Here we come the result:
>picoCTF{button_button_whose_got_the_button_25a99f84}
