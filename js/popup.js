$(function(){

var appendthis =  ("<div class='PopUpOverlay jsPopUpClose'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".PopUpOverlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".jsPopUpClose, .PopUpOverlay").click(function() {
  $(".productPopUp, .PopUpOverlay").fadeOut(500, function() {
    $(".PopUpOverlay").remove();
  });
});
 
$(window).resize(function() {
  $(".productPopUp").css({
    top: ($(window).height() - $(".productPopUp").outerHeight()) / 2,
    left: ($(window).width() - $(".productPopUp").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});