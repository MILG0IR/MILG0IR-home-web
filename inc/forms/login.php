<form id="loginform" onsubmit="return false;">
	<h3>Log In Here</h3>

	<div>Email Address:</div>
	<input onfocus="emptyElement('status')" type="text" id="email" autocomplete="username">

	<div>Password:</div>
	<input onfocus="emptyElement('status')" type="password" id="password" autocomplete="current-password">

	<br /><br />
	<button class="btn-primary" id="loginbtn" onclick="login()">Log In</button>
	<button class="btn-secondary" id="" onclick="redirect('<?echo$mg_dir['root']?>signup.php')">Go to signup</button>

	<p id="status"></p>
	<a href="<?echo$mg_dir['root']?>forgot_password.php">Forgot Your Password?</a>
</form>