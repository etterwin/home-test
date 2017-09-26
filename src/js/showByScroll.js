var target = $('.fundamental-container-image-panda');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        $('.fundamental-container-image-303030').addClass('fundamental--show');
    }
});