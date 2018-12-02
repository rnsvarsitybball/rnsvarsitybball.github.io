var a = 0;


    for(var i=0; i<photo.length; i++){
        a++;
        if (a > 3){
            var current = $(".gal").html();
            var new_html = current + '<div class="w-100"></div><div class="col-sm wow fadeInUp data-wow-delay="1s""><img src="images/'+photo[i]+'"></div>';
            $(".gal").html(new_html);
            a = 1;
        }
        else{
            var current = $(".gal").html();
            var new_html = current + '<div class="col-sm wow fadeInUp" data-wow-delay="0.5s"><img src="images/'+photo[i]+'"></div>';
            $(".gal").html(new_html);
        }
    }

    var menu = fuse2.search("menu");
for (var i = 0; i<menu.length; i++){
    var current_html = $(".menu_list").html();
    var new_html = current_html + '<li><a href="'+menu[i].link+'">'+menu[i].title+'</a></li>'
    $(".menu_list").html(new_html);
}
