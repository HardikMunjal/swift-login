var nodemailer = require("nodemailer");
var CronJob = require('cron').CronJob;
var async = require("async");
var scoreMailer = require('./scoreMailer');
var inventorySummary;
var totalCalculator=[];
var totalsUsedByOthers=[];

var highest=0;
var firstHighest={};
var secondHighest={};
var thirdHighest={};
var fourthHighest={};
var fifthHighest={};
var sixthHighest={};
var seventhHighest={};
var eithHighest={};
var topper={};
var sectopper={};
var thirdtopper={};
var highestM;
var topperTeam=[];



//*****************************Model Fetch Data ******************************************

var options='hardik';
scoreMailer.getScore(function(err, result) {
  if (err) {              
    //return next(err);
  }
  inventorySummary = result;
  console.log(inventorySummary);

  var total = 0;
  var captainTotal=0;


  for(k=0;k<inventorySummary.length;k++){
    for(j=0;j<inventorySummary[k].players.length;j++){
     for(i=0;i<inventorySummary[k].players[j].match.length;i++){

      console.log('my total is',total)


      if(inventorySummary[k].players[j].match[i].score==null){
        total=total+0;
      }
      else{

        if(inventorySummary[k].players[j].name.indexOf('(C)')>-1){
          captainTotal=captainTotal+parseInt(inventorySummary[k].players[j].match[i].score)
          total=total+(2*parseInt(inventorySummary[k].players[j].match[i].score));
        }
        else{
        total=total+parseInt(inventorySummary[k].players[j].match[i].score);
        console.log(total);
      }
      }
    }
  }
  total=total+(Number(inventorySummary[k].favTeam.win)*75);
  total=total-(Number(inventorySummary[k].wildCards.fourth));
  totalCalculator.push({name:inventorySummary[k].name,total:total,captain:captainTotal})
  total=0;
  captainTotal=0;
}


// here i am not cloning the value of totalCalculator and totalsUsedByOther
console.log(totalCalculator);
totalsUsedByOthers=totalCalculator.slice(0);
console.log(totalsUsedByOthers);

for(n=0;n<8;n++){
  for(m=0;m<totalCalculator.length;m++){

    if(totalCalculator[m].total>highest){
      highest= totalCalculator[m].total;
      highestM=m;
      topper=totalCalculator[m];
    }
  }
  if(n==0){
    firstHighest=topper;
  }
  if(n==1){
    secondHighest=topper;
  }
  if(n==2){
    thirdHighest=topper;
  }
  if(n==3){
    fourthHighest=topper;
  }
  if(n==4){
    fifthHighest=topper;
  }
  if(n==5){
    sixthHighest=topper;
  }
  if(n==6){
    seventhHighest=topper;
  }
  if(n==7){
    eithHighest=topper;
  }

  highest=0;

  totalCalculator.splice(highestM,1);

}


console.log('topper is',firstHighest);
console.log('2topper is',secondHighest);
console.log('3topper is',thirdHighest);
console.log(totalsUsedByOthers);





for(i=0;i<inventorySummary.length;i++){
  if(inventorySummary[i].name == firstHighest.name){

    for(j=0;j<inventorySummary[i].players.length;j++){
     topperTeam.push(inventorySummary[i].players[j].name)
   }

 }
}
});



