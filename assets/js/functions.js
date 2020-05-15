var api_key = "key";
//--------------------------- Universal functions ---------------------------//
	function _(x) {
		return document.getElementById(x);
	}
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	function filtervars(x){
		if(typeof(x) === 'undefined'){
			return '';
		}
		return x;
	};
	function redirect(uri) {
		window.location = uri;
	}
	function restrict(elem) {
		var tf = _(elem);
		var rx = new RegExp;
		if(elem == "email"){
			rx = /[' "]/gi;
		} else if(elem == "username"){
			rx = /[^a-z0-9]/gi;
		} else if(elem == "reference"){
			rx = /[^a-z]{2}[1-9]{1}-[1-9]{2}[^a-z]{1}-[^a-z]{3}-[1-9]{3}/gi;
		}
		tf.value = tf.value.replace(rx, "");
	}
	function emptyElement(x) {
		$("."+x).html("");
	}
	function scrollto(elem) {
		document.querySelector(elem).scrollIntoView({ behavior: 'smooth' })
	}
	function scrollby(x, y) {
		window.scrollBy({ top: x, left: y, behavior: 'smooth' });
	}
	function elemscrollto(elem1, elem2) {
		elem1.querySelector('.'+elem2).scrollIntoView({ behavior: 'smooth' })
	}
	function elemscrollby(elem, x, y) {
		elem.scrollBy({ top: x, left: y, behavior: 'smooth' });
	}
	function elemscrolltop(elem, y) {
		elem.scrollTop += y
	}
	function scrolltobottom(elem, behaviour) {
		document.querySelector(elem).scroll({ top: document.querySelector(elem).scrollHeight, left: 0, behavior: behaviour });
	}
	function date_time(elem, seconds=false, shtDay=false, shtMonth=false) {
		if(shtDay){
			days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
		} else {
			days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
		}
		date = new Date;
		if(shtMonth){
			months = new Array('Jnan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
		} else {
			months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
		}
		Y = date.getFullYear();
		M = date.getMonth();
		d = date.getDate();
		D = date.getDay();
		h = date.getHours();
		if(h<10) { h = "0"+h; }
		m = date.getMinutes();
		if(m<10) { m = "0"+m; }
		s = date.getSeconds();
		if(s<10) { s = "0"+s; }
		if(seconds) {
			result = ''+days[D]+', '+d+' '+months[M]+' - '+h+':'+m+':'+s;
		} else {
			result = ''+days[D]+', '+d+' '+months[M]+' - '+h+':'+m;
		}

		$('.'+elem).html(result);
		setTimeout('date_time("'+elem+'"'+', '+seconds+', '+shtDay+', '+shtMonth+');','1000');
	}
	function includeHTML() {
		var z, i, elmnt, file, xhttp;
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute("include-html");
		status = elmnt.getAttribute("page-status");
		if (file && status == "unloaded") {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					elmnt.innerHTML = this.responseText;
					elmnt.setAttribute("page-status", "200 - success");
				}
				if (this.status == 404) {
					elmnt.innerHTML = "Page not found.";
					elmnt.setAttribute("page-status", "404 - Page not found");
				}
				elmnt.removeAttribute("include-html");
				includeHTML();
			}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
		}
	}
	function initGrid(elem) {
		var attr = $(elem).attr('data-local-page');
		if(typeof attr !== typeof undefined && attr !== false) {
			sleep(100);
			var grid = new Muuri('.grid', {
				layoutDuration: 400,
				layoutEasing: 'ease',
				dragEnabled: true,
				dragSortInterval: 50
			});
		}
	}
	function validatepassword(pass) {
		if (pass.length < 8) {
			return "ERR-PAS-1";
		} else if (pass.match("#[0-9]+#")) {
			// return "Password must include at least one number!";
			return "ERR-PAS-2";
		} else if (pass.match("#[a-zA-Z]+#")) {
			// return "Password must include at least one letter!";
			return "ERR-PAS-3";
		} else {
			return "INF-PAS-1";
		}
	}
	function checkstring(str1, str2) {
		if(str1 == str2) {
			return "INF-STR-1";
		} else {
			return "ERR-STR-1";
		}
	}
	function checkregex(string, regex) {
		re = new RegExp( regex );
		return re.test(string);
	}
	function toggleNav() {
		$(".navbar-wrapper").toggleClass("navbar-open");
		$(".burger").toggleClass("burger-active");
	}
	function userPanel(panel) {
		if(panel == $('.header-user').attr('data-open-panel')) {
			$('.header-user').attr('data-open-panel', '');
		} else {
			$('.header-user').attr('data-open-panel', panel);
		}
	}
	function setTitle(title) {
		$(".header-title").text(title)
	}
