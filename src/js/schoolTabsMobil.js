$(function () {
    // constants
    var SHOW_CLASS = 'show-mob',
        HIDE_CLASS = 'hide-mob',
        ACTIVE_CLASS = 'mobil-submenu-item-link-active';

    $('.mobil-submenu-list').on('click', '.mobil-submenu-item .mobil-submenu-item-link', function (e) {
        e.preventDefault();
        var $tab = $(this),
            href = $tab.attr('href');

        $('.mobil-submenu-item-link-active').removeClass(ACTIVE_CLASS);
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