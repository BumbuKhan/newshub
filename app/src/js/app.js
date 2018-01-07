$(document).ready(function() {
    $('.header__search-btn').on('click', function() {
        $(this).hide();
        $('.header__search-input').addClass('header__search-input_visible').find('input').focus();
    });

    $('.header__search-btn-expanded').on('click', function () {
        var _this = $(this);

        if (_this.siblings('input').val() != '') {
            _this.closest('form').submit();
        }
    });

    /* logout menu handler start */
    var logoutMenuTrigger = $('.logout-menu');
    var logoutMenu = $('.logout-menu-wr div');

    logoutMenuTrigger.on('click', function () {
        if (!islogoutMenuOpened()) {
            showLogoutMenu();
        } else {
            hideLogoutMenu();
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27 && islogoutMenuOpened()) {
            hideLogoutMenu();
        }
    });

    $(document).on('click', function (e) {
        var shouldIcloseLogoutMenu = $(e.target).attr('data-close-on-body-click');
        if (!shouldIcloseLogoutMenu) {
            hideLogoutMenu();
        }
    });

    function showLogoutMenu() {
        logoutMenu.css({'visibility': 'visible'});
        logoutMenuTrigger.attr('data-menu-opened', '1');
    }

    function hideLogoutMenu() {
        logoutMenu.css({'visibility': 'hidden'});
        logoutMenuTrigger.attr('data-menu-opened', '0');
    }

    function islogoutMenuOpened() {
        return parseInt(logoutMenuTrigger.attr('data-menu-opened'));
    }

    /* logout menu handler   end */
});