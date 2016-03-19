var obj1 = { data: [ 
	{id:1, comment:"comment1"},
	{id:2, comment:"comment2"},
	{id:3, comment:"comment3"}
	] }

	var obj2 = { data: [ 
		{id:2, comment:"comment2"},
		{id:3, comment:"comment3"},
		{id:4, comment:"comment4"}
		] }


		var final = { data: [ 
			{id:1, comment:"comment1"},
			{id:2, comment:"comment2"},
			{id:3, comment:"comment3"},
			{id:4, comment:"comment4"}
			] }



			var obj3=[];

			for(i=0;i<obj1.data.length;i++){


				for(j=0;j<obj2.data.length;j++){


					if(obj1.data[i]==obj2.data[j]){
						console.log('haha');
					}

				}

   	// obj3.push({id:obj1.data[i][select]});

   }
   console.log(obj3);


// function extend(obj, src) {
//     for (var key in src) {
//         if (src.hasOwnProperty(key)) obj[key] = src[key];
//     }
//     return obj;
// }

// // example
// var a = { foo: true }, b = { bar: false };
// var c = extend(a, b);

// console.log(c);
// // { foo: true, bar: false }



var obj1 = { food: 'pizza', car: 'ford' }
var obj2 = { animal: 'dog' }

function merge_options(obj1,obj2){
	var obj3 = {};
	for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
			console.log(obj3);
		return obj3;
	}
	merge_options(obj1,obj2);





	var school =[{
		id:'1222',
		name:'DAV'
	},
	{
		id:'1224',
		name:'Dayanand'
	}];



	var teacher=[{
		id:'1222',
		name:'rachna'

	},
	{
		id:'1222',
		name:'sunita'
	},
	{
		id:'1224',
		name:'kanta'
	}];

	var student=[{
		name:'hardik',
		teacher:'rachna'

	},
	{
		name:'shivika',
		teacher:'rachna'

	},
	{
		name:'shivika',
		teacher:'sunita'

	},
	{
		name:'riddhi',
		teacher:'kanta'

	}];



	var schoolTeachers =[{
		id:'1222',
		name:'DAV',
		teacher:[{
			id:'1222',
			name:'rachna'

		},
		{
			id:'1222',
			name:'sunita'
		},
		{ 
			id:'1224',
			name:'sunita'}
			]
		},

		{
			id:'1224',
			name:'Dayanand',
			teacher:[{
				id:'1222',
				name:'rachna'

			},
			{
				id:'1222',
				name:'sunita'
			},{
				id:'1224',
				name:'sunita'}]
			}];


// certified

//push complete object into array
// var myArray = [];

// myArray.push({ id: 0, value: 1 });
// myArray.push({ id: 2, value: 3 });


//.. my certify
// var schoolT=[];

// 	for(i=0;i<school.length;i++){
// 		var arr={};
// 		var troubleArr={};
// 		var trouble=[];
// 		for(var text in school[i]){


// 			if (text=='id'){
//             //schoolT.push({id:school[i][text]})

//             arr.id=school[i][text];
//             //schoolT.push(arr);


//         for(j=0;j<teacher.length;j++){
//         	if(teacher[j].id==school[i][text]){
//                trouble.push(teacher[j]);
//         	}
//         }

//         }
//         if (text=='name'){
//             arr.name=school[i][text];

//         }


// 		}
//         arr.teacher=trouble;
// 		schoolT.push(arr);
// 	}
// 	console.log(schoolT);
// 	console.log(schoolT[0].teacher);
// 		console.log(schoolT[1].teacher);



var schoolT=[];

for(i=0;i<school.length;i++){
	var arr={};
	var troubleArr={};
	var trouble=[];
	var teacherFinalArray=[];
	for(var text in school[i]){


		if (text=='id'){
            //schoolT.push({id:school[i][text]})
            
            arr.id=school[i][text];
            //schoolT.push(arr);


            for(j=0;j<teacher.length;j++){
            	if(teacher[j].id==school[i][text]){
            		troubleArr=teacher[j];
	               //trouble.push(teacher[j]);

	               for(k=0;k<student.length;k++){

	               	if(student[k].teacher==teacher[j].name){
	               		teacherFinalArray.push(student[k].name)
	               	}
	               	console.log(teacher[j].name + teacherFinalArray )


	               }

               troubleArr.student=teacherFinalArray;

               trouble.push(troubleArr);
               teacherFinalArray=[];
               troubleArr={};

           }
       }

   }
   if (text=='name'){
   	arr.name=school[i][text];

   }


}
arr.teacher=trouble;
schoolT.push(arr);
}
console.log(schoolT);
console.log(schoolT[0].teacher);
console.log(schoolT[1].teacher);



var xxx=[];

var ass={};

ass.id='haha';
ass.name='chuchu';

xxx.push(ass);
console.log(xxx);