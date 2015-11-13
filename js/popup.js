$(function(){

  // create the overlay html for diming the background
  var overlayhtml =  ("<div class='PopUpOverlay jsPopUpClose'></div>");

    // on clicking the specific like depending on the data-modal-id attribute
    $('a[data-modal-id]').click(function() {
      
      // add the the overlay
      $("body").append(overlayhtml);

      // fade the overlay
      $(".PopUpOverlay").fadeTo(500, 0.7);

      // get the popup element with the corisponding arrtibute
      var modalBox = $(this).attr('data-modal-id');

      // fade the box onto the DOM
      $('#'+modalBox).fadeIn($(this).data());
    });  
    
  // on close function
  $(".jsPopUpClose, .PopUpOverlay").click(function() {
    // fade out remove
    $(".productPopUp, .PopUpOverlay").fadeOut(500, function() {
      $(".PopUpOverlay").remove();
    });
  });

  // place the popup in the middle of the viewport
  $(window).resize(function() {
    $(".productPopUp").css({
      top: ($(window).height() - $(".productPopUp").outerHeight()) / 8,
      left: ($(window).width() - $(".productPopUp").outerWidth()) / 2
    });
  });
   
  // call the resize function
  $(window).resize();
 
});

