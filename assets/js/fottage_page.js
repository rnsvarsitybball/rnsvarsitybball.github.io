
for (var i = 0; i<game2019.length; i++){
    var game = game2019;
    var current_html = $(".tiles2019").html();
    var game_num = game2019.length-i;
    var color = Math.floor(Math.random()*6)+1;
    var new_html = current_html + '<article class="style'+color+' '+i+'game"><span class="image"><img src="'+game[i].game_pic+'" alt="" /></span><a href="'+game[i].game_link+'"><h2>GAME #'+game_num+'</h2><h2>w/ '+game[i].game_team+'</h2><h3>'+game[i].game_date+'</h3><div class="content"><h4 class="score">'+game[i].game_score+'</h4><p>'+game[i].game_location+'</p></div></a></article>'
    var noscore = "."+i+"game .score";
    if($(noscore).html() == undefined){
        $(noscore).html("");
    }
    $(".tiles2019").html(new_html);
}
for (var i = 0; i<game2018.length; i++){
    var game = game2018;
    var current_html = $(".tiles2018").html();
    var game_num = game2018.length-i;
    var color = Math.floor(Math.random()*6)+1;
    var new_html = current_html + '<article class="style'+color+' '+i+'game"><span class="image"><img src="'+game[i].game_pic+'" alt="" /></span><a href="'+game[i].game_link+'"><h2>GAME #'+game_num+'</h2><h2>w/ '+game[i].game_team+'</h2><h3>'+game[i].game_date+'</h3><div class="content"><h4 class="score">'+game[i].game_score+'</h4><p>'+game[i].game_location+'</p></div></a></article>'
    var noscore = "."+i+"game .score";
    if($(noscore).html() == undefined){
        $(noscore).html("");
    }
    $(".tiles2018").html(new_html);
}

var menu = fuse2.search("menu");
for (var i = 0; i<menu.length; i++){
    var current_html = $(".menu_list").html();
    var new_html = current_html + '<li><a href="'+menu[i].link+'">'+menu[i].title+'</a></li>'
    $(".menu_list").html(new_html);
}