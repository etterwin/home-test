var target = $('.coop-container-graphic__texts');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        $('#graphic-line').addClass('graphic-line--show');

        $('.graphic-icon--top').addClass('graphic--show-last');
        $('.graphic-icon--middle').addClass('graphic--show-second');
        $('.graphic-icon--bottom').addClass('graphic--show-first');

        $('.graphic-text--left').addClass('graphic--show-first');
        $('.graphic-text--middle').addClass('graphic--show-second');
        $('.graphic-text--right').addClass('graphic--show-last');
    }
});