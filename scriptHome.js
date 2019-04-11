

fetch('https://statsapi.web.nhl.com/api/v1/teams/')
.then(response => {
    return response.json().then(data => data.teams);
}).then(teams => {
      for(team of teams) {
         div = document.createElement("div");
         div.innerHTML='<a href="javascript:test(' + team.id + ');" class="list-group-item" data-toggle="collapse" data-target="#sm" data-parent="#menu">' + team.name + '</span></a>'
         document.getElementById("teamList").appendChild(div);


         
      }
});


var teamList = document.getElementById('teamList');


function test(hello){


alert(hello)
document.getElementById('teamList') = 'hidden';

};


