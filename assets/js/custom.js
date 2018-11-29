var footage_result = fuse.search("footage");
for (var i = 0; i<3; i++){
    var current_html = $(".tiles").html();
    var color = i+1;
    var new_html = current_html + '<article class="style'+color+'"><span class="image"><img src="'+game[i].game_pic+'" alt="" /></span><a href="'+game[i].game_link+'"><h2>GAME #'+game[i].game_num+'</h2><h2>w/ '+game[i].game_team+'</h2><h3>'+game[i].game_date+'</h3><div class="content"><p>'+game[i].game_location+'</p></div></a></article>'
    $(".tiles").html(new_html);
}

var date_result = fuse1.search("schedule");
for (var b = 0; b < date_result.length; b++){
    var current_html = $(".upcoming-game").html();
    var new_html = current_html + '<h4>'+date_result[b].game_team+'</h4><h4>'+date_result[b].game_date+'</h4><h4>'+date_result[b].game_location+'</h4>';
    $(".upcoming-game").html(new_html);
}

var menu = fuse2.search("menu");
for (var i = 0; i<menu.length; i++){
    var current_html = $(".menu_list").html();
    var new_html = current_html + '<li><a href="'+menu[i].link+'">'+menu[i].title+'</a></li>'
    $(".menu_list").html(new_html);
}


var ct = new Date().getTime();
var cdt = new Date("Oct 25, 2019 16:00:00");


