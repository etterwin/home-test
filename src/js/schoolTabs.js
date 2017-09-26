$(function () {
    // constants
    var SHOW_CLASS = 'show',
        HIDE_CLASS = 'hide',
        ACTIVE_CLASS = 'school-nav-item-link--active';

    $('.school-nav-list').on('click', '.school-nav-item .school-nav-item-link', function (e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');

        $('.school-nav-item-link--active').removeClass(ACTIVE_CLASS);
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