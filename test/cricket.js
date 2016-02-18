

var players = ['sachin','ponting','devillers','kohli','gilchrist','dhoni','kallis','bond','akhtar','lee'];
var batsman = ['sachin','ponting','devillers','kohli'];
var bowler = ['kallis','bond','akthar','lee'];
var wk = ['gilchrist','dhoni'];
var strength = [6,7,8,6,4,4,7,5,7,8];


var object1 = [];
var object2= [];
var object3= [];


//var temporaryArray = [ {name:'deviller' , str :'7' ,role} ,] 
debugger;
batsman.forEach(function(bat){
	var object ={};
	object.name = bat;
    var x = players.indexOf(bat);
    object.str = strength[x];
    object.role = 'batsman';
    object1.push(object);
    console.log(bat);
    console.log(object1);
});

var team1 = [];
var team2 = [];

object1.sort(function(a, b){return b.str - a.str});

debugger;
console.log(object1);


for (var prop in object1) {
              if(object1.hasOwnProperty(prop)){
                console.log(prop + " = " + object1[prop].name);

                if(prop%2){
                	console.log( prop%2 + " ==== " + object1[prop].name);
                	team1.push(object1[prop]);
                }
                else{
                    team2.push(object1[prop]);
                }
              }
           }


console.log(team1);
console.log(team2);


var team1Sum=0;

 function team1SumF(team1){
    debugger;
    for (var elem in team1){
        if(team1.hasOwnProperty(elem)){
       team1Sum += team1[elem].str;
        console.log("dekh le sum" +team1Sum);
    }
    }
 }
  team1SumF();

 console.log("dekh le sum" +team1Sum);

//*****************************************


bowler.forEach(function(bat){
	var object ={};
	object.name = bat;
    var x = players.indexOf(bat);
    object.str = strength[x];
    object.role = 'batsman';
    object2.push(object);
    console.log(bat);
    console.log(object2);
});

object2.sort(function(a, b){return b.str - a.str});

debugger;
console.log(object2);


for (var prop in object2) {
              if(object2.hasOwnProperty(prop)){
                console.log(prop + " = " + object2[prop].name);

                if(prop%2){
                	console.log( prop%2 + " ==== " + object2[prop].name);
                	team1.push(object2[prop]);
                }
                else{
                    team2.push(object2[prop]);
                }
              }
           }


console.log(team1);
console.log(team2);


wk.forEach(function(bat){
	var object ={};
	object.name = bat;
    var x = players.indexOf(bat);
    object.str = strength[x];
    object.role = 'batsman';
    object3.push(object);
    console.log(bat);
    console.log(object3);
});

object3.sort(function(a, b){return b.str - a.str});

debugger;
console.log(object3);


for (var prop in object3) {
              if(object3.hasOwnProperty(prop)){
                console.log(prop + " = " + object3[prop].name);

                if(prop%2){
                	console.log( prop%2 + " ==== " + object3[prop].name);
                	team1.push(object3[prop]);
                }
                else{
                    team2.push(object3[prop]);
                }
              }
           }


console.log(team1);
console.log(team2);