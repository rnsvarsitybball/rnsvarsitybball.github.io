$(window).on('load', function () {
    
    $("#year").addClass("animated fadeIn slower");
    $(".title_1").addClass("animated fadeInUp");
    $("#countdown1").addClass("animated fadeInUp");
    $(".logo").addClass("animated fadeInDown");
    setTimeout(function(){$(".last").addClass("animated fadeInUp")},7000)
});


$('.button .primary').click(function (f) {
    f.preventDefault();
    href = $(this).attr('href');
    $(body).addClass("animated fadeOut");

    setTimeout(function () {
        window.location = href;
    },40000);
});

$(window).scroll(function(){
    $(".champ_main").css("opacity", 1 - $(window).scrollTop() / 700);
  });

  $(window).scroll(function(){
    $(".schedule").css("opacity", 1 - $(".schedule").scrollTop() / 700);
  });