//--------------------------- POPUP CONTROL ---------------------------//
//--------------------------- TOAST CONTROL ---------------------------//
	function toast(type, heading, subheading, onClick) {
		if(type == "success") {
			var img = "";
		} else if(type == "info") {
			var img = "";
		} else if(type == "warn") {
			var img = "";
		} else if(type == "error") {
			var img = "";
		} else if(type == "messaging") {
			var img = "";
		} else {
			var img = "";
		}
		var parent = $(".notify");
		var toast = document.createElement('div');
			toast.setAttribute('class', 'toast '+type);
			toast.setAttribute('onClick', onClick);
		var toast_icon = document.createElement('div');
			toast_icon.setAttribute('class', 'toast-icon');
		var toast_icon_image = document.createElement('img');
			toast_icon_image.setAttribute('src', img);

		var toast_content = document.createElement('div');
			toast_content.setAttribute('class', 'toast-content');
		var toast_content_title = document.createElement('p');
			toast_content_title.setAttribute('class', 'toast-type');
			toast_content_title.textContent = heading;
		var toast_content_messagge = document.createElement('p');
			toast_content_messagge.setAttribute('class', 'toast-message');
			toast_content_messagge.textContent = subheading;

		var toast_close = document.createElement('div');
			toast_close.setAttribute('class', 'toast-close');
			toast_close.setAttribute('onClick', 'parent = $(this).parent().fadeOut("slow", function() {$(this).remove();})');
		var toast_close_image = document.createElement('img');
			toast_close_image.setAttribute('src', '');

		parent.append(toast);
		toast.append(toast_icon);
		toast_icon.append(toast_icon_image);
		toast.append(toast_content);
		toast_content.append(toast_content_title);
		toast_content.append(toast_content_messagge);
		toast.append(toast_close);
		toast_close.append(toast_close_image);
	}
