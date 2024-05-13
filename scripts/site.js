"use script";
let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
    {code: "ARI",name: "Arizona Cardinals", plays: "Glendale"},
    {code: "ATL", name: "Atlanta Falcons", plays: "Atlanta"},
    {code: "CAR", name: "Carolina Panthers", plays: "Charlotte"},
    {code: "CHI", name: "Chicago Bears", plays: "Chicago"},
    {code: "CIN", name: "Cincinnati Bengals", plays: "Cincinnati"},
    {code: "CLE", name: "Cleveland Browns", plays: "Cleveland"},
    {code: "DET", name: "Detroit Lions", plays: "Detroit"},
    {code: "GB", name: "Green Bay Packers", plays: "Green Bay"},
   ];
//inputs
const teamList = document.getElementById("teamList");

//button
const submitBtn = document.getElementById("submitBtn")

//output
const teamOutput = document.getElementById("outputTeamSelected");

window.onload = function(){
    submitBtn.onclick = onClickedSubmitBtn;
    initTeamNameDropdown()
}

function onClickedSubmitBtn(){
    console.log(teamList.value)
    let selectedCode = teamList.value;
    // find the value that represents the object for the selected team CODE
    

    let selectedTeam = getTeamByTeamCode(selectedCode);

    let message = `The ${selectedTeam.name} team (${selectedTeam.code}) plays in ${selectedTeam.plays}.`;

    console.log(message);
    teamOutput.innerHTML = message;
    
    
    
    // console.log("pushed");
    // let selectedOption = initTeamNameDropdown();
    // let teamSelectedValue = teamList.value;
    // if(teams.selectedIndex >= 0){
        
    // }


}

function getTeamByTeamCode(teamCode){
    let team;
    //search through the array, find the object where the code is equale to teamCode, and 
    //assign that object to the variable 'team'
    for(let i = 0; i < teams.length; i++){
        if(teams[i].code == teamCode){
            team = teams[i];
            // console.log(team);
        }
    }

    return team;
}

function initTeamNameDropdown(){
    for(let i = 0; i < teams.length; i++){
        let theOption = new Option(teams[i].name, teams[i].code);

        teamList.appendChild(theOption);
    }
}