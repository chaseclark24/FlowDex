        var path = window.location.href;
        var teamID = path.split("?")[1]

fetch('https://statsapi.web.nhl.com/api/v1/teams/'+teamID+'?expand=team.roster')
.then(response => {
    return response.json().then(data => data.teams[0].roster.roster);
}).then(teams => {
      for(team of teams) {
         const {jerseyNumber, person:{fullName, link}, position:{name}} = team;

         fetch('https://statsapi.web.nhl.com' + link)
            .then(res => {
                return res.json().then(data => data.people[0]);
            }).then(people => {
               const {currentAge, height, weight, nationality} = people;

               // Rest of the code. Create div elements.. 
              // console.log(`Age: ${currentAge}, Height: ${height}, Weight: ${weight}, Nationality: ${nationality}, Num: ${jerseyNumber}, Name: ${fullName}, Position: ${name}`);
               div = document.createElement("div");
               div.innerHTML='<a href="#" class="list-group-item" data-toggle="collapse" data-target="#sm" data-parent="#menu">' + fullName + ' <span class="label label-default">' + jerseyNumber + '</span></a>'
               div.innerHTML=div.innerHTML + '<div id="sm" class="sublinks collapse">'
               div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + 'Age: ' +currentAge + ' </a>'
               div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + 'Height: ' + height + ' </a>'
               div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + 'Weight: ' + weight + ' </a>'
               div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' +  'Nationality: '+ nationality + ' </a>'
               div.innerHTML=div.innerHTML + '<a class="list-group-item small"><span class="glyphicon glyphicon-chevron-right"></span>' + 'Position: ' + name + ' </a> </div>'
               document.getElementById("main").appendChild(div);



            });
      }
});