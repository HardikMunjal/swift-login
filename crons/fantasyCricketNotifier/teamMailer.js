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
var topper={};
var sectopper={};
var thirdtopper={};
var highestM;
var topperTeam=[];



//*****************************Model Fetch Data ******************************************

var options='hardik';
scoreMailer.getScore(function(err, result) {
  if (err) {     
     console.log('coming here bc');            
    //return next(err);
  }
  inventorySummary = result;
  console.log(inventorySummary);
  console.log(inventorySummary[0].players[0].match[0]);

  var total = 0;


for(k=0;k<inventorySummary.length;k++){
for(j=0;j<inventorySummary[k].players.length;j++){
 

 console.log(j);
 console.log(k);
 for(i=0;i<inventorySummary[k].players[j].match.length;i++){

  console.log('my total is',total)

  
  if(inventorySummary[k].players[j].match[i].score==null){
    total=total+0;
  }
  else{
  total=total+parseInt(inventorySummary[k].players[j].match[i].score);
  console.log(total);
  }
 }
}
totalCalculator.push({name:inventorySummary[k].name,total:total})
total=0;
}

console.log(totalCalculator);
totalsUsedByOthers=totalCalculator.slice(0);
console.log(totalsUsedByOthers);
console.log('length of total calculatr used by others',totalsUsedByOthers.length);



for(n=0;n<3;n++){
  for(m=0;m<totalCalculator.length;m++){
  
  console.log('value of n',n);
  console.log(totalCalculator.length);
    if(totalCalculator[m].total>highest){
    highest= totalCalculator[m].total;
    highestM=m;
    topper=totalCalculator[m];

    

  }
 }

  console.log('value of n chuchus',n);
  console.log(totalCalculator.length);
if(n==0){
firstHighest=topper;
}
if(n==1){
  console.log('here value of n',n);
secondHighest=topper;
}
if(n==2){
thirdHighest=topper;
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


var list = [{ name : 'hardik',
email : 'hardik.munjaal@gmail.com',
seriesId : '12415',
players : [{name:'rohit',id:'3852',team_id:'4', match:[{id:'193302',score:null},{id:'193302',score:null}]},{name:'dhawan',id:'3722',team_id:'4', match:[{id:'193302',score:null},{id:'193302',score:null}]}]

},
{ name : 'Suar',
email : 'darakulaaz@gmail.com',
seriesId : '12415',
players : [{name:'dhawan',id:'3722',team_id:'4', match:[{id:'193302',score:null},{id:'193302',score:null}]},{name:'dhawan',id:'3722',team_id:'4', match:[{id:'193302',score:null},{id:'193302',score:null}]}]

}]





// setTimeout(function(){ 
  

// var total = 0;
// var totalCalculator=[];

// for(k=0;k<inventorySummary.length;k++){
// for(j=0;j<inventorySummary[k].players.length;j++){
 

//  console.log(j);
//  console.log(k);
//  for(i=0;i<inventorySummary[k].players[j].match.length;i++){

//   console.log('my total is',total)

  
//   if(inventorySummary[k].players[j].match[i].score==null){
//     total=total+0;
//   }
//   else{
//   total=total+parseInt(inventorySummary[k].players[j].match[i].score);
//   console.log(total);
//   }
//  }
// }
// totalCalculator.push({name:inventorySummary[k].name,total:total})
// total=0;
// }

// console.log(totalCalculator);

// var highest=0;
// var topper=[];
// for(m=0;m<totalCalculator.length;m++){

//     if(totalCalculator.total>highest){
//     highest= totalCalculator.total;

//     topper.push(totalCalculator)

//   }
// }

// console.log('topper is',topper);


//    }, 30000);





module.exports = function () {

  new CronJob('*/3 * * * *', function() {

    console.log('You will see this message ,when resource would be available to process your request');
    console.log('sending mail');  


   // ********************************gmail credential*********************************
   var smtpTransport = nodemailer.createTransport("SMTP",{
     service: "Gmail",  // sets automatically host, port and connection security settings
     auth: {
       user: "hardik.munjal@polestarllp.com",
       pass: "timexxx"
     }
   });





    //***************************** dummy merchant record *************************************
    var dummyMerchantRecord = [{email:"hardik.munjaal@gmail.com",merchant_id:"121",fc_name:"abb",total_pid_live:"1",less_than_1_day:"1",less_than_two_day:"1",less_than_three_day:"1"},{email:"api.integration@paytm.com",merchant_id:"1222",fc_name:"ss",total_pid_live:"2",less_than_1_day:"2",less_than_two_day:"2",less_than_three_day:"2"}];
    var merchantEmails= [{email:"hardik.munjaal@gmail.com",merchant_id:"121"},{email:"hardik.munjaal@gmail.com",merchant_id:"121"}]

    var listofemails = ["hardik.munjaal@gmail.com","api.integration@paytm.com"];


    // dummyMerchantRecord.forEach(function(mr){
    //   merchantEmails.forEach
    // })


    // headers.forEach(function(header) {
    //   csv += escapeString(header) + ',';
    // });



  
//***************************** Main SMTP method **************************
var smtp = function(email,callback) {

  
console.log('length is',totalsUsedByOthers.length);
   for(i=0;i<totalsUsedByOthers.length;i++){

    console.log(totalsUsedByOthers[i].name);
    console.log(email.name);
      if(totalsUsedByOthers[i].name==email.name){
        var totalScored = totalsUsedByOthers[i].total;
      }
   }
   console.log(totalScored);


    var html='<html><head></head><body><p>Hi   '+email.name+'   !</p>';

    html+='<p><b>Your Team is</b></p>';
    html+='<ul><li>'+email.players[0].name+'</li>';
    html+='<li>'+email.players[1].name+'</li>';
    html+='<li>'+email.players[2].name+'</li>';
    html+='<li>'+email.players[3].name+'</li></ul';

    html+='<p>Please find your total score</p>';
    html+='<table class="tftable" border="1"><thead>';
    html+='<tr><th>Player Name</th><th>Match 1</th><th>Match 2</th><th>Match 3</th><th>Match 4</th><th>Match 5</th><th>Match 6</th><th>Total Score</th></tr></thead><tbody>';
    html+='<tr><td>'+email.players[0].name+'</td>';
    html+='<td>'+email.players[0].match[0].score+'</td>';
    html+='<td>'+email.players[0].match[1].score+'</td>';
    html+='<td>'+email.players[0].match[2].score+'</td>';
    html+='<td>'+email.players[0].match[3].score+'</td>';
    html+='<td>'+email.players[0].match[4].score+'</td>';
    html+='<td>'+email.players[0].match[5].score+'</td>';
    html+='<td>'+(Number(email.players[0].match[0].score)+Number(email.players[0].match[1].score)+Number(email.players[0].match[2].score)+Number(email.players[0].match[3].score)+Number(email.players[0].match[4].score)+Number(email.players[0].match[5].score))+'</td></tr>';

    html+='<tr><td>'+email.players[1].name+'</td>';
    html+='<td>'+email.players[1].match[0].score+'</td>';
    html+='<td>'+email.players[1].match[1].score+'</td>';
    html+='<td>'+email.players[1].match[2].score+'</td>';
    html+='<td>'+email.players[1].match[3].score+'</td>';
    html+='<td>'+email.players[1].match[4].score+'</td>';
    html+='<td>'+email.players[1].match[5].score+'</td>';
    html+='<td>'+(Number(email.players[1].match[0].score)+Number(email.players[1].match[1].score)+Number(email.players[1].match[2].score)+Number(email.players[1].match[3].score)+Number(email.players[1].match[4].score)+Number(email.players[1].match[5].score))+'</td></tr>';

    html+='<tr><td>'+email.players[2].name+'</td>';
    html+='<td>'+email.players[2].match[0].score+'</td>';
    html+='<td>'+email.players[2].match[1].score+'</td>';
    html+='<td>'+email.players[2].match[2].score+'</td>';
    html+='<td>'+email.players[2].match[3].score+'</td>';
    html+='<td>'+email.players[2].match[4].score+'</td>';
    html+='<td>'+email.players[2].match[5].score+'</td>';
    html+='<td>'+(Number(email.players[2].match[0].score)+Number(email.players[2].match[1].score)+Number(email.players[2].match[2].score)+Number(email.players[2].match[3].score)+Number(email.players[2].match[4].score)+Number(email.players[2].match[5].score))+'</td></tr>';

    html+='<tr><td>'+email.players[3].name+'</td>';
    html+='<td>'+email.players[3].match[0].score+'</td>';
    html+='<td>'+email.players[3].match[1].score+'</td>';
    html+='<td>'+email.players[3].match[2].score+'</td>';
    html+='<td>'+email.players[3].match[3].score+'</td>';
    html+='<td>'+email.players[3].match[4].score+'</td>';
    html+='<td>'+email.players[3].match[5].score+'</td>';
    html+='<td>'+(Number(email.players[3].match[0].score)+Number(email.players[3].match[1].score)+Number(email.players[3].match[2].score)+Number(email.players[3].match[3].score)+Number(email.players[3].match[4].score)+Number(email.players[3].match[5].score))+'</td></tr>';

    html+='<b> Your Total Score Is ='+totalScored+'</b>';

   
    html+='</tbody></table>';

     html+='</br><hr><h4>Top 3 Scoreboard Leader are</h4>';
    html+='<ul><li>'+firstHighest.name+ ':' +firstHighest.total+'</li>';
    html+='<li>'+secondHighest.name+ ':' +secondHighest.total+'</li>';
    html+='<li>'+thirdHighest.name+ ':' +thirdHighest.total+'</li></ul>';

     html+='</br><h5>'+firstHighest.name+ ' is Leading with the team</h5>';
    html+='<ul><li>'+topperTeam[0]+'</li>';
    html+='<li>'+topperTeam[1]+'</li>';
    html+='<li>'+topperTeam[2]+'</li>';
    html+='<li>'+topperTeam[3]+'</li></ul>';

    

    html+='<h2>Dont reply on this auto generated mail</h2><h4>You will recieve this mail twice a day</h4></body></html>';

   debugger


    //***************************** email body configuration ********************************
    var emailConfig = {  //email options
       from: "Hardik <hardik.munjal@polestarllp.com>", // sender address.  Must be the same as authenticated user if using Gmail.
       to: email.email, // receiver
       subject: "Your Scorecard Phase 2.0", // subject
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