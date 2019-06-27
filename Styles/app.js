$(function() {

	// autoSlide = setInterval(function() {
	// 	$('.next').trigger('click');
	// }, 3000);
	
	// code for next buttom
	$('.next').click(function(event) {
		// clear autoSlide
 		// clearInterval(autoSlide);
		var next_after = $('.active').next();

		//  moving_position
		var moving_position = $('.moving').index() + 1;
		$('.circles ul li').removeClass('moving');
		// if slide is at last slide, move to first slide
		if (moving_position == $('.circles ul li').length) {
			moving_position = 0;
		} 
		$('.circles ul li:nth-child('+(moving_position+1)+')').addClass('moving');

		// NEXT: if at the last slide 
		if (next_after.length == 0) {
			$('.active').addClass('next-hide').one('webkitAnimationEnd', function(event) {
				$('.next-hide').removeClass('next-hide');
			});
			$('._1slide:nth-child(1)').addClass('next-show').one('webkitAnimationEnd', function(event) {
				$('.active').removeClass('active');
				$('.next-show').addClass('active').removeClass('next-show');
			});
		}
		// if not at th last slide
		else {
			$('.active').addClass('next-hide').one('webkitAnimationEnd', function(event) {
				$('.next-hide').removeClass('next-hide');
			});
			next_after.addClass('next-show').one('webkitAnimationEnd', function(event) {
				$('.active').removeClass('active');
				$('.next-show').addClass('active').removeClass('next-show');
			});
		}
	});
	// code for prev buttom
	$('.prev').click(function(event) {
		// clear autoSlide
		// clearInterval(autoSlide);

		var prev_before = $('.active').prev();

		//  moving_position
		var moving_position = $('.moving').index() + 1;
		$('.circles ul li').removeClass('moving');
		// if slide is at first slide, move to last slide
		if (moving_position == 1) {
			moving_position = $('.circles ul li').length +1;
		} 
		$('.circles ul li:nth-child('+(moving_position-1)+')').addClass('moving');

		// PREV: if not at the first slide
		if (prev_before.length == 1) {
			$('.active').addClass('prev-hide').one('webkitAnimationEnd', function(event) {
				$('.prev-hide').removeClass('prev-hide');
			});
			prev_before.addClass('prev-show').one('webkitAnimationEnd', function(event) {
				$('.active').removeClass('active');
				$('.prev-show').addClass('active').removeClass('prev-show');
			});
		}
		// PREV: if at the first slide
		else {
			$('.active').addClass('prev-hide').one('webkitAnimationEnd', function(event) {
				$('.prev-hide').removeClass('prev-hide');
			});
			$('._1slide:last-child').addClass('prev-show').one('webkitAnimationEnd', function(event) {
				$('.active').removeClass('active');
				$('.prev-show').addClass('active').removeClass('prev-show');
			});
		}
	});
	// code for circles buttoms
	$('.circles ul li').click(function(event) {
		/* Act on the event */
		$('.circles ul li').removeClass('moving');
		$(this).addClass('moving');

		var current_slide = $(this).index()+1;
		// slide hien tai
		$('.active').addClass('prev-hide').one('webkitAnimationEnd', function(event) {
			$('.prev-hide').removeClass('prev-hide');
		});
		// silde tiep theo khi click
		$('._1slide:nth-child('+current_slide+')').addClass('prev-show').one('webkitAnimationEnd', function(event) {
			$('.active').removeClass('active');
			$('.prev-show').addClass('active').removeClass('prev-show');
		});
	});

	// determine position of chapters
	var x1 = $('.about').offset().top,
		x2 = $('.education').offset().top,
		x3 = $('.experience').offset().top,
		x4 = $('.portfolio').offset().top,
		x6 = $('.contact').offset().top,
		top = $('.banner').offset().top;
	$('.menu ul li:nth-child(2) a').on('click', function() {
		event.preventDefault();
		$('html').animate({scrollTop: x1}, 1000);
	});
	$('.menu ul li:nth-child(3) a').on('click', function() {
		event.preventDefault();
		$('html').animate({scrollTop: x2}, 1000);
	});
	$('.menu ul li:nth-child(4) a').on('click', function() {
		event.preventDefault();
		$('html').animate({scrollTop: x3}, 1000);
	});
	$('.menu ul li:nth-child(5) a').on('click', function() {
		event.preventDefault();
		$('html').animate({scrollTop: x4}, 1000);
	});
	$('.menu ul li:nth-child(7) a').on('click', function() {
		event.preventDefault();
		$('html').animate({scrollTop: x6}, 1000);
	});
	$('.go-up').on('click', function() {
		event.preventDefault();
		$('html').animate({scrollTop: top}, 1000);
	});

	// Scroll 
	$(window).scroll(function(event) {
		var vitri = $('html').scrollTop();
		if (vitri >= 600) {
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

	// PORTFOLIO
	$('.filter a').click(function(event) {
		var view_images = $(this).data('my_images');
		//console.log('XEM ANH',view_images);
		var show_name = $(this).text();
		$('.filter-name p').text(show_name);
		$('.filter-img ul li').each(function() {
			if ($(this).hasClass(view_images)) {
				$(this).show(300);
			}
			else {
				$(this).hide(300);
			}
		});
		return false;
	});
});