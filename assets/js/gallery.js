var a = 0;
num_array = []
var num = 36;
var once = 9
var b = 0;
var k = 0.2;

function load(){
    for(var i=0; i<once; i++){
        gen = Math.floor((Math.random() * num) + 1)
        if ($(window).width() < 768){
            delay = Math.random() * 0.4 + 0.1
        }
        else{
            delay = Math.random() * 1.4 + 0.1
        }
        
        if (num_array.length < num){
            if(num_array.includes(gen) == false){
                a++;
                b++;
                if (a > 3){
                    var current = $(".gal").html();
                    var new_html ='<div class="w-100"></div><div class="col-sm wow fadeInUp" data-wow-delay="'+delay+'s"><img src="images/'+gen+'.jpg" id="no'+gen+'"></div>';
                    $(".gal").append(new_html)
                    a = 1;
                }
                else{
                    var current = $(".gal").html();
                    var new_html ='<div class="col-sm wow fadeInUp" data-wow-delay="'+delay+'s"><img src="images/'+gen+'.jpg" id="no'+gen+'"></div>';
                    $(".gal").append(new_html)
                }
                num_array.push(gen)
            }
            
            else{
                i--
            }
        }
        else if(num_array.length == num){
            break
        }
    }
}
function zoom(){
    $("img").click(function(){
        console.log('j')
        $(".modal-body").html('<img class="modalpic"src="'+$(this).attr("src")+'">')
        $('#photom').modal('show');
        if ($(window).width() >= 768){
            if ($(this).height() > $(this).width()){
                $(".modalpic").css("height", '80vh');
                $(".modalpic").css("width", 'auto');
            }
            else{
                $(".modalpic").css("width", "100%");
            }
        }
        
    });
}
    

    var menu = fuse2.search("menu");
for (var i = 0; i<menu.length; i++){
    var current_html = $(".menu_list").html();
    var new_html = current_html + '<li><a href="'+menu[i].link+'">'+menu[i].title+'</a></li>'
    $(".menu_list").html(new_html);
}



    load();
    zoom();



$('#loadmore').click(function(){
    if (num_array.length < num){
        load();
        zoom();
    }
    else if (num_array.length == num){
        $(this).text("THAT'S IT!");
        $(this).addClass('disabled');
    }
    
})