//--------------------------- Ajax functions ---------------------------//
	function getreferencedetails(reference) {
		var output = $.ajax({
			url: 'api/index.php',
			data: '#=get_reference_data&_='+api_key+'+&ref='+reference,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST'
		})
		return output;
	}
	function checkresponse(code) {
		var output = $.ajax({
			url: 'api/index.php',
			data: '#=search_code&_='+api_key+'+&code='+code,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		})
		return output;
	}
	function getUsername(user) {
		var output = $.ajax({
			url: 'api/index.php',
			data: '#=search_username&_='+api_key+'+&uid='+user,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		})
		return output;
	}
	function checkusername() {
		var u		= $("#signup.username").val();
		var status	= $("#signup.status-username");
		if(u != null && u != '') {
			$.ajax({
				url: 'api/index.php',
				data: '#=check_username&_='+api_key+'+&u='+u,
				contentType: 'application/x-www-form-urlencoded',
				type: 'POST',
			}).done(function(data) {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					if(data == "INF-UNC-1") {
						status.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					} else if(data == "INF-UNC-2") {
						status.html('<span class="tooltip status info"><svg class="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					} else {
						status.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					}
				});
			});
		} else {
			status.html('');
		}
	}
	function checkemail() {
		var e		= $("#signup.email").val();
		var status	= $("#signup.status-email");
		if(e != null && e != '') {
			$.ajax({
				url: 'api/index.php',
				data: '#=check_email&_='+api_key+'+&e='+e,
				contentType: 'application/x-www-form-urlencoded',
				type: 'POST',
			}).done(function(data) {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					if(data == "INF-EMC-1") {
						status.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					} else if(data == "INF-EMC-2") {
						status.html('<span class="tooltip status info"><svg class="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					} else {
						status.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					}
				});
			});
		} else {
			status.html('');
		}
	}
	function checkpassword() {
		var p1		= $("#signup.password").val();
		var p2		= $("#signup.password-confirm").val();
		var pass1	= $("#signup.status-password");
		var pass2	= $("#signup.status-password-confirm");
		if(p1 != "" && p2 == "") {			// PASSWORD 1 IS SET // PASSWORD 2 IS NOT
			// PASSWORD 1
			var p1_status = validatepassword(p1);
			checkresponse(p1_status).done(function(codeARRAY) {
				var codeJSON = jQuery.parseJSON(codeARRAY);
				if(p1_status == "INF-PAS-1") {
					pass1.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				} else {
					pass1.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				}
			});
		} else if(p1 == "" && p2 != "") {	// PASSWORD 1 IS NOT // PASSWORD 2 IS SET
			// PASSWORD 2
			var p2_status = checkstring(p1, p2);
			checkresponse(p2_status).done(function(codeARRAY) {
				var codeJSON = jQuery.parseJSON(codeARRAY);
				if(p2_status == "INF-STR-1") {
					pass2.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				} else {
					pass2.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				}
			});
		} else if(p1 != "" && p2 != "") {	// PASSWORD 1 IS SET // PASSWORD 2 IS SET
			// PASSWORD 1
			var p1_status = validatepassword(p1);
			checkresponse(p1_status).done(function(codeARRAY) {
				var codeJSON = jQuery.parseJSON(codeARRAY);
				if(p1_status == "INF-PAS-1") {
					pass1.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				} else {
					pass1.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				}
			});
			// PASSWORD 2
			var p2_status = checkstring(p1, p2);
			checkresponse(p2_status).done(function(codeARRAY) {
				var codeJSON = jQuery.parseJSON(codeARRAY);
				if(p2_status == "INF-STR-1") {
					pass2.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				} else {
					pass2.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
				}
			});
		}
	}
	function checkreference() {
		var reference = $("#signup.reference").val();
		var status = $("#signup.status-reference");
		if(reference != null && reference != '') {
			$.ajax({
				url: 'api/index.php',
				data: '#=check_reference&_='+api_key+'+&ref='+reference,
				contentType: 'application/x-www-form-urlencoded',
				type: 'POST',
			}).done(function(data) {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					if(data == "INF-REF-1") {
						status.html('<span class="tooltip status success"><svg class="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					} else {
						status.html('<span class="tooltip status error"><svg class="bi bi-exclamation-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z"/></svg><span class="tooltiptext">' + codeJSON[2] + '</span></span>');
					}
				});
			});
		} else {
			status.html('');
		}
	}
	function checkforupdate(version, device, branch) {
		var status		= $("#updatestatus");
		var updateBTN	= $(".update-button");
		$.ajax({
			url: 'api/index.php',
			data: '#=check_for_update&_='+api_key+'+&version='+version+'&device='+device+'&branch='+branch,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			checkresponse(data).done(function(codeARRAY) {
				var codeJSON = jQuery.parseJSON(codeARRAY);
				status.html(codeJSON[2]);
				if(data != 'INF-UPD-1') {
					toast(update, 'Update available', 'There is an update available click here to update your system')
				}
			});
		});
	}
	function unlockelement(element, username) {
		var password = $(".form-input-password").val();
		var status = $(".form-status");
		$.ajax({
			url: 'api/index.php',
			data: '#=confirm_password&_='+api_key+'+&u='+username+'&p='+password,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data == "success"){
				closePopup()
				$('.'+element+' .divlock').remove()
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.html('<span class="error">' + codeJSON[2] + '</span>');
				});
			}
		});
	}
