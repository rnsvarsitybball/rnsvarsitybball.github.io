var schedule_array;
function getSchedule() {
    status = false
    csvdata = $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/rnsvarsitybball/rnsvarsitybball.github.io/master/assets/csv/schedule.csv",
        dataType: "text",
        success: function (data) {
            schedule_array = $.csv.toObjects(csvdata.responseText)
            status = 'true';
            if (status == "true"){
                for(var i=0;i<schedule_array.length-1;i++){
                current = schedule_array[i];
                html = '<tr><th scope="row">'+current.game_date+'</th><td>'+current.game_till+'</td><td>'+current.game_time+'</td><td>'+current.game_team+'</td><td>'+current.game_location+'</td></tr>'
                $('tbody').append(html)
                }
            }
        }

    }
    )
};
getSchedule();