module.exports = function () {

  new CronJob('*/3 * * * *', function() {

    console.log('You will see this message ,when resource would be available to process your request');
    console.log('sending mail');  


   // ********************************gmail credential*********************************
   var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",  // sets automatically host, port and connection security settings
     auth: {
       user: "darakulaaz@gmail.com",
       pass: "timeforchange1"
     }
   });

//***************************** Main SMTP method **************************
var smtp = function(email,callback) {

console.log((Number(email.favTeam.win)*75));
  console.log('length is',totalsUsedByOthers.length);
  for(i=0;i<totalsUsedByOthers.length;i++){

    console.log(totalsUsedByOthers[i].name);
    console.log(email.name);
    if(totalsUsedByOthers[i].name==email.name){
      var totalScored = totalsUsedByOthers[i].total;
      var captainScored = totalsUsedByOthers[i].captain;
    }
  }
  console.log(totalScored);


  var html='<html><head></head><body>'; 

  html+='<b style="color: #0000FF"><h2>^^^^^^^^^^^^^^^^ IPL Fantasy League ^^^^^^^^^^^^^^^^ </h2></b></hr><br><br>';
  
  html+='<p>Hi   '+email.name+'   !</p><br>';

  html+='<b style="color: #FF0000"><h3>**************************** NOTE ****************************</h3></b></hr><br>';
  html+='<b style="color: #780000">Winning Prize for Rank 1 : </b>50% of Total deposited money of xxx participants<br>';
  html+='<b style="color: #780000">Winning Prize for Rank 2 : </b>30% of Total deposited money of xxx participants<br>';
  html+='<b style="color: #780000">Winning Prize for Rank 3 : </b>20% of Total deposited money of xxx participants';
  html+='<br></hr><h3>Entry Fees to be a xxx participant is <b>Rs 1500</b></h3>';
  html+='</br><h5><b>xxx participants are : Jafar Goti Suar Hardik Jetha</h5></br></hr>';
  html+='<b style="color: #FF0000"><h3>********************************************************************</h3></b></hr><br><br>';
 
  html+='<b style="color: #780000"><h1>TOURANAMENT WINNER : <b>ATUL BABA</b></h1></b></hr><br>';
 html+='<b style="color: #FF0000"><h1>TOURNAMENT WINNER of xxx participants : <b>HARDIK MUNJAAL</b></h1></b></hr><br>';

  html+='<b style="color: #FF0000"><h4>NOTE : You can use extra wildcard for 100 points and 50 points will be added progessively for further Wildcards, </h4></b></hr><br>';


  html+='<h1><b style="color: #006600">Your Selected Players are</b></h1>';
  html+='<ul><li>'+email.players[0].name+'</li>';
  html+='<li>'+email.players[1].name+'</li>';
  html+='<li>'+email.players[2].name+'</li>';
  html+='<li>'+email.players[3].name+'</li>';
  html+='<li>'+email.players[4].name+'</li>';
  html+='<li>'+email.players[5].name+'</li>';
  if(email.players[7]){
    html+='<li>'+email.players[7].name+'</li>';
  }
  if(email.players[8]){
    html+='<li>'+email.players[8].name+'</li>';
  }
  if(email.players[9]){
    html+='<li>'+email.players[9].name+'</li>';
  }
  if(email.players[10]){
    html+='<li>'+email.players[10].name+'</li>';
  }
  if(email.players[11]){
    html+='<li>'+email.players[11].name+'</li>';
  }
  html+='<li>'+email.players[6].name+'</li></ul></br></hr>';
  html+='<h1><b style="color: #006600">Your Supporting Team is</b></h1>';
  html+='<ul><li>'+email.favTeam.team+'</li><li>Status:'+email.favTeam.win+'/'+email.favTeam.totalMatches+'</li></ul></br></hr>';


  html+='<h3><b style="color: #006600">Your Wild Card Status</b></h3>';
  html+='<ul><li> Wild card 1 :'+email.wildCards.first+'</li><li> Wild card 2 :'+email.wildCards.second+'</li><li> Wild card 3 :'+email.wildCards.third+'</li></ul></br></hr>';


  html+='<h3><b style="color: #006600">Notification</b></h3>';
  html+='<ul><li> Suar #Wildcard:1 Rohit to Warner 16 april morning </li><li> Suar #Wildcard:2 Dhoni to Finch 16 april morning</li><li> Dharru #Wildcard:1 J.Butler to M.Pandey 16 april morning</li><li> Jafar #Wildcard:1 Guptil(Simmons) to Raina 16 april evening </li><li> Dharru #Wildcard:2 Guptil(Simmons) to Rohit 16 april evening </li><li> Firoz #Wildcard:1 Williamson to Duplesis 17 april morning </li><li> Goti #Wildcard:1 Butler to Devillers 18 april night </li><li> Suar #Wildcard:3 Gayle to DeKock 20 april morning </li><li> Binjo #Wildcard:1 Miller to ABD 20 april morning </li><li> Dharru #Wildcard:3 Gayle to ABD 20 april morning </li><li> Goti #Wildcard:2 Gayle to Dekock 20 april morning </li><li> Jetha #Wildcard:1 Gayle to DeKOck 20 april morning </li><li> Firoz #Wildcard:2 Simmons to Macculum 22 april morning </li><li> Jetha #Wildcard:2 KP to Duplesis 24 april evening </li><li> Jafar #Wildcard:2 inForm Miller to Gambhir 24 april evening </li><li> Atul #Wildcard:1 Smith to Warner 26 april evening </li><li> Firoz #Wildcard:3 Watto to Warner(G) 26 april evening </li><li> Hardik #Wildcard:1 Maxi to DeKock 27 april evening </li><li> Jafar #Wildcard:3 duplesis to S.smith 29 april evening </li><li> Binjo #Wildcard:2 M.Pandey to D.smith 29 april evening </li><li> Hardik Jetha Suar Goti Firoz Kush #Free Replacement:1 Duplesis/KP to Khawaza 29 april evening </li>\<li> Goti #Wildcard:3 U.Khawaza to C.Gayle 30 april evening </li><li> Jafar Dharru Firoz #Free Replacement:2 S.Smith to G.Bailey 5 may evening </li><li> Atul #Wildcard:2 Raina to Gambhir 10 May evening </li><li> Binjo #Wildcard:3 Watto to S.Dhawan 12 May evening </li><li> Jafar #Extra Wildcard(100 Points):1  G.Bailey to S.Dhawan 12 May evening </li><li> Hardik #Wildcard:2 M.Vijay to K.Nair 15 May evening </li><li> Jetha #Wildcard:3 Rohit to Dhawan 22 May evening </li><li> Jetha #Extra Wildcard(100 Points):1  DeKock to Gayle </li><li> Hardik #Wildcard:3 Khawaza to Williamon </li><li> Hardik #Extra Wildcard(100 Points):1  Nair to Finch </li></ul></br></hr>';


  html+='<b style="color: #006600">Your total score</b>';
  html+='<table class="tftable" border="1"><thead>';
  html+='<tr><th>Player Name</th><th>Match 1</th><th>Match 2</th><th>Match 3</th><th>Match 4</th><th>Match 5</th><th>Match 6</th><th>Match 7</th><th>Match 8</th><th>Match 9</th><th>Match 10</th><th>Match 11</th><th>Match 12</th><th>Match 13</th><th>Match 14</th><th>Match 15</th><th>Match 16</th><th>Match 17</th><th>Match 18</th><th>Total Score</th></tr></thead><tbody>';
  html+='<tr><td>'+email.players[0].name+'</td>';
  html+='<td>'+email.players[0].match[0].score+'</td>';
  html+='<td>'+email.players[0].match[1].score+'</td>';
  html+='<td>'+email.players[0].match[2].score+'</td>';
  html+='<td>'+email.players[0].match[3].score+'</td>';
  html+='<td>'+email.players[0].match[4].score+'</td>';
  html+='<td>'+email.players[0].match[5].score+'</td>';
  html+='<td>'+email.players[0].match[6].score+'</td>';
  html+='<td>'+email.players[0].match[7].score+'</td>';
  html+='<td>'+email.players[0].match[8].score+'</td>';
  html+='<td>'+email.players[0].match[9].score+'</td>';
  html+='<td>'+email.players[0].match[10].score+'</td>';
  html+='<td>'+email.players[0].match[11].score+'</td>';
  html+='<td>'+email.players[0].match[12].score+'</td>';
  html+='<td>'+email.players[0].match[13].score+'</td>';
  html+='<td>'+email.players[0].match[14].score+'</td>';
  html+='<td>'+email.players[0].match[15].score+'</td>';
  html+='<td>'+email.players[0].match[16].score+'</td>';
  html+='<td>'+email.players[0].match[17].score+'</td>';
  html+='<td>'+(Number(email.players[0].match[0].score)+Number(email.players[0].match[1].score)+Number(email.players[0].match[2].score)+Number(email.players[0].match[3].score)+Number(email.players[0].match[4].score)+Number(email.players[0].match[5].score)+Number(email.players[0].match[6].score)+Number(email.players[0].match[7].score)+Number(email.players[0].match[8].score)+Number(email.players[0].match[9].score)+Number(email.players[0].match[10].score)+Number(email.players[0].match[11].score)+Number(email.players[0].match[12].score)+Number(email.players[0].match[13].score)+Number(email.players[0].match[14].score)+Number(email.players[0].match[15].score)+Number(email.players[0].match[16].score)+Number(email.players[0].match[17].score))+'</td></tr>';

  html+='<tr><td>'+email.players[1].name+'</td>';
   html+='<td>'+email.players[1].match[0].score+'</td>';
  html+='<td>'+email.players[1].match[1].score+'</td>';
  html+='<td>'+email.players[1].match[2].score+'</td>';
  html+='<td>'+email.players[1].match[3].score+'</td>';
  html+='<td>'+email.players[1].match[4].score+'</td>';
  html+='<td>'+email.players[1].match[5].score+'</td>';
  html+='<td>'+email.players[1].match[6].score+'</td>';
  html+='<td>'+email.players[1].match[7].score+'</td>';
  html+='<td>'+email.players[1].match[8].score+'</td>';
  html+='<td>'+email.players[1].match[9].score+'</td>';
  html+='<td>'+email.players[1].match[10].score+'</td>';
  html+='<td>'+email.players[1].match[11].score+'</td>';
  html+='<td>'+email.players[1].match[12].score+'</td>';
  html+='<td>'+email.players[1].match[13].score+'</td>';
 html+='<td>'+email.players[1].match[14].score+'</td>';
  html+='<td>'+email.players[1].match[15].score+'</td>';
  html+='<td>'+email.players[1].match[16].score+'</td>';
  html+='<td>'+email.players[1].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[1].match[0].score)+Number(email.players[1].match[1].score)+Number(email.players[1].match[2].score)+Number(email.players[1].match[3].score)+Number(email.players[1].match[4].score)+Number(email.players[1].match[5].score)+Number(email.players[1].match[6].score)+Number(email.players[1].match[7].score)+Number(email.players[1].match[8].score)+Number(email.players[1].match[9].score)+Number(email.players[1].match[10].score)+Number(email.players[1].match[11].score)+Number(email.players[1].match[12].score)+Number(email.players[1].match[13].score)+Number(email.players[1].match[14].score)+Number(email.players[1].match[15].score)+Number(email.players[1].match[16].score)+Number(email.players[1].match[17].score))+'</td></tr>';

  html+='<tr><td>'+email.players[2].name+'</td>';
  html+='<td>'+email.players[2].match[0].score+'</td>';
  html+='<td>'+email.players[2].match[1].score+'</td>';
  html+='<td>'+email.players[2].match[2].score+'</td>';
  html+='<td>'+email.players[2].match[3].score+'</td>';
  html+='<td>'+email.players[2].match[4].score+'</td>';
  html+='<td>'+email.players[2].match[5].score+'</td>';
  html+='<td>'+email.players[2].match[6].score+'</td>';
  html+='<td>'+email.players[2].match[7].score+'</td>';
  html+='<td>'+email.players[2].match[8].score+'</td>';
  html+='<td>'+email.players[2].match[9].score+'</td>';
  html+='<td>'+email.players[2].match[10].score+'</td>';
  html+='<td>'+email.players[2].match[11].score+'</td>';
  html+='<td>'+email.players[2].match[12].score+'</td>';
  html+='<td>'+email.players[2].match[13].score+'</td>';