//--------------------------- API CALLOUT FUNCTIONS ---------------------------//
	function signup() {
		var u = filtervars($('#signup.username').val());
		var e = filtervars($('#signup.email').val());
		var p1 = filtervars($('#signup.password').val());
		var p2 = filtervars($('#signup.password-confirm').val());
		var fn = filtervars($('#signup.firstname').val());
		var sn = filtervars($('#signup.surname').val());
		var ref = filtervars($('#signup.reference').val());
		var status = $('#signup.status');
		if(p1 == p2) {
			$.ajax({
				url: 'api/index.php',
				data: '#=signup&_='+api_key+'+&u='+u+'&e='+e+'&p='+p1+'&fn='+fn+'&sn='+sn+'&ref='+ref,
				contentType: 'application/x-www-form-urlencoded',
				type: 'POST',
			}).done(function(data) {
				if(data.includes("success")){
					toast(success, 'WELCOME!', 'Your account has been created successfully')
				} else {
					checkresponse(data).done(function(codeARRAY) {
						var codeJSON = jQuery.parseJSON(codeARRAY);
						status.html('<span class="error">' + codeJSON[2] + '</span>');
					});
				}
			});
		}
	}
	function login(e=null) {
		if(e == 'Guest') {
			var p = '';
		} else {
			var e = filtervars($('#login.email').val());
			var p = filtervars($('#login.password').val());
		}
		var status = $("#login.status");
		$.ajax({
			url: 'api/index.php',
			data: '#=login&_='+api_key+'+&e='+e+'&p='+p,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data.includes("success")){
				window.location = "home.php";
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.html('<span class="status error">' + codeJSON[2] + '</span>');
				});
			}
		});
	}
	function createreference(user) {
		var status = _("refstatus");
		$.ajax({
			url: 'api/index.php',
			data: '#=create_user_reference&_='+api_key+'+&u='+user,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(checkregex(data, /[a-z]{2}[0-9]{1}-[0-9]{2}[a-z]{1}-[a-z]{3}-[0-9]{3}/ig)){
				popup("info", data, "This is a one time use code. If you would like to invite multiple users, Please create one per person.", "Close");
				getreferencedetails(data).done(function(referenceARRAY) {
					var referenceJSON = jQuery.parseJSON(referenceARRAY);
					var parent = $(".table-references").find("tbody");
					var row = document.createElement('tr');
					var tabledata1 = document.createElement('td');
						tabledata1.textContent = referenceJSON[0];
					var tabledata2 = document.createElement('td');
						tabledata2.textContent = referenceJSON[1];
					var tabledata3 = document.createElement('td');
						tabledata3.textContent = referenceJSON[2];
					var tabledata4 = document.createElement('td');
						tabledata4.textContent = referenceJSON[3];
					var tabledata5 = document.createElement('td');
						tabledata5.textContent = referenceJSON[4];
					var tabledata6 = document.createElement('td');
					var img = document.createElement('img');
						img.setAttribute('onClick', "removalPopup(\"reference\", \"{\\\"id\\\":\\\"20\\\",\\\"reference_code\\\":\\\"yJ0-96D-iFE-744\\\",\\\"made_by_user\\\":\\\"rsmith\\\",\\\"made_by_time\\\":\\\"2020-04-22 23:07:44\\\",\\\"active\\\":\\\"1\\\"}\")");
						img.setAttribute('src', "<?php echo$mg_img['UI']['garbage']['image']?>");
						img.setAttribute('class', "actions waves-light waves-effect waves-light");
					parent.append(row);
					row.append(tabledata1);
					row.append(tabledata2);
					row.append(tabledata3);
					row.append(tabledata4);
					row.append(tabledata5);
					row.append(tabledata6);
					tabledata6.append(img);
				});
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.innerHTML = '<span class="status error">' + codeJSON[2] + '</span>';
				});
			}
		});
	}
	function deactivatereference(id) {
		$.ajax({
			url: 'api/index.php',
			data: '#=deactivate_user_reference&_='+api_key+'+&id='+id,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data == "success") {
				redirect("?page=users&scroll=reference_codes");
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.innerHTML = '<span class="status error">' + codeJSON[2] + '</span>';
				});
			}
		});
	}
	function reactivatereference(id) {
		$.ajax({
			url: 'api/index.php',
			data: '#=reactivate_user_reference&_='+api_key+'+&id='+id,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data == "success") {
				redirect("?page=users&scroll=reference_codes");
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.innerHTML = '<span class="status error">' + codeJSON[2] + '</span>';
				});
			}
		});
	}
	function updateranks(id) {
		var name = $(".form-change-name").val();
		var desc = $(".form-change-description").val();
		var icon = $(".form-change-icon").attr("src");
		$.ajax({
			url: 'api/index.php',
			data: '#=update_rank_info&_='+api_key+'+&id='+id+'&name='+name+'&desc='+desc+'&icon='+icon,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data == "success") {
				redirect("?page=users&scroll=ranks");
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.innerHTML = '<span class="status error">' + codeJSON[2] + '</span>';
				});
			}
		});
	}
	function updatepages(id) {
		var icon = $(".form-change-icon").attr("src");
		var title = $(".form-change-title").val();
		var desc = $(".form-change-description").val();
		var uri_local = $(".form-change-uri_local").val();
		var uri_remote = $(".form-change-uri_remote").val();
		$.ajax({
			url: 'api/index.php',
			data: '#=update_page_info&_='+api_key+'+&id='+id+'&title='+title+'&desc='+desc+'&icon='+icon+'&uri_local='+uri_local+'&uri_remote='+uri_remote,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data == "success") {
				redirect("?page=pages&scroll=pages")
			} else {
				checkresponse(data).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
					status.innerHTML = '<span class="status error">' + codeJSON[2] + '</span>';
				});
			}
		});
	}
	function forgotpassword() {
		var e = $('#rsp-email').val();
		var p1 = $('#rsp-pass1').val();
		var p2 = $('#rsp-pass2').val();
		var ref = $('#rsp-reference').val();
		var status = $('#rsp-status');
		if(p1 == p2) {
			$.ajax({
				url: 'api/index.php',
				data: '#=forgot_password&_='+api_key+'+&e='+e+'&p'+p1+'&ref'+ref,
				contentType: 'application/x-www-form-urlencoded',
				type: 'POST',
			}).done(function(data) {
				if(data.includes("success")){
					status.html('<span class="success">Your password has been reset, Please go back to login.</span>');
				} else {
					checkresponse(data).done(function(codeARRAY) {
						var codeJSON = jQuery.parseJSON(codeARRAY);
						status.html('<span class="error">' + codeJSON[2] + '</span>');
					});
				}
			});
		} else {
			status.html('<span class="error"> Your passwords do not match</span>');
		}
	}
	function logout() {
		$.ajax({
			url: 'api/index.php',
			data: '#=logout&_='+api_key+'+',
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data.includes("success")){
				redirect("login.php");
			} else {
				checkresponse(data);
			}
		});
	}
