var menu = fuse2.search("menu");
for (var i = 0; i<menu.length; i++){
    var current_html = $(".menu_list").html();
    var new_html = current_html + '<li><a href="'+menu[i].link+'">'+menu[i].title+'</a></li>'
    $(".menu_list").html(new_html);
}


var schedule_array;
function getSchedule() {
    status = false
    csvdata = $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/rnsvarsitybball/rnsvarsitybball.github.io/master/assets/csv/roster.csv",
        dataType: "text",
        success: function (data) {
            schedule_array = $.csv.toObjects(csvdata.responseText)
            status = 'true';
            if (status == "true"){
                for(var i=0;i<schedule_array.length-1;i++){
                current = schedule_array[i];
                html = '<tr><th scope="row">'+current.name+'</th><td>'+current.yr+'</td><td>'+current.ht+'</td><td>'+current.wt+'</td><td>'+current.pos+'</td></tr>'
                $('.player').append(html)
                }
            }
        }

    }
    )
};
getSchedule();