html+='<td>'+email.players[2].match[14].score+'</td>';
  html+='<td>'+email.players[2].match[15].score+'</td>';
  html+='<td>'+email.players[2].match[16].score+'</td>';
  html+='<td>'+email.players[2].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[2].match[0].score)+Number(email.players[2].match[1].score)+Number(email.players[2].match[2].score)+Number(email.players[2].match[3].score)+Number(email.players[2].match[4].score)+Number(email.players[2].match[5].score)+Number(email.players[2].match[6].score)+Number(email.players[2].match[7].score)+Number(email.players[2].match[8].score)+Number(email.players[2].match[9].score)+Number(email.players[2].match[10].score)+Number(email.players[2].match[11].score)+Number(email.players[2].match[12].score)+Number(email.players[2].match[13].score)+Number(email.players[2].match[14].score)+Number(email.players[2].match[15].score)+Number(email.players[2].match[16].score)+Number(email.players[2].match[17].score))+'</td></tr>';

  html+='<tr><td>'+email.players[3].name+'</td>';
  html+='<td>'+email.players[3].match[0].score+'</td>';
  html+='<td>'+email.players[3].match[1].score+'</td>';
  html+='<td>'+email.players[3].match[2].score+'</td>';
  html+='<td>'+email.players[3].match[3].score+'</td>';
  html+='<td>'+email.players[3].match[4].score+'</td>';
  html+='<td>'+email.players[3].match[5].score+'</td>';
  html+='<td>'+email.players[3].match[6].score+'</td>';
  html+='<td>'+email.players[3].match[7].score+'</td>';
  html+='<td>'+email.players[3].match[8].score+'</td>  ';
  html+='<td>'+email.players[3].match[9].score+'</td>'; 
  html+='<td>'+email.players[3].match[10].score+'</td>';
  html+='<td>'+email.players[3].match[11].score+'</td>';
  html+='<td>'+email.players[3].match[12].score+'</td>';
  html+='<td>'+email.players[3].match[13].score+'</td>';