//--------------------------- THEME CONTROL FUNCTIONS ---------------------------//
	function changetheme(type, theme) {
		if(type == "main" ) {
			$('link[theme-type="main"]').attr("href","./themes/"+theme+".theme-main.css");
		} else if(type == "nav" ) {
			$('link[theme-type="navbar"]').attr("href","./themes/"+theme+".theme-nav.css");
		}
	}
//--------------------------- PAGE CONTROL ---------------------------//
	function openpage(pid, hideNav = false) {
		var screenwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		if(screenwidth < 512 && hideNav != false) {
			toggleNav();
		}

		$.ajax({
			url: 'api/index.php',
			data: '#=get_page_data&_='+api_key+'+&id='+pid,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			var pageJSON = jQuery.parseJSON(data);
			var element = _(pageJSON[0])
			if(typeof(element) != 'undefined' && element != null) {
				// Display the chosen page and append the class'
				$('.child').hide();
				$('#'+pageJSON[0]).show();
				$('.active').toggleClass("active");
				$('.child-active').toggleClass("child-active");
				$('#'+pageJSON[0]).toggleClass("child-active");
				$('#'+pageJSON[1]+'-'+pageJSON[0]).toggleClass("active");
			} else {
				// Create the page
				if(pageJSON[6] == "0") {
					var child = document.createElement('div');
					child.setAttribute('name', pageJSON[1]);
					child.setAttribute('id', pageJSON[0]);
					child.setAttribute('include-html', pageJSON[4]);
					child.setAttribute('page-status', 'unloaded');
					child.setAttribute('data-local-page', pageJSON[1]);
					child.setAttribute('class', 'child');
					if(pageJSON[1] == "Homepage") {
						child.setAttribute('data-includes-grid', 'true');
					}
					_("parent").appendChild(child);
					includeHTML();
				} else if(pageJSON[6] == "1") {
					var child = document.createElement('iframe');
					child.setAttribute('name', pageJSON[1]);
					child.setAttribute('id', pageJSON[0]);
					child.setAttribute('src', pageJSON[4]);
					child.setAttribute('class', 'child');
					_("parent").appendChild(child);
				} else {
					window.open(pageJSON[4], '_blank');
				}
				// Display the chosen page and append the class
				$('.child').hide();
				$('#'+pageJSON[0]).show();
				$('.active').toggleClass("active");
				$('.child-active').toggleClass("child-active");
				$('#'+pageJSON[0]).toggleClass("child-active");
				$('#'+pageJSON[1]+'-'+pageJSON[0]).addClass("active");
				$('#'+pageJSON[1]+'-'+pageJSON[0]).addClass("enabled");
				setTimeout(() => {
					initGrid('[data-includes-grid="true"]');
				}, 1000);
			}
			setTitle(pageJSON[1]);
		});
	}
	function reloadpage() {
		var elem = $(".child-active");
		if($(elem).is("div")) {
			var pid = elem.attr("id");
			elem.remove();
			openpage(pid, false);
		} else {
			elem.attr( 'src', function ( i, val ) {
				return val;
			});
		}
	}
	function closepage() {
		var elem = $(".child-active");
		var tab = $("#" + elem.attr('name') + "-" + elem.attr('id'));
		if($(elem).is("div")) {
			elem.remove();
		} else {
			elem.remove();
		}
		tab.removeClass("enabled");
		openpage(0);
	}
