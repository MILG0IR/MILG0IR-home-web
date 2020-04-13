<?php
	include_once("./variables.php");
	if(!$user_ok) {
		header("location: ".$mg_dir['root']."login.php");
		exit();
	}
?>
<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>Logout</title>
			<link rel="icon" href="favicon.ico" type="image/x-icon">
			<? include_once($mg_dir['js']."ajax.js.php");		?>
			<? include_once($mg_dir['js']."autoscroll.js.php");	?>
			<? include_once($mg_dir['js']."fade-slide.js.php");	?>
			<? include_once($mg_dir['js']."functions.js.php");	?>
			<? include_once($mg_dir['css']."style.css.php");	?>
		</head>
		<body OnLoad="logout()">
			<div class="preloader">
				<?	include_once($mg_dir['templates']."preloader.php")	?>
			</div>
			<div class="content">
				<?	include_once($mg_dir['templates']."logout.php")	?>
			</div>
		</body>
	</html>