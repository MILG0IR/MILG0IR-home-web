<?php
	#{
	#	"_comment": [
	#		"WARNING: DO NOT MODIFY.",
	#		"THE DETAILS ENTERED HERE WILL EFFECT IT'S DISPLAYED IN THE MENU."
	#	],
	#	"id": "999",
	#	"title": "Settings",
	#	"description": "",
	#	"uri_remote": "./pages/settings.php",
	#	"icon": "data:image/png;base64,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"
	#}
?><?php
	include_once("../db/db_conx.php");
?>
<div class="nav">
	<input class="title-check" type="checkbox" id="navTitleCheck"/>
	<label class="title" for="navTitleCheck">menu
		<div class="title-icon"> </div>
	</label>
	<ul class="menu">
		<li class="menu-item"><a onClick="scrollto('#pages')">Pages and Categories</a></li>
		<li class="menu-item"><a onClick="scrollto('#users')">Users & Groups</a></li>
		<li class="menu-item"><a onClick="scrollto('#customization')">Customization</a></li>
		<li class="menu-item"><a onClick="scrollto('#update')">Update and Security</a></li>
		<li class="menu-item"><a onClick="scrollto('#whats-new')">Whats new</a></li>
	</ul>
</div>
<div class="content">
	<div class="panel" id="pages">
		<header>
			<h1>Pages!</h1>
			<input type="button" value="New page">
		</header>
		<div class="table">
			<div class="thead">
				<div class="tr">
					<div class="th">ID</div>
					<div class="th">Icon</div>
					<div class="th">Title</div>
					<div class="th">description</div>
					<div class="th">Actions</div>
				</div>
			</div>
			<div class="tbody">
				<?php
					$sql = "SELECT * FROM `var_pages` ORDER BY CHAR_LENGTH(`id`), `id` asc;";
					$query = mysqli_query($db_conx, $sql);
					foreach($query as $page) {
						$disabled_pages = array("Homepage", "Messages", "Profile", "Settings");
						if(in_array($page['title'],$disabled_pages)) {
							$page_class = "row-disabled";
							$page_image = $mg_img['multimedia']['cancel']['image'];
							$page_click = "toast('warn', 'warning', 'You are not able to edit core pages.')";
						} else {
							$page_class = "row-enabled";
							$page_image = $mg_img['multimedia']['info']['image'];
							$page_click = "editPopup('page', '".str_replace("'", "\\'", json_encode($page))."')";
						};
						echo "<div class=\"tr\" id=\"".$page['title']."\">";
						echo "	<div class=\"td\">".$page['id']."</div>";
						echo "	<div class=\"td\"><img src=\"".$page['icon']."\"></div>";
						echo "	<div class=\"td\">".$page['title']."</div>";
						echo "	<div class=\"td\">".$page['description']."</div>";
						echo "	<div class=\"td\"><img src=\"".$page_image."\" onClick=\"".$page_click."\" class=\"action\"></div>";
						echo "</div>";
					}
				?>
			</div>
		</div>
	</div>
	<div class="panel" id="categories">
		<header>
            <h1>Categories!</h1>
			<input type="button" value="New Category">
		</header>
	</div>
	<div class="panel" id="users">
		<header>
            <h1>Users!</h1>
			<input type="button" value="New User">
		</header>
		<div class="table">
			<div class="thead">
				<div class="tr">
					<div class="th">ID</div>
					<div class="th">Avatar</div>
					<div class="th">Banner</div>
					<div class="th">Username</div>
					<div class="th">E-Mail</div>
					<div class="th">First name</div>
					<div class="th">Surname</div>
					<div class="th">Change password?</div>
					<div class="th">Enabled</div>
					<div class="th">Registered</div>
					<div class="th">Actions</div>
				</div>
			</div>
			<div class="tbody">
				<?php
					// FIND ALL USERS
						$i = 0;
						$disabled_users = array("ADMINISTRATOR", "Guest");
						$sql = "SELECT * FROM `users` ORDER BY CHAR_LENGTH(`uid`), `uid` asc;";
						$query = mysqli_query($db_conx, $sql);
						foreach($query as $usr) {
							if(in_array($usr['username'],$disabled_users)) {
								$usr_class[$i] = "disabled";
								$usr_image[$i] = $mg_img['multimedia']['cancel']['image'];
								$usr_click[$i] = "";
							} else {
								$usr_class[$i] = "enabled";
								$usr_image[$i] = $mg_img['multimedia']['more']['image'];
								$usr_click[$i] = "editPopup(\"user\", \"".str_replace("\"", "\\\"", json_encode($usr))."\")";
							}
							$usr_uid[$i] = $usr['uid'];
							$usr_username[$i] = $usr['username'];
							$usr_email[$i] = $usr['email'];
							$usr_pass_change[$i] = $usr['change_passkey'];
							$usr_enabled[$i] = $usr['enabled'];
							$i++;
						}
						$i = 0;
						$sql = "SELECT * FROM `user_preferences` ORDER BY CHAR_LENGTH(`uid`), `uid` asc;";
						$query = mysqli_query($db_conx, $sql);
						foreach($query as $usr) {
							$usr_lang[$i] = $usr['lang'];
							$i++;
						}
						$i = 0;
						$sql = "SELECT * FROM `user_data` ORDER BY CHAR_LENGTH(`uid`), `uid` asc;";
						$query = mysqli_query($db_conx, $sql);
						foreach($query as $usr) {
							$usr_rank[$i] = $usr['rank'];
							$usr_firstname[$i] = $usr['firstname'];
							$usr_surname[$i] = $usr['surname'];
							$usr_avatar[$i] = $usr['avatar'];
							$usr_banner[$i] = $usr['banner'];
							$usr_registered[$i] = $usr['registered'];
							$i++;
						}
					// PRINT ALL USERS
						$x = 0;
						while($x < $i) {
							echo "<div class=\"tr\" id=\"".$usr_uid[$x]."\">";
							echo "	<div class=\"td\">".$usr_uid[$x]."</div>";
							echo "	<div class=\"td\"><img src=\"".$usr_avatar[$x]."\"></div>";
							echo "	<div class=\"td\"><img src=\"".$usr_banner[$x]."\"></div>";
							echo "	<div class=\"td\">".$usr_username[$x]."</div>";
							echo "	<div class=\"td\">".$usr_email[$x]."</div>";
							echo "	<div class=\"td\">".$usr_firstname[$x]."</div>";
							echo "	<div class=\"td\">".$usr_surname[$x]."</div>";
							echo "	<div class=\"td\">".$usr_pass_change[$x]."</div>";
							echo "	<div class=\"td\">".$usr_enabled[$x]."</div>";
							echo "	<div class=\"td\">".$usr_registered[$x]."</div>";
							echo "	<div class=\"td\"><img src=\"".$usr_image[$x]."\" onClick='".$usr_click[$x]."' class=\"action ".$usr_class[$x]."\"></div>";
							echo "</div>";
							$x++;
						}
					unset($i);
					unset($x);
				?>
			</div>
		</div>
	</div>
	<div class="panel" id="groups">
		<header>
            <h1>Ranks!</h1>
			<input type="button" value="New Rank">
		</header>
		<div class="table">
			<div class="thead">
				<div class="tr">
					<div class="th">ID</div>
					<div class="th">Icon</div>
					<div class="th">Name</div>
					<div class="th">Description</div>
					<div class="th">Actions</div>
				</div>
			</div>
			<div class="tbody">
				<?php
					// FIND ALL RANKS
						$sql = "SELECT * FROM `user_ranks` ORDER BY CHAR_LENGTH(`id`), `id` asc;";
						$query = mysqli_query($db_conx, $sql);
						foreach($query as $rank) {
							$disabled_ranks = array("ADMINISTRATOR", "GUEST");
							if(in_array($rank['name'],$disabled_ranks)) {
								$rank_sortable = "unsortable";
								$rank_class = "disabled";
								$rank_actions_image = $mg_img['multimedia']['cancel']['image'];
								$rank_actions = "";
								$rank_permissions_image = $mg_img['multimedia']['cancel']['image'];
								$rank_permissions = "";
							} else {
								$rank_sortable = "sortable";
								$rank_class = "enabled";
								$rank_actions_image = $mg_img['multimedia']['more']['image'];
								$rank_actions = "editPopup(\"rank\", \"".str_replace("\"", "\\\"", json_encode($rank))."\")";
								$rank_permissions_image = $mg_img['multimedia']['levels']['image'];
								$rank_permissions = "alert(\"tbd\")";
							};
						// PRINT ALL RANKS
							echo "<div class=\"tr\" id=\"".$rank['name']."\">";
							echo "	<div class=\"td\">".$rank['id']."</div>";
							echo "	<div class=\"td\"><img src=\"".$rank['icon']."\"></div>";
							echo "	<div class=\"td\">".$rank['name']."</div>";
							echo "	<div class=\"td\">".$rank['description']."</div>";
							echo "	<div class=\"td\">";
							echo "		<img src=\"".$rank_actions_image."\" onClick='".$rank_actions."' class=\"action ".$rank_class."\">";
							echo "		<img src=\"".$rank_permissions_image."\" onClick='".$rank_permissions."' class=\"action ".$rank_class."\">";
							echo "	</div>";
							echo "</div>";
					}
				?>
			</div>
		</div>
	</div>
	<div class="panel" id="customization">
		<header>
            <h1>Customization!</h1>
		</header>
	</div>
	<div class="panel" id="update">
		<header>
            <h1>Update!</h1>
		</header>
	</div>
	<div class="panel" id="database">
		<header>
            <h1>Database!</h1>
		</header>
	</div>
	<div class="panel" id="security">
		<header>
            <h1>Security!</h1>
		</header>
	</div>
	<div class="panel" id="whats-new">
		<header>
            <h1>Whats New!</h1>
		</header>
		<?php
			$json = file_get_contents("https://raw.githubusercontent.com/MILG0IR/MILG0IR-home-".$app_info['Device']."/".$app_info['Branch']."/etc/whatsnew.json");
			$data = json_decode($json, true);
			$i = 0;
			$x = 0;
			$Status = array();
			$Type = array();
			$Version = array();
			$Date = array();
			$Title = array();
			$Description = array();
			$Changelog_notes = array();
			$Changelog_changes = array();
			$Changelog_added = array();
			$Changelog_removed = array();
			foreach($data["Changelog"] as $cl) {
				$i++;
				$Status[$i] = $cl['Status'];
				$Type[$i] = $cl['Type'];
				$Version[$i] = $cl['Version'];
				$Date[$i] = $cl['Date'];
				$Title[$i] = $cl['Title'];
				$Description[$i] = $cl['Description'];
				foreach($cl['Changelog-notes'] as $cn) {
					$Changelog_notes[$i] = $cl['Changelog-notes'];
				}
				foreach($cl['Changelog-changes'] as $cc) {
					$Changelog_changes[$i] = $cl['Changelog-changes'];
				}
				foreach($cl['Changelog-added'] as $ca) {
					$Changelog_added[$i] = $cl['Changelog-added'];
				}
				foreach($cl['Changelog-removed'] as $cr) {
					$Changelog_removed[$i] = $cl['Changelog-removed'];
				}
			}
			while($x < $i) {
				$x++;
				echo '	<div class="update">';
				echo '		<h3 class="version">'.$Version[$x].'</h3>';
				echo '		<h6 class="">'.$Title[$x].'</h6>';
				echo '		<p class="type">'.$Type[$x].' '.$Status[$x].'</p>';
				echo '		<p class="date"> Released: '.$Date[$x].'</p>';
				echo '		<p class="description">'.$Description[$x].'</p>';
				echo '		<div class="changelog_notes">';
					if (isset($Changelog_notes[$x])) {
						foreach($Changelog_notes[$x] as $notes) {
							if($notes != NULL){
								echo '<p class="note">'.$notes.'</p>';
							}
						}
					}
				echo '		</div>';
				echo '		<div class="changelog_changes">';
					if (isset($Changelog_changes[$x])) {
						foreach($Changelog_changes[$x] as $changes) {
							if($changes != NULL){
								echo '<p class="change">'.$changes.'</p>';
							}
						}
					}
				echo '		</div>';
				echo '		<div class="changelog_added">';
					if (isset($Changelog_added[$x])) {
						foreach($Changelog_added[$x] as $added) {
							if($added != NULL){
								echo '<p class="addition">'.$added.'</p>';
							}
						}
					}
				echo '		</div>';
				echo '		<div class="changelog_removed">';
					if (isset($Changelog_removed[$x])) {
						foreach($Changelog_removed[$x] as $removed) {
							if($removed != NULL){
								echo '<p class="removal">'.$removed.'</p>';
							}
						}
					}
				echo '		</div>';
				echo '	</div>';
			}
		 ?>
	</div>
</div>