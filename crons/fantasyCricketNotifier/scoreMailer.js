
var request = require('request');


//6250  3750 2500

// {name:'D.Warner',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]}
// {name:'D.Warner',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]}    {name:'D.Warner',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]}
// {name:'D.Warner',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]}    {name:'D.Warner',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]}     {name:'D.Warner',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]}
var list = [{ name : 'Hardik Munjaal',
email : 'hardik.munjaal@gmail.com',
seriesId : '12437',
players : [{name:'D.Warner(C)',id:'5380',captain:'YES',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'Ab Devillers',id:'3675',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'A.Rahane',id:'3991',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'F.Duplesis',id:'28891',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'Kohli',id:'3993',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'G.Maxwell',id:'10085',team_id:'1107',match:[{id:'193867',score:null},{id:'193871',score:null},{id:'193874',score:null},{id:'193877',score:null},{id:'193882',score:null},{id:'193885',score:null},{id:'193892',score:null},{id:'193896',score:null},{id:'193900',score:null},{id:'193903',score:null},{id:'193907',score:null},{id:'193911',score:null},{id:'193914',score:null},{id:'193917',score:null}]},{name:'M.Vijay',id:'4531',team_id:'1107',match:[{id:'193867',score:null},{id:'193871',score:null},{id:'193874',score:null},{id:'193877',score:null},{id:'193882',score:null},{id:'193885',score:null},{id:'193892',score:null},{id:'193896',score:null},{id:'193900',score:null},{id:'193903',score:null},{id:'193907',score:null},{id:'193911',score:null},{id:'193914',score:null},{id:'193917',score:null}]}],
favTeam:{team:'Banglore',totalMatches:'5',win:'2'},
wildCards:{first:'unused',second:'unused',third:'unused'}
},
{ name : 'Jetha',
email : 'sidjain07@gmail.com',
seriesId : '12437',
players : [{name:'Kohli(C)',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'D.Warner',id:'5380',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'R.Sharma',id:'3852',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'193878',score:null},{id:'193881',score:null},{id:'193885',score:null},{id:'193888',score:null},{id:'193893',score:null},{id:'193901',score:null},{id:'193905',score:null},{id:'193907',score:null},{id:'193910',score:null},{id:'193918',score:null}]},{name:'C.Gayle',id:'1201',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'293878',score:null},{id:'293880',score:null},{id:'293883',score:null},{id:'293891',score:null},{id:'293894',score:null},{id:'293899',score:null},{id:'293903',score:null},{id:'293905',score:null},{id:'293908',score:null},{id:'293912',score:null},{id:'293914',score:null},{id:'293920',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'Macculum',id:'1979',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'K.Pieterson',id:'3665',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'Q.DeKock',id:'28035',team_id:'1109',match:[{id:'293866',score:null},{id:'293871',score:null},{id:'293875',score:null},{id:'193881',score:null},{id:'193887',score:null},{id:'193890',score:null},{id:'193895',score:null},{id:'193897',score:null},{id:'193900',score:null},{id:'193906',score:null},{id:'193910',score:null},{id:'193913',score:null},{id:'193916',score:null},{id:'193920',score:null}]},{name:'F.Duplesis',id:'28891',team_id:'1508',match:[{id:'293865',score:null},{id:'293870',score:null},{id:'293874',score:null},{id:'293880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]}],
favTeam:{team:'Mumbai',totalMatches:'7',win:'3'},
wildCards:{first:'Gayle to DeKOck',second:'kp to duplesis',third:'unused'}
},
{ name : 'Jafar',
email : 'mohd.jafar93@gmail.com',
seriesId : '12437',
players : [{name:'D.Warner',id:'5380',captain:'NO',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'Ab Devillers',id:'3675',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'D.Miller',id:'5313',team_id:'1107',match:[{id:'193867',score:null},{id:'193871',score:null},{id:'193874',score:null},{id:'193877',score:null},{id:'193882',score:null},{id:'293885',score:null},{id:'293892',score:null},{id:'293896',score:null},{id:'293900',score:null},{id:'293903',score:null},{id:'293907',score:null},{id:'293911',score:null},{id:'293914',score:null},{id:'293917',score:null}]},{name:'F.Duplesis',id:'28891',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'Kohli(C)',id:'3993',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'Q.DeKock',id:'28035',team_id:'1109',match:[{id:'193866',score:null},{id:'193871',score:null},{id:'193875',score:null},{id:'193881',score:null},{id:'193887',score:null},{id:'193890',score:null},{id:'193895',score:null},{id:'193897',score:null},{id:'193900',score:null},{id:'193906',score:null},{id:'193910',score:null},{id:'193913',score:null},{id:'193916',score:null},{id:'193920',score:null}]},{name:'L.Simmons(Replaced)',id:'3861',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'293873',score:null},{id:'293876',score:null},{id:'293878',score:null},{id:'293881',score:null},{id:'293885',score:null},{id:'293888',score:null},{id:'293893',score:null},{id:'293901',score:null},{id:'293905',score:null},{id:'293907',score:null},{id:'293910',score:null},{id:'293918',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'293867',score:null},{id:'293870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'G.Gambhir',id:'3478',team_id:'1106',match:[{id:'293866',score:null},{id:'293869',score:null},{id:'293872',score:null},{id:'293877',score:null},{id:'193884',score:null},{id:'193888',score:null},{id:'193890',score:null},{id:'193894',score:null},{id:'193896',score:null},{id:'193902',score:null},{id:'193909',score:null},{id:'193912',score:null},{id:'193915',score:null},{id:'193919',score:null}]}],
favTeam:{team:'KKR',totalMatches:'5',win:'4'},
wildCards:{first:'Simmons to Raina',second:'Miller to Gambhir',third:'unused'}
},
{ name : 'Goti',
email : 'Abhishek619garkoti@gmail.com',
seriesId : '12437',
players : [{name:'Kohli',id:'3993',captain:'NO',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'D.Warner',id:'5380',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'R.Sharma(C)',id:'3852',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'193878',score:null},{id:'193881',score:null},{id:'193885',score:null},{id:'193888',score:null},{id:'193893',score:null},{id:'193901',score:null},{id:'193905',score:null},{id:'193907',score:null},{id:'193910',score:null},{id:'193918',score:null}]},{name:'C.Gayle',id:'1201',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'293878',score:null},{id:'293880',score:null},{id:'293883',score:null},{id:'293891',score:null},{id:'293894',score:null},{id:'293899',score:null},{id:'293903',score:null},{id:'293905',score:null},{id:'293908',score:null},{id:'293912',score:null},{id:'293914',score:null},{id:'293920',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'J.Butler',id:'9782',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'293878',score:null},{id:'293881',score:null},{id:'293885',score:null},{id:'293888',score:null},{id:'293893',score:null},{id:'293901',score:null},{id:'293905',score:null},{id:'293907',score:null},{id:'293910',score:null},{id:'293918',score:null}]},{name:'K.Pieterson',id:'3665',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'Ab.Devillers',id:'3675',team_id:'1105',match:[{id:'293868',score:null},{id:'293875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'Q.DeKock',id:'28035',team_id:'1109',match:[{id:'293866',score:null},{id:'293871',score:null},{id:'293875',score:null},{id:'193881',score:null},{id:'193887',score:null},{id:'193890',score:null},{id:'193895',score:null},{id:'193897',score:null},{id:'193900',score:null},{id:'193906',score:null},{id:'193910',score:null},{id:'193913',score:null},{id:'193916',score:null},{id:'193920',score:null}]}],
favTeam:{team:'Mumbai',totalMatches:'7',win:'3'},
wildCards:{first:'Butler to Ab.Devillers',second:'Gayle to DeKock',third:'unused'}
},
{ name : 'Suar',
email : 'Anshulrocky13@gmail.com',
seriesId : '12437',
players : [{name:'Kohli(C)',id:'3993',captain:'YES',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'MS.Dhoni(Replaced)',id:'3676',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'293874',score:null},{id:'293880',score:null},{id:'293884',score:null},{id:'293886',score:null},{id:'293889',score:null},{id:'293893',score:null},{id:'293897',score:null},{id:'293899',score:null},{id:'293904',score:null},{id:'293909',score:null},{id:'293913',score:null},{id:'293917',score:null}]},{name:'R.Sharma(Replaced)',id:'3852',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'293873',score:null},{id:'293876',score:null},{id:'293878',score:null},{id:'293881',score:null},{id:'293885',score:null},{id:'293888',score:null},{id:'293893',score:null},{id:'293901',score:null},{id:'293905',score:null},{id:'293907',score:null},{id:'293910',score:null},{id:'293918',score:null}]},{name:'C.Gayle',id:'1201',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'293878',score:null},{id:'293880',score:null},{id:'293883',score:null},{id:'293891',score:null},{id:'293894',score:null},{id:'293899',score:null},{id:'293903',score:null},{id:'293905',score:null},{id:'293908',score:null},{id:'293912',score:null},{id:'293914',score:null},{id:'293920',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'Ab Devillers',id:'3675',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'K.Pieterson',id:'3665',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'D.Warner',id:'5380',team_id:'1379',match:[{id:'293868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'A.Finch',id:'4196',team_id:'1509',match:[{id:'293867',score:null},{id:'293870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'Q.DeKock',id:'28035',team_id:'1109',match:[{id:'293866',score:null},{id:'293871',score:null},{id:'293875',score:null},{id:'193881',score:null},{id:'193887',score:null},{id:'193890',score:null},{id:'193895',score:null},{id:'193897',score:null},{id:'193900',score:null},{id:'193906',score:null},{id:'193910',score:null},{id:'193913',score:null},{id:'193916',score:null},{id:'193920',score:null}]}],
favTeam:{team:'Banglore',totalMatches:'5',win:'2'},
wildCards:{first:'Rohit to Warner',second:'Dhoni to Finch',third:'Gayle to DeKOck'}
},
{ name : 'Dharru',
email : 'dharmendrabhatt007@gmail.com',
seriesId : '12437',
players : [{name:'Kohli',id:'3993',captain:'NO',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'S.Dhawan',id:'3722',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'J.Butler(Replaced)',id:'9782',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'293873',score:null},{id:'293876',score:null},{id:'293878',score:null},{id:'293881',score:null},{id:'293885',score:null},{id:'293888',score:null},{id:'293893',score:null},{id:'293901',score:null},{id:'293905',score:null},{id:'293907',score:null},{id:'293910',score:null},{id:'293918',score:null}]},{name:'C.Gayle(C)(Replaced)',id:'1201',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'293878',score:null},{id:'293880',score:null},{id:'293883',score:null},{id:'293891',score:null},{id:'293894',score:null},{id:'293899',score:null},{id:'293903',score:null},{id:'293905',score:null},{id:'293908',score:null},{id:'293912',score:null},{id:'293914',score:null},{id:'293920',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'S.Smith',id:'4308',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'L.Simmons(Replaced)',id:'3861',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'293873',score:null},{id:'293876',score:null},{id:'293878',score:null},{id:'293881',score:null},{id:'293885',score:null},{id:'293888',score:null},{id:'293893',score:null},{id:'293901',score:null},{id:'293905',score:null},{id:'293907',score:null},{id:'293910',score:null},{id:'293918',score:null}]},{name:'R.Sharma',id:'3852',team_id:'1111',match:[{id:'293865',score:null},{id:'293869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'193878',score:null},{id:'193881',score:null},{id:'193885',score:null},{id:'193888',score:null},{id:'193893',score:null},{id:'193901',score:null},{id:'193905',score:null},{id:'193907',score:null},{id:'193910',score:null},{id:'193918',score:null}]},{name:'M.Pandey',id:'4276',team_id:'1106',match:[{id:'293866',score:null},{id:'293869',score:null},{id:'193872',score:null},{id:'193877',score:null},{id:'193884',score:null},{id:'193888',score:null},{id:'193890',score:null},{id:'193894',score:null},{id:'193896',score:null},{id:'193902',score:null},{id:'193909',score:null},{id:'193912',score:null},{id:'193915',score:null},{id:'193919',score:null}]},{name:'Ab.Devillers(C)',id:'3675',team_id:'1105',match:[{id:'293868',score:null},{id:'293875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]}],
favTeam:{team:'Banglore',totalMatches:'5',win:'2'},
wildCards:{first:'J.Butler to M.Pandey',second:'Simmons to Rohit',third:'gayle to ABD'}
},
{ name : 'Firoz',
email : 'firozalam49@gmail.com',
seriesId : '12437',
players : [{name:'S.Smith(C)',id:'4308',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'S.Watson',id:'3355',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'K.Williamson',id:'4330',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'293876',score:null},{id:'293879',score:null},{id:'293882',score:null},{id:'293886',score:null},{id:'293891',score:null},{id:'293898',score:null},{id:'293901',score:null},{id:'293904',score:null},{id:'293906',score:null},{id:'293911',score:null},{id:'293916',score:null},{id:'293919',score:null}]},{name:'F.Duplesis',id:'28891',team_id:'1508',match:[{id:'293865',score:null},{id:'293870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'V.Kohli',id:'3993',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'L.Simmons(Replaced)',id:'3861',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'193878',score:null},{id:'193881',score:null},{id:'193885',score:null},{id:'193888',score:null},{id:'193893',score:null},{id:'193901',score:null},{id:'193905',score:null},{id:'193907',score:null},{id:'193910',score:null},{id:'193918',score:null}]},{name:'Q.DeKock',id:'28035',team_id:'1109',match:[{id:'193866',score:null},{id:'193871',score:null},{id:'193875',score:null},{id:'193881',score:null},{id:'193887',score:null},{id:'193890',score:null},{id:'193895',score:null},{id:'193897',score:null},{id:'193900',score:null},{id:'193906',score:null},{id:'193910',score:null},{id:'193913',score:null},{id:'193916',score:null},{id:'193920',score:null}]},{name:'R.Uthappa',id:'3723',team_id:'1106',match:[{id:'193866',score:null},{id:'193869',score:null},{id:'193872',score:null},{id:'193877',score:null},{id:'193884',score:null},{id:'193888',score:null},{id:'193890',score:null},{id:'193894',score:null},{id:'193896',score:null},{id:'193902',score:null},{id:'193909',score:null},{id:'193912',score:null},{id:'193915',score:null},{id:'193919',score:null}]},{name:'Macculum',id:'1979',team_id:'1509',match:[{id:'293867',score:null},{id:'293870',score:null},{id:'293873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]}],
favTeam:{team:'Delhi',totalMatches:'4',win:'3'},
wildCards:{first:'Williamson to Duplesis',second:'simmons to macc',third:'unused'}
},
{ name : 'Binjo',
email : 'abinjola.binjola@gmail.com',
seriesId : '12437',
players : [{name:'Kohli',id:'3993',captain:'NO',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'S.Watson',id:'3355',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'D.Miller',id:'5313',team_id:'1107',match:[{id:'193867',score:null},{id:'193871',score:null},{id:'193874',score:null},{id:'193877',score:null},{id:'293882',score:null},{id:'293885',score:null},{id:'293892',score:null},{id:'293896',score:null},{id:'293900',score:null},{id:'293903',score:null},{id:'293907',score:null},{id:'293911',score:null},{id:'293914',score:null},{id:'293917',score:null}]},{name:'M.Pandey',id:'4276',team_id:'1106',match:[{id:'193866',score:null},{id:'193869',score:null},{id:'193872',score:null},{id:'193877',score:null},{id:'193884',score:null},{id:'193888',score:null},{id:'193890',score:null},{id:'193894',score:null},{id:'193896',score:null},{id:'193902',score:null},{id:'193909',score:null},{id:'193912',score:null},{id:'193915',score:null},{id:'193919',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'Macculum',id:'1979',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'G.Gambhir(C)',id:'3478',team_id:'1106',match:[{id:'193866',score:null},{id:'193869',score:null},{id:'193872',score:null},{id:'193877',score:null},{id:'193884',score:null},{id:'193888',score:null},{id:'193890',score:null},{id:'193894',score:null},{id:'193896',score:null},{id:'193902',score:null},{id:'193909',score:null},{id:'193912',score:null},{id:'193915',score:null},{id:'193919',score:null}]},{name:'Ab.Devillers',id:'3675',team_id:'1105',match:[{id:'293868',score:null},{id:'293875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]}],
favTeam:{team:'KKR',totalMatches:'5',win:'4'},
wildCards:{first:'Miller to ABD',second:'unused',third:'unused'}
},
{ name : 'Mr.Baghla',
email : 'kushbaghla@gmail.com',
seriesId : '12437',
players : [{name:'K.Pieterson',id:'3665',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'S.Watson',id:'3355',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'K.Williamson',id:'4330',team_id:'1379',match:[{id:'193868',score:null},{id:'193872',score:null},{id:'193876',score:null},{id:'193879',score:null},{id:'193882',score:null},{id:'193886',score:null},{id:'193891',score:null},{id:'193898',score:null},{id:'193901',score:null},{id:'193904',score:null},{id:'193906',score:null},{id:'193911',score:null},{id:'193916',score:null},{id:'193919',score:null}]},{name:'V.Kohli(C)',id:'3993',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'R.Sharma',id:'3852',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'193878',score:null},{id:'193881',score:null},{id:'193885',score:null},{id:'193888',score:null},{id:'193893',score:null},{id:'193901',score:null},{id:'193905',score:null},{id:'193907',score:null},{id:'193910',score:null},{id:'193918',score:null}]},{name:'D.Miller',id:'5313',team_id:'1107',match:[{id:'193867',score:null},{id:'193871',score:null},{id:'193874',score:null},{id:'193877',score:null},{id:'193882',score:null},{id:'193885',score:null},{id:'193892',score:null},{id:'193896',score:null},{id:'193900',score:null},{id:'193903',score:null},{id:'193907',score:null},{id:'193911',score:null},{id:'193914',score:null},{id:'193917',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]}],
favTeam:{team:'Mumbai',totalMatches:'6',win:'2'},
wildCards:{first:'unused',second:'unused',third:'unused'}
},
{ name : 'Atul Baba',
email : 'atul.agrawal@polestarllp.com',
seriesId : '12437',
players : [{name:'S.Smith',id:'4308',team_id:'1508',match:[{id:'193865',score:null},{id:'193870',score:null},{id:'193874',score:null},{id:'193880',score:null},{id:'193884',score:null},{id:'193886',score:null},{id:'193889',score:null},{id:'193893',score:null},{id:'193897',score:null},{id:'193899',score:null},{id:'193904',score:null},{id:'193909',score:null},{id:'193913',score:null},{id:'193917',score:null}]},{name:'Ab.Devillers',id:'3675',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'R.Sharma',id:'3852',team_id:'1111',match:[{id:'193865',score:null},{id:'193869',score:null},{id:'193873',score:null},{id:'193876',score:null},{id:'193878',score:null},{id:'193881',score:null},{id:'193885',score:null},{id:'193888',score:null},{id:'193893',score:null},{id:'193901',score:null},{id:'193905',score:null},{id:'193907',score:null},{id:'193910',score:null},{id:'193918',score:null}]},{name:'V.Kohli(C)',id:'3993',team_id:'1105',match:[{id:'193868',score:null},{id:'193875',score:null},{id:'193878',score:null},{id:'193880',score:null},{id:'193883',score:null},{id:'193891',score:null},{id:'193894',score:null},{id:'193899',score:null},{id:'193903',score:null},{id:'193905',score:null},{id:'193908',score:null},{id:'193912',score:null},{id:'193914',score:null},{id:'193920',score:null}]},{name:'S.Raina',id:'3700',team_id:'1509',match:[{id:'193867',score:null},{id:'193870',score:null},{id:'193873',score:null},{id:'193879',score:null},{id:'193883',score:null},{id:'193887',score:null},{id:'193889',score:null},{id:'193892',score:null},{id:'193895',score:null},{id:'193898',score:null},{id:'193902',score:null},{id:'193908',score:null},{id:'193915',score:null},{id:'193918',score:null}]},{name:'Q.DeKock',id:'28035',team_id:'1109',match:[{id:'193866',score:null},{id:'193871',score:null},{id:'193875',score:null},{id:'193881',score:null},{id:'193887',score:null},{id:'193890',score:null},{id:'193895',score:null},{id:'193897',score:null},{id:'193900',score:null},{id:'193906',score:null},{id:'193910',score:null},{id:'193913',score:null},{id:'193916',score:null},{id:'193920',score:null}]},{name:'R.Uthappa',id:'3723',team_id:'1106',match:[{id:'193866',score:null},{id:'193869',score:null},{id:'193872',score:null},{id:'193877',score:null},{id:'193884',score:null},{id:'193888',score:null},{id:'193890',score:null},{id:'193894',score:null},{id:'193896',score:null},{id:'193902',score:null},{id:'193909',score:null},{id:'193912',score:null},{id:'193915',score:null},{id:'193919',score:null}]}],
favTeam:{team:'Banglore',totalMatches:'5',win:'2'},
wildCards:{first:'unused',second:'unused',third:'unused'}
}
]

var scoreUpdator = {

  getScore :function(cb){


    var naam = list[0].name;

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

                  console.log('scorecard.past_ins.length',!result.query.results.Scorecard.past_ings.length)
                  console.log('teamId id is ',teamId);
                  console.log('match id is', matchId);
                  var teamIdTester = result.query.results.Scorecard.past_ings[0].s.a.i;
                }
                if(teamIdTester==teamId){

                  console.log('player teamid matched');
                  console.log(!result.query.results);



                  if(!result.query.results){

                    console.log('in the loop of !result.query.results');
                    list[l].players[k].match[j].score=null;
                  }

                  else{

                    var playerArray= result.query.results.Scorecard.past_ings[0].d.a.t;
                    var playerIndex;

                    console.log('array length',playerArray.length);
                    console.log('player id',playerId);

                    for(i=0;i<playerArray.length;i++){


                      if(playerArray[i].i==playerId){

                       console.log("playerId is: ",playerArray[i].i);
                       console.log("player index is: ",i);

                       playerIndex=i;
                     }
                   }

                   console.log('playerIndex is:',playerIndex);


                   if(playerIndex>-1){
                     var code = result.query.results.Scorecard.past_ings[0].d.a.t[playerIndex].r;

                     list[l].players[k].match[j].score=code;
                   }else{list[l].players[k].match[j].score=null;}
                   console.log('value of j',j);
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
                
                console.log(i);
                console.log(j);
                console.log(k,playerId);
                if(!result.query.results.Scorecard.past_ings[1].d.a.t[playerIndex]){
                  list[l].players[k].match[j].score=null;
                }
                else{
                var code = result.query.results.Scorecard.past_ings[1].d.a.t[playerIndex].r;
                list[l].players[k].match[j].score=code;
               }
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
}, 780000);

}


};
module.exports = scoreUpdator;

