/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch?
	if (browser.mobile)
		$body.addClass('is-touch');

	// Forms.
	var $form = $('form');

	// Auto-resizing textareas.
	$form.find('textarea').each(function () {

		var $this = $(this),
			$wrapper = $('<div class="textarea-wrapper"></div>'),
			$submits = $this.find('input[type="submit"]');

		$this
			.wrap($wrapper)
			.attr('rows', 1)
			.css('overflow', 'hidden')
			.css('resize', 'none')
			.on('keydown', function (event) {

				if (event.keyCode == 13
					&& event.ctrlKey) {

					event.preventDefault();
					event.stopPropagation();

					$(this).blur();

				}

			})
			.on('blur focus', function () {
				$this.val($.trim($this.val()));
			})
			.on('input blur focus --init', function () {

				$wrapper
					.css('height', $this.height());

				$this
					.css('height', 'auto')
					.css('height', $this.prop('scrollHeight') + 'px');

			})
			.on('keyup', function (event) {

				if (event.keyCode == 9)
					$this
						.select();

			})
			.triggerHandler('--init');

		// Fix.
		if (browser.name == 'ie'
			|| browser.mobile)
			$this
				.css('max-height', '10em')
				.css('overflow-y', 'auto');

	});

	// Menu.
	var $menu = $('#menu');

	$menu.wrapInner('<div class="inner"></div>');

	$menu._locked = false;

	$menu._lock = function () {

		if ($menu._locked)
			return false;

		$menu._locked = true;

		window.setTimeout(function () {
			$menu._locked = false;
		}, 350);

		return true;

	};

	$menu._show = function () {

		if ($menu._lock())
			$body.addClass('is-menu-visible');

	};

	$menu._hide = function () {

		if ($menu._lock())
			$body.removeClass('is-menu-visible');

	};

	$menu._toggle = function () {

		if ($menu._lock())
			$body.toggleClass('is-menu-visible');

	};

	$menu
		.appendTo($body)
		.on('click', function (event) {
			event.stopPropagation();
		})
		.on('click', 'a', function (event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$menu._hide();

			// Redirect.
			if (href == '#menu')
				return;

			window.setTimeout(function () {
				window.location.href = href;
			}, 350);

		})
		.append('<a class="close" href="#menu">Close</a>');

	$body
		.on('click', 'a[href="#menu"]', function (event) {

			event.stopPropagation();
			event.preventDefault();

			// Toggle.
			$menu._toggle();

		})
		.on('click', function (event) {

			// Hide.
			$menu._hide();

		})
		.on('keydown', function (event) {

			// Hide on escape.
			if (event.keyCode == 27)
				$menu._hide();

		});

})(jQuery);





var mode = Cookies.get('mode');
if (mode == 'night') {
	night();
}
if (mode == undefined) {
	Cookies.set('mode', 'day');
	day();
}
if (mode == 'day') {
	Cookies.set('mode', 'day');
	day()
}

$(".mode_select").click(function () {
	var current_mode = Cookies.get('mode');
	if (current_mode == 'day') {
		night();
	}
	if (current_mode == 'night') {
		day();
	}
});


$(document).ready(function () {


	$('#main a').click(function (e) {
		e.preventDefault();
		href = $(this).attr('href');
		$("body").css("animation-duration", "1500ms !important");
		$("body").addClass("animated fadeOutDown");
		setTimeout(function () {
			window.location = href;
		}, 700);
	});
	$('#menu .inner a').click(function (f) {
		f.preventDefault();
		href = $(this).attr('href');
		$("#main").css("animation-duration", "400ms");
		$("#nav").css("animation-duration", "700ms");
		$("#header").css("animation-duration", "700ms");
		$(".night").css("animation-duration", "400ms");
		$("#nav").addClass("animated fadeOutRight");
		$("#main").addClass("animated fadeOutDown");
		$("#header").addClass("animated fadeOutUp");
		$(".night").addClass("animated fadeOutUp");
		$(".game_notify").addClass("animated fadeOutUp");

		setTimeout(function () {
			window.location = href;
		},40000);

		
		$(".news_container").html('<a class="twitter-timeline wow fadeInUp" data-width="768"  data-height="700" data-dnt="true" href="https://twitter.com/RNS_Hoops?ref_src=twsrc%5Etfw">Tweets by RNS_Hoops</a>')
	});
	var copy = '<li>&copy; ROTHESAY NETHERWOOD SCHOOL PREP-BOYS BASKETBALL. ALL RIGHTS RESERVED.</li><li>BASE THEME BY: HTML5 UP!</li>'
	$(".copyright").html(copy)
	
	function photo(){
		if ($(window).scrollTop() >= $(".photo_inner").offset().top-20){
			$(".photo_inner").css("padding", 0);
			$(".photo_inner").css("max-width", "200em");
			$(".carousel img").css("border-radius", 0);
		}
		else{
			$(".photo_inner").css("padding", "");
			$(".photo_inner").css("max-width", "");
			$(".carousel img").css("border-radius","3px");
		}
	}
	$(window).scroll(photo);


})

$(window).on('load', function () {
	setTimeout(function () {
		$("#wrapper").css("opacity", "1");
	}, 100);
	$(".game_notify").css("height", $(".game_notify").outerHeight());

	


});

function night() {

	$("body").css('color', 'white');

	$("body").css('background-color', '#0E0E0E');
	$("#footer").css("background-color", "#1a1a1a");
	$(".alert-npa").addClass("game-alert-dark-mode");
	$(".notification").addClass("notification-dark-mode");
	Cookies.set('mode', 'night');
	$(".mode_select").html('<i class="far fa-sun"></i>LIGHTS ON');

	$(".mode_select").addClass("animated bounce");
	$(".upcoming-game").css('background-color', 'transparent');
	$(".upcoming-game").css('border', '1px solid white');

	setTimeout(function () {
		$(".mode_select").removeClass("animated bounce");
	}, 1500)


}

function day() {
	$("body").css('color', '#585858'); $("body").css('background-color', 'white'); $(".alert-npa").removeClass("game-alert-dark-mode");
	$(".notification").removeClass("notification-dark-mode");
	Cookies.set('mode', 'day');

	$(".mode_select").addClass("animated bounce");
	$("#footer").css("background-color", "#f6f6f6");
	$(".mode_select").html('<i class="far fa-moon"></i>LIGHTS OFF');
	setTimeout(function () {
		$(".mode_select").removeClass("animated bounce");
	}, 1500)
}




var device_width = $("#main .inner").width();
$(".news_container").html('<a class="twitter-timeline wow fadeInUp" data-width="'+device_width+'"  data-height="700" data-dnt="true" href="https://twitter.com/RNS_Hoops?ref_src=twsrc%5Etfw">Tweets by RNS_Hoops</a>');



$('.game_notify h4').click(function (v) {
	v.preventDefault();
	href = "2019.html";
	$(".game_notify").css("height", "101vh");
	$(".game_notify h3").addClass("animated fadeOutUp");
	$(".game_notify h4").addClass("animated fadeOutUp");
	
	setTimeout(function () {
		night();
		window.location = href;
	}, 700);
});

$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload() 
    }
});


function doStuff(data) {
	//Data is usable here
	result = data;
	console.log(result);
	
}

function parseData(url, callBack) {
	Papa.parse(url, {
		download: true,
		header: true,
		dynamicTyping: true,
		complete: function (results) {
			callBack(results.data);
		}
	});
}