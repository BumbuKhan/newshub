$(document).ready(function () {
    var loginPopup = $('#js-popup-login');
    var currentlyOpenedPopup;

    // popup settings
    var popupColoseClass = 'js-close-popup';
    var popupOpacity = 1;
    var popupModalColor = 'rgba(9, 30, 66, 0.54)';

    function riseLoginPopup() {
        return loginPopup.bPopup({
            closeClass: popupColoseClass,
            opacity: popupOpacity,
            modalColor: popupModalColor
        });
    }

    function closeCurrentlyOpenedPopup() {
        if (!jQuery.isEmptyObject(currentlyOpenedPopup)) {
            currentlyOpenedPopup.close();
        }
    }

    var signInBtn = $('.sign-in');
    signInBtn.on('click', function () {
        closeCurrentlyOpenedPopup();
        currentlyOpenedPopup = riseLoginPopup();
    });


    // rise imitation, delete after debug
    // currentlyOpenedPopup = riseLoginPopup();
});