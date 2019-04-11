
var age =""
var height = ""
var weight = ""
var nationality = ""
var name = ""
var position = ""
var num = ""
var div = ""
var link = ""
var data = ""
var team = ""
var data1= ""



fetch('https://statsapi.web.nhl.com/api/v1/teams/14?expand=team.roster')
  .then(function(response) {
    //data1 = response.json();
    return response.json();
  })
  .then(function(myJson){

    teamData = myJson.teams[0].roster.roster
    data1 = JSON.stringify(teamData[1].person.fullName).replace(/"/g,'');
    return teamData;
  })
  .then(function(teamData){
    for (index = 0; index < teamData.length; ++index){
      name = JSON.stringify(teamData[index].person.fullName).replace(/"/g,'');
      position = JSON.stringify(teamData[index].position.name).replace(/"/g,'');
      num = JSON.stringify(teamData[index].jerseyNumber).replace(/"/g,'');
      div = document.createElement("div");
      link = JSON.stringify(teamData[index].person.link).replace(/"/g,'');
      div.innerHTML='<a href="#" class="list-group-item" data-toggle="collapse" data-target="#sm" data-parent="#menu">' + name + ' <span class="label label-info">' + num + '</span></a>'
      div.innerHTML=div.innerHTML + '</div>'
      document.getElementById("main").appendChild(div);
      
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
          div.innerHTML=div.innerHTML + '<div id="sm" class="sublinks collapse">'
          div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + age + ' </a>'
          div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + height + ' </a>'
          div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + weight + ' </a>'
          div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + nationality + ' </a>'
          div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + position + ' </a>'
          div.innerHTML=div.innerHTML + '</div>'
      document.getElementById("main").appendChild(div);
          //alert(weight);
          //alert(name);
        });
        
      
      
      }
  })



//alert(data1);

