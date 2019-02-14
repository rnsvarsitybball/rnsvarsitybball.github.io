$(window).on('load', function () {
    
    $("#year").addClass("animated fadeIn slower");
    $(".title_1").addClass("animated fadeInUp");
    $("#countdown1").addClass("animated fadeInUp");
    $(".logo").addClass("animated fadeInDown");
    setTimeout(function(){$(".button.primary").addClass("animated fadeInUp")},7000)
});


$('.button .primary').click(function (f) {
    f.preventDefault();
    href = $(this).attr('href');
    $(body).addClass("animated fadeOut");

    setTimeout(function () {
        window.location = href;
    },40000);
});