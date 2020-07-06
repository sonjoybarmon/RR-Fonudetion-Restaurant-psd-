$(document).ready(function(){
    $(".header_area").sticky({topSpacing:0});  /*sticky menu end now */
    /*carousel skider*/
    $('.carousel').carousel({
        interval: 5000,
        pause: false
    });
    /*parallax section */
    $('.parallax_bg').parallaxie({
        speed: 2000,
    }); /*parallaxie background end now */

});