var touch = false, clickEv = 'click';

/*Slider main*/
function slider_main(){
  "use strict"; 
  $('#home_main-slider').carousel({
    interval: false, 
     pause: false  
  })
}

/*Slider banner*/
function slider_banner(){
	"use strict"; 
	$(".home_bansli_layout .bansli_1488857167874").owlCarousel({
		items: 6,
		loop: true,
		//autoplay: true,
		smartSpeed: 200,
		paginationSpeed: 800,
		rewindSpeed: 1000,
		responsive: {
			1199: {
				items: 6
			},
			991: {
				items: 5
			},
			767: {
				items: 4
			},
			540: {
				items: 3
			},
			480: {
				items: 3
			},
			360: {
				items: 3
			},
			120: {
				items: 2
			}
		},
		dots: false,
		nav: false
	});
}

/*Slider Footer*/
function slider_footer(){
  "use strict"; 
  
	if($(".footer_brand_content").length){
		$(".footer_brand_content").owlCarousel({
		  dots: false,
		  autoPlay: false,
		  items: 6,
		  smartSpeed : 200,
		  paginationSpeed : 800,
		  rewindSpeed : 1000,
		  responsive:{
			1199:{
			  items:6
			},
			991:{
			  items:5
			},
			767:{
			  items:4
			},
			540:{
			  items:3
			},
			480:{
			  items:3
			},
			360:{
			  items:2
			},
			120:{
			  items:2
			}
		  },
		  nav: true,
		  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		});
	}
}

/*Slider blog*/
function slider_blog(){
  "use strict"; 
	if ($(".home_blogsli_layout .blogsli_1486529878168").length) {
		$(".home_blogsli_layout .blogsli_1486529878168").owlCarousel({
			loop: true,
			items: 1,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			dots: true,
			navSpeed: 1000,
			slideBy: 1,
			navRewind: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			autoplay: false,
			mouseDrag: true,
			touchDrag: true,
			responsiveRefreshRate: 1000,
			stagePadding: 150,
			responsive: {
				0: {
					stagePadding: 0
				},
				480: {
					stagePadding: 0
				},
				768: {
					stagePadding: 0
				},
				992: {
					stagePadding: 130
				},
				1200: {
					stagePadding: 150
				}
			}
		});
	}
}

