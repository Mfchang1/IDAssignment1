function scrollTo(selector) {
    var destination = $(selector);
    $('html, body').animate({scrollTop: destination.offset().top}, 'slow');
}

$("nav > ul > li > a").bind("click", function() {
    scrollTo($(this).attr('href'));
    $(".overlay").removeClass('overlay-open');
    $("#overlay-menu").fadeIn(800);
});