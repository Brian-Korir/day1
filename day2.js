<!-- Created by Blank User -->

<!-- Created by Korir Brian-->

<!DOCTYPE html>
<html>
<head>
<title>Login / Signup</title>

<link
 href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">

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
