$(document).ready(function() {
  $(document)
  	.on('click', '.lang-menu', function(e) {
      $(".langContainer").addClass("active");
  	})
    .on('click', '.langContainer .close-btn', function(e) {
      $(".langContainer").removeClass("active");
    })
    .on('click', '.navbar-nav li a.hasMenu', function(e) {
  		e.preventDefault();
  		var me = $(this);
  		target = me.data('target');
      me.toggleClass("active");
      $(".navbar-nav").toggleClass("active");
  		$(".dropdown-overlay").addClass("active");
      $("body").addClass("submenu-open");
  		$('.dropdowns-container .sub-menu').hide();
  		$('.dropdowns-container .sub-menu[data-target="'+target+'"]').show();
  	})
    .on('click', 'body.submenu-open', function(e) {
      var zone = $(".sub-menu");
      if(e.target.id != zone.attr('class') && !zone.has(e.target).length)
      {
        $(".dropdown-overlay").removeClass("active");
        $("body").removeClass("submenu-open");
      }
    })
    .on('click', '.search-btn', function(e) {
      $(".navbar-nav").hide();
      $(".search-container").show();
      $("#search").focus();
      $("body").addClass("search-open");
  	})
    .on('click', 'body.search-open', function(e) {
      var zone = $("#search");
      if(e.target.id != zone.attr('id') && !zone.has(e.target).length)
      {
        $(".navbar-nav").show();
        $(".search-container").hide();
        $("body").removeClass("search-open");
      }
    })
    .on('click', '.navbar-toggler', function(e) {
      $(".side-menu").addClass("active");
    })
    .on('click', '.top-header .close-btn', function(e) {
      $(".side-menu").removeClass("active");
    })
    .on('click', '.open-submenu', function(e) {
      $(this).parent().find(".sideSubMenu").slideToggle();
      $(this).find("span").toggleClass("active");
    })
    $(window).scroll(function(){
           var SCROLL = $(window).scrollTop();
           if(SCROLL > 50) {
               $('header').animate({
                   top:0
               },10);
           }
           if(SCROLL < 50) {
               $('header').animate({
                   top:35
               },10);
           }
       });
       $(".dropdowns-container ul li").hover(function(){
           $(this).siblings().addClass("greyed");
       },function(){
           $(this).siblings().removeClass("greyed")
       });


});