/* slider product*/
function slider_product(){
	"use strict";
	
  /* Slider Thumb */
  if($(".slider-3itemsc").length){
    $(".slider-3itemsc").owlCarousel({
      dots: false,
      autoPlay: false,
      items: 3,
      smartSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      responsive:{
        1199:{
          items:3
        },
        991:{
          items:3
        },
        767:{
          items:3
        },
        540:{
          items:3
        },
        480:{
          items:3
        },
        360:{
          items:2
        },
        120:{
          items:2
        }
      },
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $(".show-image-load").css("display", "none");
    $(".slider-3itemsc").css("display", "block !important");
  }
  
  /* Slider QuickView */
  if($("#gallery_main_qs .qs-vertical-slider").length){
    $("#gallery_main_qs .qs-vertical-slider").owlCarousel({
      dots: false,
      autoPlay: false,
      items: 3,
      smartSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      responsive:{
        1199:{
          items:3
        },
        991:{
          items:3
        },
        767:{
          items:3
        },
        540:{
          items:3
        },
        480:{
          items:3
        },
        360:{
          items:2
        },
        120:{
          items:2
        }
      },
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $(".show-image-load").css("display", "none");
    $(".slider-3itemsc").css("display", "block !important");
  }
  
  /* Slider Relatedpro */
  if($(".related-products .rp-slider").length){
    $(".related-products .rp-slider").owlCarousel({
      items: 4,
      smartSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      responsive:{
        1199:{
          items:4
        },
        991:{
          items:3
        },
        767:{
          items:2
        },
        540:{
          items:2
        },
        480:{
          items:2
        },
        360:{
          items:2
        },
        120:{
          items:2
        }
      },
      dots: false,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $(".related-products .rp-slider").css("display", "block !important");
  } 
  
	$(".home_prosli_layout .slider_1490870274900").owlCarousel({
		items: 1,
		smartSpeed: 200,
		autoplay: true,
		loop: true,
		paginationSpeed: 800,
		rewindSpeed: 1000,
		responsive: {
			1199: {
				items: 1
			},
			120: {
				items: 1
			}
		},
		dots: true
	});	

}

/* Handle dropdown box */
function handleDropdown(){
	"use strict";
	
  if($('.dropdown-toggle').length){
	$('.dropdown-toggle').parent().on({
	  mouseenter: function() {
		if(touch == false && getWidthBrowser() > 767 ){
		  $(this).find('.dropdown-menu').stop(true, true).slideDown(300);
		}
	  }, mouseleave: function() {
		if(touch == false && getWidthBrowser() > 767 ){
		  $(this).find('.dropdown-menu').hide();
	    }
	  }
	});
  }

  $('nav .dropdown-menu').each(function(){
    $(this).find('li').last().addClass('last');
  });


  $('.dropdown').on('click', function() {
    if(touch == false && getWidthBrowser() > 767 ){
      var href = $(this).find('.dropdown-link').attr('href');
      window.location = href;
    }
  });

  $('.cart-link').on('click', function() {
    if(touch == false && getWidthBrowser() > 767 ){
      var href = $(this).find('.dropdown-link').attr('href');
      window.location = href;
    }
  });

}

/* Fucntion get width browser */
function getWidthBrowser() {
	"use strict";
	
  var myWidth;

  if( typeof( window.innerWidth ) == 'number' ) { 
    //Non-IE 
    myWidth = window.innerWidth;
    //myHeight = window.innerHeight; 
  } 
  else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { 
    //IE 6+ in 'standards compliant mode' 
    myWidth = document.documentElement.clientWidth; 
    //myHeight = document.documentElement.clientHeight; 
  } 
  else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { 
    //IE 4 compatible 
    myWidth = document.body.clientWidth; 
    //myHeight = document.body.clientHeight; 
  }

  return myWidth;
}

// handle scroll-to-top button
function handleScrollTop() {
	"use strict";
	
  function totop_button(a) {
    var b = $("#scroll-to-top"),
        f = $(".cart-float-right");

    if (a == "on") { 
      f.addClass("on fadeInRight ").removeClass("off fadeOutRight");
      b.addClass("on fadeInRight ").removeClass("off fadeOutRight"); 
    } else {
      f.addClass("off fadeOutRight animated").removeClass("on fadeInRight");
      b.addClass("off fadeOutRight animated").removeClass("on fadeInRight"); 
    }
  }
  $(window).scroll(function() {
    var b = $(this).scrollTop();
    var c = $(this).height();
    if (b > 0) { 
      var d = b + c / 2;
    } 
    else { 
      var d = 1 ;
    }    
    if (d < 1e3 && d < c) { 
      totop_button("off");
    } 
    else {
      totop_button("on"); 
    }
  });  
  $("#scroll-to-top").on( 'click', function(e) {
    e.preventDefault();
    $('body,html').animate({scrollTop:0},800,'swing');
  });
}   

//newsletter popup
function ModalNewsletter(){
	"use strict";
	$('#newsletter-popup').modal('toggle');
	$('.nl-wraper-popup').addClass('animated'); 
	var tnout = 20 ;
	setTimeout (function() { 
	$('#newsletter-popup').modal('hide');
	}, tnout*1000 );
}

function checkcookie(){
	"use strict";
	
  $.cookie('mello-cookie', 'deactive', { expires: 10});
}

/* Handle product quantity */
function handleQuantity(){
	"use strict";
	
  if($('.quantity-wrapper').length){
    $('.quantity-wrapper').on(clickEv, '.qty-up', function() {
      var $this = $(this);

      var qty = $this.data('src');
      $(qty).val(parseInt($(qty).val()) + 1);
    });
    $('.quantity-wrapper').on(clickEv, '.qty-down', function() {
      var $this = $(this);
      var qty = $this.data('src');

      if(parseInt($(qty).val()) > 1)
        $(qty).val(parseInt($(qty).val()) - 1);
    });
  }
}
function colorwarches(){
	"use strict";
	
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
    .closest('form')
    .find('.single-option-selector')
    .eq(optionIndex)
    .val(optionValue)
    .trigger('change');
  }); 
}



function toggleTagsFilter(){ 
"use strict";

  var tagsbutton = document.getElementById( 'showTagsFilter' ),    
      tagscontent = document.getElementById( 'filters_content' );    
  if(tagsbutton != null ){
    tagsbutton.onclick = function() {
      classie.toggle( this, 'closed' );
      classie.toggle( tagscontent, 'tags-closed' );
      if(classie.has( this, 'closed' ))
        $('#showTagsFilter').html("Filters <i class='fa fa-angle-down'></i>");
      else $('#showTagsFilter').html("Filters <i class='fa fa-angle-up'></i>");
      };
  }
}


function toggleLeftMenu(){
	"use strict";
	
  if(window.innerWidth <= 767 ){
    $('#showLeftPush').off();
    $('#showLeftPush').on( "click", function() {
      if($('.mobile-navigation').hasClass('active')){
        $('.mobile-navigation').removeClass('active');
        $('#showLeftPush').html('<span class="lnr lnr-menu"></span>');
      }
      else{
        $('.mobile-navigation').addClass('active');
        $('#showLeftPush').html('<span class="lnr lnr-cross"></span>');
      }
    });
  }
};

/* Function update scroll product thumbs */
function updateScrollThumbsQS(){
	"use strict";
	
  if($('#gallery_main_qs').length){

    $('#quick-shop-image .fancybox').on(clickEv, function() {
      var _items = [];
      var _index = 0;
      var product_images = $('#gallery_main_qs .image-thumb');
      product_images.each(function(key, val) {
        _items.push({'href' : val.href, 'title' : val.title});
        if($(this).hasClass('active')){
          _index = key;
        }
      });
      $.fancybox(_items,{
        closeBtn: true,
        index: _index,
        helpers: {
          buttons: {}
        }
      });
      return false;
    });

    $('#quick-shop-image').on(clickEv, '.image-thumb', function() {

      var $this = $(this);
      var background = $('.product-image .main-image .main-image-bg');
      var parent = $this.parents('.product-image-wrapper');
      var src_original = $this.attr('data-image-zoom');
      var src_display = $this.attr('data-image');

      background.show();

      parent.find('.image-thumb').removeClass('active');
      $this.addClass('active');

      parent.find('.main-image').find('img').attr('data-zoom-image', src_original);
      parent.find('.main-image').find('img').attr('src', src_display).load(function() {
        background.hide();
      });

      return false;
    });
  }
}

//Change Quantity Quick Show
function change_qs_quantity(qs){
	"use strict";
	
  qs_quantity=qs;
}

function showMenuMobile(){
	"use strict";
	
  $('.navigation_mobile .arrow').on( 'click', function() {
    if($(this).attr('class')=='arrow class_test'){
      $('.navigation_mobile .arrow').removeClass('class_test');
      $('.navigation_mobile').removeClass('active');
      $('.navigation_mobile').find('.menu-mobile-container').hide("slow");
    }
    else{
      $('.navigation_mobile .arrow').removeClass('class_test');
      $(this).addClass('class_test');
      $('.navigation_mobile').each(function(){
        if($(this).find('.arrow').attr('class')=='arrow class_test'){
          $(this).find('.menu-mobile-container').show( "slow" );
          $(this).addClass('active');
        }
        else{
          $(this).find('.menu-mobile-container').hide("slow");
          $(this).removeClass('active');
        }
      });
    }
  });
}

function addColorTitle(){
	"use strict";
	
  var i=0;
  var j=0;
  $( ".index-section-product" ).each(function( index ) {
    i++;
    if(i%4==0){
      $(this).find('.home_products_top .line-title').css( "background-color","#ab47bc" );
    }
    else if(i%4==1){
      $(this).find('.home_products_top .line-title').css( "background-color","#26c6da" );
    }
    else if(i%4==2){
      $(this).find('.home_products_top .line-title').css( "background-color","#cddc39" );
    }
    else if(i%4==3){
      $(this).find('.home_products_top .line-title').css( "background-color","#ec407a" );
    }
  });
  
  $( ".index-section-service .home_service_item_group" ).each(function( index ) {
    i++;
    if(i%4==0){
      $(this).find('.home_service_top .line-title').css( "background-color","#ffc107" );
    }
    else if(i%4==1){
      $(this).find('.home_service_top .line-title').css( "background-color","#1e88e5" );
    }
    else if(i%4==2){
      $(this).find('.home_service_top .line-title').css( "background-color","#3f51b5" );
    }
    else if(i%4==3){
      $(this).find('.home_service_top .line-title').css( "background-color","#e53935" );
    }
  });
}

function show_sidebar(){
	"use strict";
	
  if(window.innerWidth <= 767 ){
    $( ".collection-leftsidebar .sidebar-block" ).each(function( index ) {
      var check_this=this;
      $(this).find(".show_sidebar_content").on( 'click', function() {
        if($(this).hasClass("fa-caret-down")){
          $(this).removeClass("fa-caret-down");
          $(this).addClass("fa-caret-up");
          $(check_this).find(".sidebar-title").addClass("active");
          $(check_this).find(".sidebar-content").show( "slow" );
        }
        else{
          $(this).addClass("fa-caret-down");
          $(this).removeClass("fa-caret-up");
          $(check_this).find(".sidebar-title").removeClass("active");
          $(check_this).find(".sidebar-content").hide("slow");
        }
      });
    });

    $( ".filter-tag-group .tag-group" ).each(function( index ) {
      var check_this=this;
      $(this).find(".show_filter_content").on( 'click', function() {
        if($(this).html()=="+"){
          $(this).html("-");
          $(check_this).find(".filter-title").addClass("active");
          $(check_this).find(".filter-content").css( "display","block" );
        }
        else{
          $(this).html("+");
          $(check_this).find(".filter-title").removeClass("active");
          $(check_this).find(".filter-content").css( "display","none" );
        }
      });
    });
  }
}

function showLightBox(){
	"use strict";
	
  var $lightbox = $('#lightbox');

  $('[data-target="#lightbox"]').on('click', function(event) {
    var $img = $(this).find('img'), 
        src = $img.attr('src'),
        alt = $img.attr('alt'),
        css = {
          'maxWidth': $(window).width() - 100,
          'maxHeight': $(window).height() - 100
        };

    $lightbox.find('.close').addClass('hidden');
    $lightbox.find('img').attr('src', src);
    $lightbox.find('img').attr('alt', alt);
    $lightbox.find('img').css(css);
  });

  $lightbox.on('shown.bs.modal', function (e) {
    var $img = $lightbox.find('img');

    $lightbox.find('.modal-dialog').css({'width': $img.width()});
    $lightbox.find('.close').removeClass('hidden');
  });
}

function addZ(n) {
	return (n < 10 ? '0' : '') + n;
}

function convert_hrs(hrs) {
	return (hrs < 24 ? hrs : (hrs - 24));
}

function showdate(days, hours, minutes, seconds) {
	$('.counttime_1486441663123 .date-days').html('<div class="group"><p>' + days + '</p>' + '<span class="text">Days</span></div>');
	$('.counttime_1486441663123 .date-hours').html('<div class="group"><p>' + hours + '</p>' + '<span class="text">Hours</span></div>');
	$('.counttime_1486441663123 .date-minutes').html('<div class="group"><p>' + minutes + '</p>' + '<span class="text">Minutes</span></div>');
	$('.counttime_1486441663123 .date-seconds').html('<div class="group"><p>' + seconds + '</p>' + '<span class="text">Seconds</span></div>');
}

function showCountTime(){
	"use strict";
	
	var monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	var date1 = new Date('04/25/2017');
	var date2 = new Date('04/10/2017 04:32:35');

	var milli1 = date1 - date2;
	var interval = setInterval(function() {
		var milli = milli1;
		if (milli1 < 0) {
			showdate('00', '00', '00', '00');
			clearInterval(interval);
			return false;
		}
		var ms = milli % 1000;
		milli = (milli - ms) / 1000;
		var days = Math.floor(milli / 86400);
		milli -= days * 86400;

		var hours = Math.floor(milli / 3600) % 24;
		milli -= hours * 3600;

		var minutes = Math.floor(milli / 60) % 60;
		milli -= minutes * 60;

		var seconds = milli % 60;

		showdate(days, hours, minutes, seconds);

		if (days == 0 && hours == 0 && minutes == 0 && seconds == 0)
			clearInterval(interval);
		milli1 = milli1 - 1000;
	}, 1000);
	$(".counttime_1486441663123 .counttime_date").html(monthNames[date1.getMonth()] + " " + date1.getDate() + ", " + date1.getFullYear());
}

function showTooltip(){
	"use strict";
	
	$('[data-toggle="tooltip"]').tooltip();
}


$( window ).on('resize', function() {
  toggleLeftMenu();
 
  show_sidebar();
});

function addRSVPSuccess() {
  var search = window.location.search;
  if(search && search.indexOf("rsvp=success") >=0) {
    var $rsvp = $('#rsvp');
    $rsvp.addClass('success');
    console.log("added")
  }
}

$(window).on('ready', function($) {
  
  show_sidebar();
  
  slider_banner();
  
  slider_blog();
  
  showLightBox();

  slider_product();
  
  slider_footer();
  
  slider_main();

  handleDropdown();

  handleScrollTop();

  colorwarches();

  showTooltip();

  handleQuantity();

  //handleGridList();

  toggleTagsFilter();


  toggleLeftMenu();

  updateScrollThumbsQS();

  showMenuMobile();
  
  addColorTitle();

  addRSVPSuccess();
  
});


$(window).on('load', function() {
  ModalNewsletter();
  showCountTime();
  $.cookie('mello-cookie', 'active', { expires: 10});
});