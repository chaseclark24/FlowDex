var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams/14?expand=team.roster', true)


request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var team=data.teams[0].roster.roster

  for (index = 0; index < team.length; ++index){
  	var name = JSON.stringify(team[index].person.fullName).replace(/"/g,'');
  	var position = JSON.stringify(team[index].position.name).replace(/"/g,'');
  	var num = JSON.stringify(team[index].jerseyNumber).replace(/"/g,'');
  	var div = document.createElement("div");
  	var link = JSON.stringify(team[index].person.link).replace(/"/g,'');
  	//window.alert('https://statsapi.web.nhl.com' + link)

  	div.innerHTML='<a href="#" class="list-group-item" data-toggle="collapse" data-target="#sm" data-parent="#menu">' + name + ' <span class="label label-info">5</span> <span class="glyphicon glyphicon-envelope pull-right"></span></a>'
 	div.innerHTML=div.innerHTML + '<div id="sm" class="sublinks collapse">'
    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + num + ' </a>'
    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + position + ' </a> </div>'
  	document.getElementById("main").appendChild(div);
  }
}


// Send request
request.send()