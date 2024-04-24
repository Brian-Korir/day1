<!-- Created by Blank User -->

<!-- Created by Korir Brian-->

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="logins.css">
<title>Login / Signup</title>

<link
 href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
<style>
/* Created by Blank User */

/* Created by QURASHI AKEEL */

@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /*font-family:'Satisfy',Cursive;*/
    font-family: 'Playpen Sans', cursive;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Helvetica;
    background-color:#a6f;
    height: 100vh;


form {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:80%;
    max-width:400px;
    padding: 2rem;
    border-radius: 4px;
    text-align:left;
}

h1 {
    font-size: 1.5rem;
    opacity: 75%;
    margin-bottom: 0.5rem;
    color:#222;
}

.social {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;
}

.social-link {
    border: none;
    padding: 0.5rem;
    width: 45%;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    font-size: 0.8rem;
    justify-content: center;
    border-radius: 3px;
    border:2px solid #fff;
}

.fb {
    background-color: #1877F2;
    color: white;
}

.fb:hover{
    border:2px solid #1877f2;
    background-color:#fff;
    color:#1877f2;
}

.tw {
    background-color: #00acee;
    color: white;
}

.tw:hover{
    border:2px solid #00acee;
    background-color:#fff;
    color:#00acee;
}

input {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    outline-color:#49f;
}

.fp {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    width: 100%;
    margin: 0.5rem 0;
}

p {
    font-size: 0.8rem;
    margin-top: 1rem;

}

input[type="checkbox"] {
    margin: 0 4px 0 0;
    padding: 0;
    width: 15px;
    height: 15px;
}

.check {
    display: flex;
}

a[href="#"] {
    color: #49f;
}

.submit {
    margin: 1rem 0;
    width: 100%;
    border-radius: 3px;
    border:.5px solid #fff;
    padding: 0.5rem;
    color: white;
    background-color: #49f;   
}

.submit:active{
    background-color:#fff;
    color:#49f;
    border:.5px solid #49f;
}

img {
    width: 12px;
    background-color: white;
    padding: 2px;
}

.copy {
    opacity: 60%;
    margin: 2rem 0 0 0;
    padding: 0;
}



#logform{
    display:block;
}

#signform, #resetform{
    display:none;
}











</style>
</head>
<body>

<!-- Login form -->
        
<form id="logform">

<h1>Login</h1>

<div class="social">

<button class="social-link fb" type="button">
<img src="https://cdn-icons-png.flaticon.com/512/20/20837.png"> Facebook
</button>
                
<button class="social-link tw" type="button">
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"> X
</button>
            
</div>

<input class="email" type="text" placeholder="Your Email or Phone no." required>
            
<input class="password" type="password" placeholder="Your password" maxlength="10" required>


<div class="fp">

<div class="check">
<input type="checkbox" id="rem" checked>
<label for="rem">Remember me</label>
</div>

<a href="#" onclick="reset()">Forget password?</a>
            
</div>

<button class="submit" type="button">Login</button>

<p>
<span>Not a member?</span>
<a href="#" onclick="sign()">Signup Now</a>
</p>

<p class="copy">&copy;Copyright 2023<br>Modified by Blank User</p>

</form>



<!-- Signup form -->

<form id="signform">

<h1>Sign-up</h1>

<div class="social">

<button class="social-link fb" type="button">
<img src="https://cdn-icons-png.flaticon.com/512/20/20837.png"> Facebook
</button>
                
<button class="social-link tw" type="button">
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"> X
</button>
            
</div>


<input class="name" type="text" placeholder="Full name" required>

<input class="email" type="text" placeholder="Email or Phone" required>
            
<input class="password" type="password" placeholder="Create password" maxlength="10" required>

<input class="password" type="password" placeholder="Confirm password" maxlength="10" required>

<button class="submit" type="button">Sign-up</button>

<p>
<span>Already a member?</span>
<a href="#" onclick="log()">Login Now</a>
</p>

<p class="copy">&copy;Copyright 2023<br>Modified by Blank User</p>

</form>



<!-- Reset password form -->

<form id="resetform">

<h1>Reset password</h1>

<input class="email" type="text" placeholder="Your registered Email or Phone no." required> 

<button class="submit" type="button">Send OTP</button>

<input class="otp" type="tel" placeholder="One time password (OTP)" maxlength="6" required>

<button class="submit" type="button">Verify OTP</button>
            
<input class="password" type="password" placeholder="Create new password" maxlength="10" required>

<input class="password" type="password" placeholder="Confirm new password" maxlength="10" required>

<button class="submit" type="button">Submit</button>

<p>
<span>Try again?</span>
<a href="#" onclick="log()">Login</a>
</p>

<p class="copy">&copy;Copyright 2023<br>Modified by Blank User</p>

</form>


</body>
</html>
