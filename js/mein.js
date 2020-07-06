$(document).ready(function(){
    $(".header_area").sticky({topSpacing:0});  /*sticky menu end now */
    /*carousel skider*/
    $('.carousel').carousel({
        interval: 3000,
        pause: false
    });
    /*parallax section */
    $('.parallax_bg,.top-area-bg,.top-area-bg-2,.top-area-bg-3').parallaxie({
        speed:0.7,
    }); /*parallaxie background end now */

});