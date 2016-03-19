
var request = require('request');



var list = [{ name : 'hardik',
email : 'hardik.munjaal@gmail.com',
seriesId : '12415',
players : [{name:'Kohli',id:'3993',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Ab Devillers',id:'3675',team_id:'7', match:[{id:'193307',score:null},{id:'193309',score:null},{id:'193316',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Watson',id:'3355',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Root',id:'10129',team_id:'3', match:[{id:'193303',score:null},{id:'193307',score:null},{id:'193313',score:null},{id:'193318',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

},
{ name : 'Jetha',
email : 'sidjain07@gmail.com',
seriesId : '12415',
players : [{name:'Rohit',id:'3852',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Kohli',id:'3993',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Finch',id:'4196',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Dilshan',id:'978',team_id:'8', match:[{id:'193305',score:null},{id:'193310',score:null},{id:'193318',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

},
{ name : 'Jafar',
email : 'mohd.jafar93@gmail.com',
seriesId : '12415',
players : [{name:'Kohli',id:'3993',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Duplesis',id:'28891',team_id:'7', match:[{id:'193307',score:null},{id:'193309',score:null},{id:'193316',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Hales',id:'22878',team_id:'3', match:[{id:'193303',score:null},{id:'193307',score:null},{id:'193313',score:null},{id:'193318',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Maxwell',id:'10085',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

},
{ name : 'Suar',
email : 'Anshulrocky13@gmail.com',
seriesId : '12415',
players : [{name:'Kohli',id:'3993',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Ab Devillers',id:'3675',team_id:'7', match:[{id:'193307',score:null},{id:'193309',score:null},{id:'193316',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Steve Smith',id:'4308',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Williamson',id:'4330',team_id:'5', match:[{id:'193302',score:null},{id:'193306',score:null},{id:'193312',score:null},{id:'193317',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

},
{ name : 'Bhatt',
email : 'prshnt.bhtt@gmail.com',
seriesId : '12415',
players : [{name:'dhawan',id:'3722',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Decock',id:'28035',team_id:'7', match:[{id:'193307',score:null},{id:'193309',score:null},{id:'193316',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Warner',id:'5380',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Williamson',id:'4330',team_id:'5', match:[{id:'193302',score:null},{id:'193306',score:null},{id:'193312',score:null},{id:'193317',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

},
{ name : 'Goti',
email : 'Abhishek619garkoti@gmail.com',
seriesId : '12415',
players : [{name:'Rohit',id:'3852',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Kohli',id:'3993',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',scosre:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Warner',id:'5380',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Ab Devillers',id:'3675',team_id:'7', match:[{id:'193307',score:null},{id:'193309',score:null},{id:'193316',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

},
{ name : 'Atul Baba',
email : 'atul.agrawal@polestarllp.com',
seriesId : '12415',
players : [{name:'Kohli',id:'3993',team_id:'4', match:[{id:'193302',score:null},{id:'193308',score:null},{id:'193314',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Steve Smith',id:'4308',team_id:'1', match:[{id:'193306',score:null},{id:'193311',score:null},{id:'193315',score:null},{id:'193319',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Decock',id:'28035',team_id:'7', match:[{id:'193307',score:null},{id:'193309',score:null},{id:'193316',score:null},{id:'193321',score:null},{id:'293302',score:null},{id:'293302',score:null}]},{name:'Root',id:'10129',team_id:'3', match:[{id:'193303',score:null},{id:'193307',score:null},{id:'193313',score:null},{id:'193318',score:null},{id:'293302',score:null},{id:'293302',score:null}]}]

}]


var scoreUpdator = {






getScore :function(cb){


  var naam = list[0].name;
  console.log(list[0].players.length);


for(l=0;l<list.length;l++){

  (function(l){

for(k=0;k<list[l].players.length;k++){

 (function(k){


for(j=0;j<list[l].players[k].match.length;j++){

  (function(j){

      console.log('j ki value',j);

  var playerNaam=list[l].players[k].name;
  console.log(playerNaam);
  var playerId = list[l].players[k].id;

  var matchId=list[l].players[k].match[j].id;
  var teamId=list[l].players[k].team_id;


  console.log(matchId);


  var options = {
   url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.scorecard%20where%20match_id%3D'+matchId+'&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=',
   method: 'GET'
 };

 request(options, function(err, res, data) {
  if(err) {
    console.log(err);
    list[l].players[k].match[j].score=null;
  } else {
    var result = JSON.parse(data);

    


    if(result.query.results && result.query.results.Scorecard.past_ings && result.query.results.Scorecard.past_ings.length){
  
    console.log(!result.query.results.Scorecard.past_ings.length)
    console.log(teamId);
    console.log(matchId);
    var teamIdTester = result.query.results.Scorecard.past_ings[0].s.a.i;

    

    }
    if(teamIdTester==teamId){


    


    console.log('svjhgvsgvsgsssssssssssss');
    console.log(!result.query.results);



    if(!result.query.results){

      console.log('chuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuutiy');
      list[l].players[k].match[j].score=null;
    }

    else{

      var playerArray= result.query.results.Scorecard.past_ings[0].d.a.t;
      var playerIndex;

      console.log('array length',playerArray.length);
     console.log('player id',playerId);

      for(i=0;i<playerArray.length;i++){


          if(playerArray[i].i==playerId){

           console.log("playerId is",playerArray[i].i);
           console.log("player index is",i);

           playerIndex=i;
         }
       }

     console.log(playerIndex);
     if(playerIndex>-1){
     var code = result.query.results.Scorecard.past_ings[0].d.a.t[playerIndex].r;

     list[l].players[k].match[j].score=code;
     }else{list[l].players[k].match[j].score=null;}
     console.log(j);
     console.log('here j=',list[l].players[k].match[j]);
   }
   } else{



     if(!teamIdTester){
        list[l].players[k].match[j].score=null;
     }
     else{
     var playerArray= result.query.results.Scorecard.past_ings[1].d.a.t;
     var playerIndex;

     console.log('array length',playerArray.length);
     console.log('player id',playerId);

     for(i=0;i<playerArray.length;i++){

      if(playerArray[i].i==playerId){

        console.log("playerId in else case is",playerArray[i].i);
           console.log("player index is",i);

       playerIndex=i;
     }
   }

 var code = result.query.results.Scorecard.past_ings[1].d.a.t[playerIndex].r;
 list[l].players[k].match[j].score=code;
}
}

}
});

  }(j))
  


}

 }(k))
}

}(l))
}

setTimeout(function(){ 
  console.log(list[0].players[0].match);
  cb(null,list);
   }, 120000);

}



//console.log(list[0].players[0].match);

//setTimeout(function(){ console.log(list[0].players[0].match); }, 10000);


};
module.exports = scoreUpdator;

