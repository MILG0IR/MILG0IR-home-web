<?php
	#{
	#	"_comment": [
	#		"WARNING: DO NOT MODIFY.",
	#		"THE DETAILS ENTERED HERE WILL EFFECT IT'S DISPLAYED IN THE MENU."
	#	],
	#	"id": "100",
	#	"title": "Updater",
	#	"description": "",
	#	"uri_remote": "./pages/updater.php",
	#	"icon_category": "clouds",
	#	"icon": "upload"
	#}
?>
<?php
	include_once('../db/db_conx.php');
	$log = array();
	$errors = NULL;
	if(isset($_GET['log']) && isset($_GET['errors'])) {
		$log = json_encode($_GET['log']);
		$errors = $_GET['errors'];
	}
?>

<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<?php include_once($mg_dir['css']."css.php");	?>
		</head>
		<body onLoad='checkforupdate(<?php echo "\"".$app_info['Version']."\", \"".$app_info['Device']."\", \"".$app_info['Branch']."\"" ?>);'>
			<div class="content nav-inset">
				<h1 id="updatestatus"></h1>
				<button class="button-secondary" onclick="redirect('../update.php?download')">Force reinstall</button>
				<div class='log'>
					<?php
						if($errors != NULL){
							$log[] .= "";
							$log[] .= "<span class='error'>This installation has been complete with " . count($errors) . " errors.</span>";
						}
						$arrlength = count($log);
						if($arrlength > 0) {
							echo "";
								echo "<pre>";
								echo "<h4 class='title'>LOG:</h4>";
								echo "</br>";
								for($x = 0; $x < $arrlength; $x++) {
									if($x < 10) {
										echo "0" . $x . " - " . $log[$x];
										echo "<br>";
									} else {
										echo $x . " - " . $log[$x];
										echo "<br>";
									}
								}
								echo "</pre>";
						}
					?>
				</div>
				<div id="whatsnew">
					<?php
						$json = file_get_contents("https://raw.githubusercontent.com/MILG0IR/MILG0IR-home-".$app_info['Device']."/".$app_info['Branch']."/etc/whatsnew.json");
						$data = json_decode($json, true);
						print_r($data);
					?>
				</div>
			</div>
			<?php include_once($mg_dir['js']."js.php");	?>
		</body>