html+='<td>'+email.players[3].match[14].score+'</td>';
  html+='<td>'+email.players[3].match[15].score+'</td>';
  html+='<td>'+email.players[3].match[16].score+'</td>';
  html+='<td>'+email.players[3].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[3].match[0].score)+Number(email.players[3].match[1].score)+Number(email.players[3].match[2].score)+Number(email.players[3].match[3].score)+Number(email.players[3].match[4].score)+Number(email.players[3].match[5].score)+Number(email.players[3].match[6].score)+Number(email.players[3].match[7].score)+Number(email.players[3].match[8].score)+Number(email.players[3].match[9].score)+Number(email.players[3].match[10].score)+Number(email.players[3].match[11].score)+Number(email.players[3].match[12].score)+Number(email.players[3].match[13].score)+Number(email.players[3].match[14].score)+Number(email.players[3].match[15].score)+Number(email.players[3].match[16].score)+Number(email.players[3].match[17].score))+'</td></tr>';

    html+='<tr><td>'+email.players[4].name+'</td>';
   html+='<td>'+email.players[4].match[0].score+'</td>';
  html+='<td>'+email.players[4].match[1].score+'</td>';
  html+='<td>'+email.players[4].match[2].score+'</td>';
  html+='<td>'+email.players[4].match[3].score+'</td>';
  html+='<td>'+email.players[4].match[4].score+'</td>';
  html+='<td>'+email.players[4].match[5].score+'</td>';
  html+='<td>'+email.players[4].match[6].score+'</td>';
  html+='<td>'+email.players[4].match[7].score+'</td>';
  html+='<td>'+email.players[4].match[8].score+'</td>';
  html+='<td>'+email.players[4].match[9].score+'</td>';
  html+='<td>'+email.players[4].match[10].score+'</td>';
  html+='<td>'+email.players[4].match[11].score+'</td>';
  html+='<td>'+email.players[4].match[12].score+'</td>';
  html+='<td>'+email.players[4].match[13].score+'</td>';
