$(function () {
    // constants
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'login-item-link--active';

    $('.login-list').on('click', '.login-item .login-item-link', function (e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');

        $('.login-item-link--active').removeClass(ACTIVE_CLASS);
        $tab.addClass(ACTIVE_CLASS);

        $('.show')
            .removeClass(SHOW_CLASS)
            .addClass(HIDE_CLASS)
            .hide();
        $('.login-item').toggleClass('login-item--active');

        $(href)
            .removeClass(HIDE_CLASS)
            .addClass(SHOW_CLASS)
            .hide()
            .fadeIn(550);
    });
});