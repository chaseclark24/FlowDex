fetch('https://statsapi.web.nhl.com/api/v1/teams/')
  .then(function(response) {
    //data1 = response.json();
    return response.json();
  })
  .then(function(myJson){

    //teamData = myJson.teams[0].roster.roster
    console.log(JSON.stringify(myJson.teams))
    //data1 = JSON.stringify(teamData[1].person.fullName).replace(/"/g,'');
    //return teamData;
  })


fetch('https://statsapi.web.nhl.com/api/v1/teams/')
.then(response => {
    return response.json().then(data => data.teams);
}).then(teams => {
      for(team of teams) {
         //const {jerseyNumber, person:{fullName, link}, position:{name}} = team;
         //console.log(team.id)

         div = document.createElement("div");
         div.innerHTML='<a href="#" class="list-group-item" data-toggle="collapse" data-target="#sm" data-parent="#menu">' + team.name + '</span></a>'
         document.getElementById("main").appendChild(div);


         
      }
});