html+='<td>'+email.players[4].match[14].score+'</td>';
  html+='<td>'+email.players[4].match[15].score+'</td>';
  html+='<td>'+email.players[4].match[16].score+'</td>';
  html+='<td>'+email.players[4].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[4].match[0].score)+Number(email.players[4].match[1].score)+Number(email.players[4].match[2].score)+Number(email.players[4].match[3].score)+Number(email.players[4].match[4].score)+Number(email.players[4].match[5].score)+Number(email.players[4].match[6].score)+Number(email.players[4].match[7].score)+Number(email.players[4].match[8].score)+Number(email.players[4].match[9].score)+Number(email.players[4].match[10].score)+Number(email.players[4].match[11].score)+Number(email.players[4].match[12].score)+Number(email.players[4].match[13].score)+Number(email.players[4].match[14].score)+Number(email.players[4].match[15].score)+Number(email.players[4].match[16].score)+Number(email.players[4].match[17].score))+'</td></tr>';

  html+='<tr><td>'+email.players[5].name+'</td>';
  html+='<td>'+email.players[5].match[0].score+'</td>';
  html+='<td>'+email.players[5].match[1].score+'</td>';
  html+='<td>'+email.players[5].match[2].score+'</td>';
  html+='<td>'+email.players[5].match[3].score+'</td>';
  html+='<td>'+email.players[5].match[4].score+'</td>';
  html+='<td>'+email.players[5].match[5].score+'</td>';
  html+='<td>'+email.players[5].match[6].score+'</td>';
  html+='<td>'+email.players[5].match[7].score+'</td>';
  html+='<td>'+email.players[5].match[8].score+'</td>';
  html+='<td>'+email.players[5].match[9].score+'</td>';
  html+='<td>'+email.players[5].match[10].score+'</td>';
  html+='<td>'+email.players[5].match[11].score+'</td>';
  html+='<td>'+email.players[5].match[12].score+'</td>';
  html+='<td>'+email.players[5].match[13].score+'</td>';
html+='<td>'+email.players[5].match[14].score+'</td>';
  html+='<td>'+email.players[5].match[15].score+'</td>';
  html+='<td>'+email.players[5].match[16].score+'</td>';
  html+='<td>'+email.players[5].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[5].match[0].score)+Number(email.players[5].match[1].score)+Number(email.players[5].match[2].score)+Number(email.players[5].match[3].score)+Number(email.players[5].match[4].score)+Number(email.players[5].match[5].score)+Number(email.players[5].match[6].score)+Number(email.players[5].match[7].score)+Number(email.players[5].match[8].score)+Number(email.players[5].match[9].score)+Number(email.players[5].match[10].score)+Number(email.players[5].match[11].score)+Number(email.players[5].match[12].score)+Number(email.players[5].match[13].score)+Number(email.players[5].match[14].score)+Number(email.players[5].match[15].score)+Number(email.players[5].match[16].score)+Number(email.players[5].match[17].score))+'</td></tr>';

  html+='<tr><td>'+email.players[6].name+'</td>';
  html+='<td>'+email.players[6].match[0].score+'</td>';
  html+='<td>'+email.players[6].match[1].score+'</td>';
  html+='<td>'+email.players[6].match[2].score+'</td>';
  html+='<td>'+email.players[6].match[3].score+'</td>';
  html+='<td>'+email.players[6].match[4].score+'</td>';
  html+='<td>'+email.players[6].match[5].score+'</td>';
  html+='<td>'+email.players[6].match[6].score+'</td>';
  html+='<td>'+email.players[6].match[7].score+'</td>';
  html+='<td>'+email.players[6].match[8].score+'</td>';
  html+='<td>'+email.players[6].match[9].score+'</td>';
  html+='<td>'+email.players[6].match[10].score+'</td>';
  html+='<td>'+email.players[6].match[11].score+'</td>';
  html+='<td>'+email.players[6].match[12].score+'</td>';
  html+='<td>'+email.players[6].match[13].score+'</td>';
