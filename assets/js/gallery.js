var a = 0;

var num = 34;
var b = 0

    for(var i=0; i<=num; i++){
        a++;
        b++;
        if (a > 3){
            var current = $(".gal").html();
            var new_html = current + '<div class="w-100"></div><div class="col-sm wow fadeInUp data-wow-delay="1s""><img src="images/'+b+'.jpg"></div>';
            $(".gal").html(new_html);
            a = 1;
        }
        else{
            var current = $(".gal").html();
            var new_html = current + '<div class="col-sm wow fadeInUp" data-wow-delay="0.5s"><img src="images/'+b+'.jpg"></div>';
            $(".gal").html(new_html);
        }
    }

    $("img").click(function(){
        $(".modal-body").html('<img class="modalpic"src="'+$(this).attr("src")+'">')
        
        $('#photom').modal('show');

        if ($('#photom').modal('show') == true){
            if ($(".modalpic").height() > 1000){
                $(".modalpic").css("width", "50%");
            }
            else{
                $(".modalpic").css("width", "80%");
            }
        }
        
    })

    var menu = fuse2.search("menu");
for (var i = 0; i<menu.length; i++){
    var current_html = $(".menu_list").html();
    var new_html = current_html + '<li><a href="'+menu[i].link+'">'+menu[i].title+'</a></li>'
    $(".menu_list").html(new_html);
}
