$(function () {
    // constants
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'active-profile';

    $('.user-list').on('click', '.user-item .user-item-link', function (e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');

        $('.active-profile').removeClass(ACTIVE_CLASS);
        $tab.addClass(ACTIVE_CLASS);

        $('.show')
            .removeClass(SHOW_CLASS)
            .addClass(HIDE_CLASS)
            .hide();

        $(href)
            .removeClass(HIDE_CLASS)
            .addClass(SHOW_CLASS)
            .hide()
            .fadeIn(550);
    });
});