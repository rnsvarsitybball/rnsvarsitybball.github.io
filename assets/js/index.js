function readschedule(){
	schedule_array = $.csv.toObjects(csvdata.responseText)
		count = 0
		status = 0
		while(status == 0){
			var current_data = schedule_array[count]
			var ori = current_data.game_date.split('/');
			game_month = ori[1]
			game_day = ori[2]
			game_year = ori[0]
			var gamedate = game_year+(game_month<10 ? '0' : '')+game_month+(game_day<10 ? '0' : '')+game_day;
			var d = new Date();
			var month = d.getMonth()+1;
			var day = d.getDate();
	
			var nowdate = d.getFullYear()+''+(month<10 ? '0' : '')+month+''+(day<10 ? '0' : '')+day
	
			if (gamedate-nowdate >= 0){
				$(".game").text(current_data.game_team);
				$('.game_location').text(' @'+current_data.game_location);
				$('.game_time').text(game_year+"/"+game_month+"/"+game_day+" - "+current_data.game_till)
				status = 1
			}
			else{
				count++;
			}
		}
	return schedule_array
	console.log('as')
	}

status = 'false';
function getSchedule(){
	status = false
	csvdata = $.ajax({
		type: "GET",
		url: "https://raw.githubusercontent.com/rnsvarsitybball/rnsvarsitybball.github.io/master/assets/csv/schedule.csv",
		dataType: "text",
		success: function (data) {
			 readschedule();
			 status = 'true';
		}
	
});

}