/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);





var mode = Cookies.get('mode');
			if (mode== 'night'){
				$("body").css('color', 'white');
				$("body").css('background-color', '#0E0E0E');
				$("#footer").css("background-color", "#1a1a1a");
				Cookies.set('mode', 'night');
				$(".mode_select").text("DAY");
			}
			if (mode== undefined){
				Cookies.set('mode', 'day');
				$(".mode_select").text("DAY");
			}
			if (mode == 'day'){
				Cookies.set('mode', 'day');
				$(".mode_select").text("NIGHT");
			}
			
				$(".mode_select").click(function(){
					var current_mode = Cookies.get('mode');
					if (current_mode == 'day'){
					  $("body").css('color', 'white');
					  $("body").css('background-color', '#0E0E0E');
					  Cookies.set('mode', 'night');
					  $(".mode_select").text("DAY");
					  $("#footer").css("background-color", "#1a1a1a");
					}
					if (current_mode == 'night'){
					  $("body").css('color', '#585858');
					  $("body").css('background-color', 'white');
					  Cookies.set('mode', 'day');
					  $(".mode_select").text("NIGHT");
					  $("#footer").css("background-color", "#f6f6f6");
					}
				});


$(document).ready(function(){
	$('#main a').click(function(e) {
		e.preventDefault();
		href = $(this).attr('href');
		$("body").css("animation-duration", "1000ms !important");
		$("body").addClass("animated zoomOut");
		setTimeout(function(){
			window.location = href;
		},1100);
	});
	$('#menu .inner a').click(function(f) {
		f.preventDefault();
		href = $(this).attr('href');
		$("body").css("animation-duration", "500ms");
	$("body").addClass("animated fadeOutRight");
	
		setTimeout(function(){
		 window.location = href;
	},1700);
	   });

})




				  