$(function () {
    // constants
    var SHOW_CLASS = 'show-mob',
        HIDE_CLASS = 'hide-mob',
        ACTIVE_CLASS = 'active-profile-mob';

    $('.mobil-tabs-list').on('click', '.mobil-tabs-item .mobil-tabs-item-link', function (e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');

        $('.active-profile-mob').removeClass(ACTIVE_CLASS);
        $tab.addClass(ACTIVE_CLASS);

        $('.show-mob')
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