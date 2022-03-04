(function($) {

"use strict";


//Get the button


$(window).scroll(function() {
if ($(this).scrollTop()) {
    $('#scrolltop').fadeIn();
} else {
    $('#scrolltop').fadeOut();
}
});

$("#scrolltop").click(function () {
ss
window.scrollTo(0,0)


});






$(window).scroll(function() {    
var scroll = $(window).scrollTop();

if (scroll >= 200) {
    $(".navbar").addClass("fixed-top");
} else {
    $(".navbar").removeClass("fixed-top");
}
});

})(jQuery);