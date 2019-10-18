var game_month, game_day, game_year, game_location, game_time, game_team;
function readschedule(){
	schedule_array = $.csv.toObjects(csvdata.responseText)
		count = 0
		status = 0
		while(status == 0){
			var current_data = schedule_array[count]
			var ori = current_data.game_date.split('/');
			game_team = current_data.game_team
			game_month = ori[1]
			game_day = ori[2]
			game_year = ori[0]
			game_location = current_data.game_location
			game_time = current_data.game_time
			twentyfour = 200 + parseInt(current_data.game_time_24h)
			var gamedate = game_year+(game_month<10 ? '0' : '')+game_month+(game_day<10 ? '0' : '')+game_day+twentyfour;
			var d = new Date();
			var month = d.getMonth()+1;
			var day = d.getDate();
			var hours = d.getHours();
			var min = d.getMinutes();

	
			var nowdate = d.getFullYear()+''+(month<10 ? '0' : '')+month+''+(day<10 ? '0' : '')+day+(hours<10 ? '0' : '')+hours+(min<10 ? '0' : '')+min
	
			if (gamedate-nowdate >= 0){
				$(".game").text('VS. '+current_data.game_team);
				$('.game_location').text(current_data.game_location);
				if (current_data.game_till == ''){
					$('.game_time').text(game_year+"/"+game_month+"/"+game_day+" @ "+current_data.game_time)
					
				}
				else{
					$('.game_time').text(game_year+"/"+game_month+"/"+game_day+" - "+current_data.game_till)
				}
				if (current_data.game_link == ''){
					$("#live_link").hide()
				}
				else{
					$("#live_link").attr("href",current_data.game_link);
				}
				status = 1
			}
			else{
				count++;
			}
		}
	return
	
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


function ical(){
	subject = 'RNS VS.'+game_team;
	description = 'testing'
	console.log(game_location)
	begin = game_month+'/'+game_day+'/'+game_year+' '+game_time
	end = game_month+'/'+game_day+'/'+game_year+' '+game_time
	cal.addEvent(subject, description, game_location, begin, end);
	cal.download('Game time')
}