html+='<td>'+email.players[6].match[14].score+'</td>';
  html+='<td>'+email.players[6].match[15].score+'</td>';
  html+='<td>'+email.players[6].match[16].score+'</td>';
  html+='<td>'+email.players[6].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[6].match[0].score)+Number(email.players[6].match[1].score)+Number(email.players[6].match[2].score)+Number(email.players[6].match[3].score)+Number(email.players[6].match[4].score)+Number(email.players[6].match[5].score)+Number(email.players[6].match[6].score)+Number(email.players[6].match[7].score)+Number(email.players[6].match[8].score)+Number(email.players[6].match[9].score)+Number(email.players[6].match[10].score)+Number(email.players[6].match[11].score)+Number(email.players[6].match[12].score)+Number(email.players[6].match[13].score)+Number(email.players[6].match[14].score)+Number(email.players[6].match[15].score)+Number(email.players[6].match[16].score)+Number(email.players[6].match[17].score))+'</td></tr>';


 


if(email.players[7]){
   html+='<tr><td>'+email.players[7].name+'</td>';
  html+='<td>'+email.players[7].match[0].score+'</td>';
  html+='<td>'+email.players[7].match[1].score+'</td>';
  html+='<td>'+email.players[7].match[2].score+'</td>';
  html+='<td>'+email.players[7].match[3].score+'</td>';
  html+='<td>'+email.players[7].match[4].score+'</td>';
  html+='<td>'+email.players[7].match[5].score+'</td>';
  html+='<td>'+email.players[7].match[6].score+'</td>';
  html+='<td>'+email.players[7].match[7].score+'</td>';
  html+='<td>'+email.players[7].match[8].score+'</td>';
  html+='<td>'+email.players[7].match[9].score+'</td>';
  html+='<td>'+email.players[7].match[10].score+'</td>';
  html+='<td>'+email.players[7].match[11].score+'</td>';
  html+='<td>'+email.players[7].match[12].score+'</td>';
  html+='<td>'+email.players[7].match[13].score+'</td>';
html+='<td>'+email.players[7].match[14].score+'</td>';
  html+='<td>'+email.players[7].match[15].score+'</td>';
  html+='<td>'+email.players[7].match[16].score+'</td>';
  html+='<td>'+email.players[7].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[7].match[0].score)+Number(email.players[7].match[1].score)+Number(email.players[7].match[2].score)+Number(email.players[7].match[3].score)+Number(email.players[7].match[4].score)+Number(email.players[7].match[5].score)+Number(email.players[7].match[6].score)+Number(email.players[7].match[7].score)+Number(email.players[7].match[8].score)+Number(email.players[7].match[9].score)+Number(email.players[7].match[10].score)+Number(email.players[7].match[11].score)+Number(email.players[7].match[12].score)+Number(email.players[7].match[13].score)+Number(email.players[7].match[14].score)+Number(email.players[7].match[15].score)+Number(email.players[7].match[16].score)+Number(email.players[7].match[17].score))+'</td></tr>';

}


