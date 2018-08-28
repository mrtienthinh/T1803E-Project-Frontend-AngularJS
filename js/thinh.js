$('.carousel').carousel({
    interval: 3000
});
$( "#dropdown-menu-hover-t" ).hover(
    function() {
      $( "#dropdown-menu-t" ).show();
    }
);
$( "#dropdown-menu-hover-t" ).mouseleave(
    function() {
      $( "#dropdown-menu-t" ).hide();
    }
);
