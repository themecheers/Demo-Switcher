jQuery(document).ready(function ($) {

    //ADJUST HEIGHT FOR SWITCHER
    function fixHeight () {
        var headerHeight = $("#container").height();
        $("#iframe").attr("height", (($(window).height() - 0) - headerHeight) + 'px');
      }
  
      $(window).resize(function () {
        fixHeight();
      }).resize();
  
    //LIST ITEM SWITCH
    $("ul.items li a").click(function () {
      var theme_data = $(this).attr("rel").split(",");     	
      $("a.purchase-link").attr("href", theme_data[1]);
      $(".remove_frame a").attr("href", theme_data[0]);
      $("#iframe").attr("src", theme_data[0]);
      return false;
    });
  
    //RESPONSIVE TRIGGERS
    $(".desktop").click(function () {
      $('#iframe-wrap').removeClass().addClass('desktop-resize');	
      $('.ipad,.iphone,.desktop').removeClass('active');
      $(this).addClass('active');	
      $('body').addClass('full');	
      return false;
    });
  
    $(".ipad").click(function () {
      $('#iframe-wrap').removeClass().addClass('ipad-resize');	
      $('.ipad,.iphone,.desktop').removeClass('active');
      $(this).addClass('active');
      $('body').removeClass('full');		
      return false;
    });
  
    $(".iphone").click(function () {
      $('#iframe-wrap').removeClass().addClass('iphone-resize');
      $('.ipad,.iphone,.desktop').removeClass('active');
      $(this).addClass('active');	
      $('body').removeClass('full');
      return false;
    });
  
    $('.desktop').addClass('active');
  
  });