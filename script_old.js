var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams/14?expand=team.roster', true)

var age =""
var height = ""
var weight = ""
var nationality = ""


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


  	fetch('https://statsapi.web.nhl.com' + link)
  		.then(function(response) {
    		return response.json();
  		})
  		.then(function(myJson) {
  			age = JSON.stringify(myJson.people[0].currentAge);
  			height = JSON.stringify(myJson.people[0].height);
  			//console.log(height)
  			window.weight = JSON.stringify(myJson.people[0].weight);
  			nationality = JSON.stringify(myJson.people[0].nationality);
    		console.log(weight);

  		});

  		console.log(weight)
  		//alert(weight)
	  	div.innerHTML='<a href="#" class="list-group-item" data-toggle="collapse" data-target="#sm" data-parent="#menu">' + name + ' <span class="label label-info">' + num + '</span></a>'
	 	div.innerHTML=div.innerHTML + '<div id="sm" class="sublinks collapse">'
	    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + age + ' </a>'
	    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + height + ' </a>'
	    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + weight + ' </a>'
	    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + nationality + ' </a>'
	    div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + position + ' </a> </div>'
  		document.getElementById("main").appendChild(div);
  }
}


// Send request
request.send()