var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams/14?expand=team.roster', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var team=data.teams[0].roster.roster

  for (index = 0; index < team.length; ++index){
  	//alert(JSON.stringify(team[index].person.fullName) + JSON.stringify(team[index].jerseyNumber))
  	var name = JSON.stringify(team[index].person.fullName);
  	var num = JSON.stringify(team[index].jerseyNumber)
  	var div = document.createElement("div");
  	//div.style.width = "100px";
	//div.style.height = "100px";
	//div.style.background = "red";
	//div.style.color = "white";
  	div.innerHTML = name + num;
  	//div.outerHtml = "hello";

  	document.getElementById("main").appendChild(div);
  }
}


// Send request
request.send()