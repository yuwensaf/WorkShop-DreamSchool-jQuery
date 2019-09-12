jQuery(document).ready(function($) {
	

    // 當滑鼠移到選單（.header_menu>a）上時
	$('.header_menu>li>a').on('mouseover', function(event) {
		event.preventDefault();

		// 防止事件的傳播：mouseover只會作用在「選單」上，不會擴散到「網頁」，所以.jq_submenu不會消失
		event.stopPropagation();
		
		// 讓 .jq_submenu 出現
		$(this).siblings().fadeIn();

		// 讓「除了自己以外的.jq_submenu」消失
		$(this).parent().siblings().children('.jq_submenu').fadeOut();

		// 讓「除了自己以外的選單」，移除.active
		$(this).parent().siblings().children('a').removeClass('active');
	});

    // 當滑鼠移到網頁上的任何地方
	$(document).on('mouseover', function(event) {
		event.preventDefault();
		
		// .jq_submenu 都會消失
		$('.jq_submenu').fadeOut();
	});

	// 當滑鼠移到.jq_submenu上時
	$('.jq_submenu').on('mouseover', function(event) {
		event.preventDefault();

		// 防止事件的傳播：mouseover只會作用在「.jq_submenu」上，不會擴散到「網頁」，所以.jq_submenu不會消失
		event.stopPropagation();

		// .jq_submenu會出現
		$(this).show();

		// 選單（.header_menu>a）會加上.active
		$(this).siblings().addClass('active');

		// 除了自己以外的選單（.header_menu>a），會移除.active
		$(this).parent().siblings().children('a').removeClass('active');
	});


	// 點擊.gototop，就往上滑到網頁頂端
	$('.gototop a').click(function(event) {
		
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
			},
			1000);
	});

	
	// swiper banner
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'fade',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

    
  })

	//lightbox
	lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true
    })




});





