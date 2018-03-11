$(document).ready(function () {
    var faces = $('.js-feisty-pet-btn');
    var faceActiveClass = 'feisty-pet-btn__active';

    // will change after every router restart
    // (if you don't have a static IP)
    var API_URL = 'http://192.168.0.102';
    var API_URL_FACE_MOOD = {
        'pretty': API_URL + '/face/pretty',
        'angry': API_URL + '/face/angry'
    };

    faces.on('click', function () {
        // storing the clicked element
        var _this = $(this);

        // removing the active class from all
        faces.removeClass(faceActiveClass);

        // getting the targeted mood
        var mood = $(this).data('mood');

        // doing AJAX request...
        $.get({
            url: API_URL_FACE_MOOD[mood],
            success: function(response) {
                // adding active class to the pressed
                _this.addClass(faceActiveClass);
            }
        });
    });
});