//--------------------------- Chat functions ----------------------------//
	function searchfriends() {
		var elem = $(".searchfriends");
		var elements = $('.discussions');
		elements.children('.discussion').each(function () {
			if (!$(this).attr('data-chat-username').toUpperCase().includes(elem.val().toUpperCase()) && !$(this).attr('data-chat-name').toUpperCase().includes(elem.val().toUpperCase()) ) {
				$(this).fadeOut(100);
			} else {
				$(this).fadeIn(100);
			}
		});
	}
	function setChatRead(u1, u2) {
		$.ajax({
			url: 'api/index.php',
			data: '#=mark_chat_as_read&_='+api_key+'+&u1='+u1+'&u2='+u2,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		})
	}
	function getChat(u2, type = null) {
		var u1 = $('.header-chat').attr('data-chat-user1');
		$.ajax({
			url: 'api/index.php',
			data: '#=get_messages&_='+api_key+'+&u1='+u1+'&u2='+u2,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(msgJSON) {
			if(checkregex(msgJSON, /[A-Z]{3}-[A-Z]{3}-/g)){
				checkresponse(msgJSON).done(function(codeARRAY) {
					var codeJSON = jQuery.parseJSON(codeARRAY);
				});
			} else {
				var parent = $('.messages-chat');
				parent.html('');
				var msgARRAY = jQuery.parseJSON(msgJSON);
				msgARRAY.forEach(function(row, i) {
					if(row.user1 == u1) {
						var message = document.createElement('div');
							message.setAttribute('class', "message");
						var response = document.createElement('div');
							response.setAttribute('class', "response");
						var text = document.createElement('p');
							text.setAttribute('class', "text");
							text.textContent = row.message;
						var timestamp = document.createElement('p');
							timestamp.setAttribute('class', "response-time");
							timestamp.textContent = row.timestamp.substring(11,16);

						parent.append(message);
						message.append(response);
						response.append(text);
						response.append(timestamp);
					} else {
						var message = document.createElement('div');
							message.setAttribute('class', "message");
						var received = document.createElement('div');
							received.setAttribute('class', "received");
						var text = document.createElement('p');
							text.setAttribute('class', "text");
							text.textContent = row.message;
						var timestamp = document.createElement('p');
							timestamp.setAttribute('class', "received-time");
							timestamp.textContent = row.timestamp.substring(11,16);

						parent.append(message);
						message.append(received);
						received.append(text);
						received.append(timestamp);
					}
				});
			}
			setChatRead(u1, u2);
			if(type != "update") {
				$('.header-chat').attr('data-chat-user2', $('#'+u2+'.discussion').attr('id'));
				$('.header-chat').children('.name').text($('#'+u2+'.discussion').attr('data-chat-name'));
				$('.chat').addClass('open');
				$('.chat').show();
				$('.welcome').hide();
				scrolltobottom('.messages-chat');
			}
			if ($('.discussions-header').attr('data-chats-status') != "updating") {
				$('.discussions-header').attr("data-chats-status", "updating")
					updateChats()
			}
		});
	}
	function updateChats() {
		var updateChatInterval = setInterval(function(){
			if($('div[data-local-page="Messages"]').length > 0) {
				var u2 = $('.header-chat').attr('data-chat-user2');
				getChat(u2, "update");
			} else {
				clearInterval(updateChatInterval)
			}
		}, 1500);
	}
	function sendChat() {
		var u1 = $('.header-chat').attr('data-chat-user1');
		var u2 = $('.header-chat').attr('data-chat-user2');
		var msg = $('.write-message').val();
		var msgBox = $('.write-message');
		$.ajax({
			url: 'api/index.php',
			data: '#=send_message&_='+api_key+'+&u1='+u1+'&u2='+u2+'&msg='+msg,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(data) {
			if(data == "success") {
				msgBox.val('');
				getChat(u2);
			} else {
				toast('error', 'Unable to send', 'We were unable to send your message, Please try again later')
			}
		});
	}
	function checkForNewChats(type) {
		var u1 = $('body').attr('data-uid');
		$.ajax({
			url: 'api/index.php',
			data: '#=get_messages_unread&_='+api_key+'+&u1='+u1,
			contentType: 'application/x-www-form-urlencoded',
			type: 'POST',
		}).done(function(msgJSON) {
			var msgARRAY = jQuery.parseJSON(msgJSON);
			var msgARRAY = jQuery.parseJSON(msgJSON);
			if(msgARRAY.length > 0) {
				msgARRAY.forEach(function(row, i) {
					if(type == 'initial') {
							console.log("Working initial update")
					} else if(type == 'update') {
						if($('div[data-local-page="Messages"].child-active').length > 0) {
							console.log("Working with chat enabled and visible")
						} else {
							getUsername(row.user1).done(function(data) {
								toast('message', data, row.message )
							});
						}
					}
				});
			}
		});
	}
	function updateEmoji() {
	}
//--------------------------- * ---------------------------//