if(email.players[8]){
   html+='<tr><td>'+email.players[8].name+'</td>';
  html+='<td>'+email.players[8].match[0].score+'</td>';
  html+='<td>'+email.players[8].match[1].score+'</td>';
  html+='<td>'+email.players[8].match[2].score+'</td>';
  html+='<td>'+email.players[8].match[3].score+'</td>';
  html+='<td>'+email.players[8].match[4].score+'</td>';
  html+='<td>'+email.players[8].match[5].score+'</td>';
  html+='<td>'+email.players[8].match[6].score+'</td>';
  html+='<td>'+email.players[8].match[7].score+'</td>';
  html+='<td>'+email.players[8].match[8].score+'</td>';
  html+='<td>'+email.players[8].match[9].score+'</td>';
  html+='<td>'+email.players[8].match[10].score+'</td>';
  html+='<td>'+email.players[8].match[11].score+'</td>';
  html+='<td>'+email.players[8].match[12].score+'</td>';
  html+='<td>'+email.players[8].match[13].score+'</td>';
html+='<td>'+email.players[8].match[14].score+'</td>';
  html+='<td>'+email.players[8].match[15].score+'</td>';
  html+='<td>'+email.players[8].match[16].score+'</td>';
  html+='<td>'+email.players[8].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[8].match[0].score)+Number(email.players[8].match[1].score)+Number(email.players[8].match[2].score)+Number(email.players[8].match[3].score)+Number(email.players[8].match[4].score)+Number(email.players[8].match[5].score)+Number(email.players[8].match[6].score)+Number(email.players[8].match[7].score)+Number(email.players[8].match[8].score)+Number(email.players[8].match[9].score)+Number(email.players[8].match[10].score)+Number(email.players[8].match[11].score)+Number(email.players[8].match[12].score)+Number(email.players[8].match[13].score)+Number(email.players[8].match[14].score)+Number(email.players[8].match[15].score)+Number(email.players[8].match[16].score)+Number(email.players[8].match[17].score))+'</td></tr>';

}
if(email.players[9]){
   html+='<tr><td>'+email.players[9].name+'</td>';
  html+='<td>'+email.players[9].match[0].score+'</td>';
  html+='<td>'+email.players[9].match[1].score+'</td>';
  html+='<td>'+email.players[9].match[2].score+'</td>';
  html+='<td>'+email.players[9].match[3].score+'</td>';
  html+='<td>'+email.players[9].match[4].score+'</td>';
  html+='<td>'+email.players[9].match[5].score+'</td>';
  html+='<td>'+email.players[9].match[6].score+'</td>';
  html+='<td>'+email.players[9].match[7].score+'</td>';
  html+='<td>'+email.players[9].match[8].score+'</td>';
  html+='<td>'+email.players[9].match[9].score+'</td>';
  html+='<td>'+email.players[9].match[10].score+'</td>';
  html+='<td>'+email.players[9].match[11].score+'</td>';
  html+='<td>'+email.players[9].match[12].score+'</td>';
  html+='<td>'+email.players[9].match[13].score+'</td>';
html+='<td>'+email.players[9].match[14].score+'</td>';
  html+='<td>'+email.players[9].match[15].score+'</td>';
  html+='<td>'+email.players[9].match[16].score+'</td>';
  html+='<td>'+email.players[9].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[9].match[0].score)+Number(email.players[9].match[1].score)+Number(email.players[9].match[2].score)+Number(email.players[9].match[3].score)+Number(email.players[9].match[4].score)+Number(email.players[9].match[5].score)+Number(email.players[9].match[6].score)+Number(email.players[9].match[7].score)+Number(email.players[9].match[8].score)+Number(email.players[9].match[9].score)+Number(email.players[9].match[10].score)+Number(email.players[9].match[11].score)+Number(email.players[9].match[12].score)+Number(email.players[9].match[13].score)+Number(email.players[9].match[14].score)+Number(email.players[9].match[15].score)+Number(email.players[9].match[16].score)+Number(email.players[9].match[17].score))+'</td></tr>';

}
if(email.players[10]){
   html+='<tr><td>'+email.players[10].name+'</td>';
  html+='<td>'+email.players[10].match[0].score+'</td>';
  html+='<td>'+email.players[10].match[1].score+'</td>';
  html+='<td>'+email.players[10].match[2].score+'</td>';
  html+='<td>'+email.players[10].match[3].score+'</td>';
  html+='<td>'+email.players[10].match[4].score+'</td>';
  html+='<td>'+email.players[10].match[5].score+'</td>';
  html+='<td>'+email.players[10].match[6].score+'</td>';
  html+='<td>'+email.players[10].match[7].score+'</td>';
  html+='<td>'+email.players[10].match[8].score+'</td>';
  html+='<td>'+email.players[10].match[9].score+'</td>';
  html+='<td>'+email.players[10].match[10].score+'</td>';
  html+='<td>'+email.players[10].match[11].score+'</td>';
  html+='<td>'+email.players[10].match[12].score+'</td>';
  html+='<td>'+email.players[10].match[13].score+'</td>';
html+='<td>'+email.players[10].match[14].score+'</td>';
  html+='<td>'+email.players[10].match[15].score+'</td>';
  html+='<td>'+email.players[10].match[16].score+'</td>';
  html+='<td>'+email.players[10].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[10].match[0].score)+Number(email.players[10].match[1].score)+Number(email.players[10].match[2].score)+Number(email.players[10].match[3].score)+Number(email.players[10].match[4].score)+Number(email.players[10].match[5].score)+Number(email.players[10].match[6].score)+Number(email.players[10].match[7].score)+Number(email.players[10].match[8].score)+Number(email.players[10].match[9].score)+Number(email.players[10].match[10].score)+Number(email.players[10].match[11].score)+Number(email.players[10].match[12].score)+Number(email.players[10].match[13].score)+Number(email.players[10].match[14].score)+Number(email.players[10].match[15].score)+Number(email.players[10].match[16].score)+Number(email.players[10].match[17].score))+'</td></tr>';

}
if(email.players[11]){
   html+='<tr><td>'+email.players[11].name+'</td>';
  html+='<td>'+email.players[11].match[0].score+'</td>';
  html+='<td>'+email.players[11].match[1].score+'</td>';
  html+='<td>'+email.players[11].match[2].score+'</td>';
  html+='<td>'+email.players[11].match[3].score+'</td>';
  html+='<td>'+email.players[11].match[4].score+'</td>';
  html+='<td>'+email.players[11].match[5].score+'</td>';
  html+='<td>'+email.players[11].match[6].score+'</td>';
  html+='<td>'+email.players[11].match[7].score+'</td>';
  html+='<td>'+email.players[11].match[8].score+'</td>';
  html+='<td>'+email.players[11].match[9].score+'</td>';
  html+='<td>'+email.players[11].match[10].score+'</td>';
  html+='<td>'+email.players[11].match[11].score+'</td>';
  html+='<td>'+email.players[11].match[12].score+'</td>';
  html+='<td>'+email.players[11].match[13].score+'</td>';
html+='<td>'+email.players[11].match[14].score+'</td>';
  html+='<td>'+email.players[11].match[15].score+'</td>';
  html+='<td>'+email.players[11].match[16].score+'</td>';
  html+='<td>'+email.players[11].match[17].score+'</td>';

  html+='<td>'+(Number(email.players[11].match[0].score)+Number(email.players[11].match[1].score)+Number(email.players[11].match[2].score)+Number(email.players[11].match[3].score)+Number(email.players[11].match[4].score)+Number(email.players[11].match[5].score)+Number(email.players[11].match[6].score)+Number(email.players[11].match[7].score)+Number(email.players[11].match[8].score)+Number(email.players[11].match[9].score)+Number(email.players[11].match[10].score)+Number(email.players[11].match[11].score)+Number(email.players[11].match[12].score)+Number(email.players[11].match[13].score)+Number(email.players[11].match[14].score)+Number(email.players[11].match[15].score)+Number(email.players[11].match[16].score)+Number(email.players[11].match[17].score))+'</td></tr>';

}
    html+='</tbody></table>';

    html+='<br></hr><b> Your Score Is ='+(totalScored-captainScored-(Number(email.favTeam.win)*75))+' <br> Your Captain Bonus is = '+captainScored+' <br>Your supporting team win Bonus is = '+(Number(email.favTeam.win)*75)+' <br>Extra Wildcard Deduction is 1 * = '+(Number(email.wildCards.fourth))+'</b>';
    html+='<br><h3> Your Total Score Is ='+(totalScored)+'</h3>';

  html+='</br><hr><b style="color: #006600"><h1>Top 3 Scoreboard Leader are</h1></b><hr></br>';
  html+='<ul><li>'+firstHighest.name+ ':' +firstHighest.total+'</li>';
  html+='<li>'+secondHighest.name+ ':' +secondHighest.total+'</li>';
  html+='<li>'+thirdHighest.name+ ':' +thirdHighest.total+'</li></ul>';

  html+='</br><hr><h3>Close Contenders are</h3></hr>';
  html+='<ul><li>'+fourthHighest.name+ ':' +fourthHighest.total+'</li>';
  html+='<li>'+fifthHighest.name+ ':' +fifthHighest.total+'</li>';
  html+='<li>'+sixthHighest.name+ ':' +sixthHighest.total+'</li>';
  html+='<li>'+seventhHighest.name+ ':' +seventhHighest.total+'</li>';
  html+='<li>'+eithHighest.name+ ':' +eithHighest.total+'</li></ul>';

  html+='</br><hr><br><h5>'+firstHighest.name+ ' is Leading with the team</h5>';
  html+='<ul><li>'+topperTeam[0]+'</li>';
  html+='<li>'+topperTeam[1]+'</li>';
  html+='<li>'+topperTeam[2]+'</li>';
  html+='<li>'+topperTeam[3]+'</li>';
  html+='<li>'+topperTeam[4]+'</li>';
  html+='<li>'+topperTeam[5]+'</li>';
  if(topperTeam.length>7){
    html+='<li>'+topperTeam[7]+'</li>';
  }
  if(topperTeam.length>8){
    html+='<li>'+topperTeam[8]+'</li>';
  }
  if(topperTeam.length>9){
    html+='<li>'+topperTeam[9]+'</li>';
  }
  if(topperTeam.length>10){
    html+='<li>'+topperTeam[10]+'</li>';
  }
  if(topperTeam.length>11){
    html+='<li>'+topperTeam[11]+'</li>';
  }
  html+='<li>'+topperTeam[6]+'</li></ul>';

  html+='<h2>Dont reply on this auto generated mail</h2><h4>You will recieve this mail twice a day</h4></body></html>';

  debugger


    //***************************** email body configuration ********************************
    var emailConfig = {  //email options
       from: "Hardi <darakulaaz@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
       to: email.email, // receiver
       //cc:'sidjain07@gmail.com,hardik.munjaal@gmail.com,mohd.jafar93@gmail.com,Anshulrocky13@gmail.com,prshnt.bhtt@gmail.com,Abhishek619garkoti@gmail.com,atul.agrawal@polestarllp.com',
       subject: "Your Scorecard Phase 10.0", // subject
       text: "nodemailer", // body
       html: html
     };



    //******************************smtp send mail method *********************************************
      smtpTransport.sendMail(emailConfig, function(error, response){  //callback
       if(error){
         callback(error);
       }else{
         console.log("Message sent: " + response.message);
         callback();
       }

       //smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
     })
    }

    
    async.eachLimit(inventorySummary,2,smtp,function(err){
      if (err){
        console.log(err);


        return process.exit(0);
      }
            // console.log(success_email);
            // console.log(failure_email);
          });

  }, null, true, 'America/Los_Angeles');

};