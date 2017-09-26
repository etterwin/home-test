var intervalId = "";

$(document).ready(function () {
    intervalId = setInterval("letItRain()", 100);
    $('.rain-type').change(function () {
        clearInterval(intervalId);
        intervalId = setInterval("letItRain()", $(this).val());
    });
    $('.water').animate({
        bottom: "+=5px"
    }, 20000);
});

function letItRain() {
    var x = Math.floor(Math.random() * parseInt($('.basic-inst__link-rain').css('width')));
    $('.rain').append("<div class='drop' style='left: " + x + "px;'></div>");
    $('.drop').animate({
        top: "200px",
        left: "+=20px"
    }, 1000, function () {
        $(this).remove();
    });
}