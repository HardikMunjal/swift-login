Js  <friday night>
DataStr  <saturday night>
Angular js  <sunday night>
Node js


It means that it runs on the V8 engine which is just a program that converts JS code into something the computer understand(machine code).
Spring is a freamework of java,

IOC(Dependency Injection concept)
DI is a concept which sys that we dont really connect our components and services together in the code, instead we manage these things
from a configuration file, constructor based ioc and setter based
AOP

well spring provides several annotations..which can help you to code quickly


@Controller
@REquestMapping 
@ResponseBody
@RestController= @ResponseBody + @RequestMapping



javascript closure
 
 IN javascript , if we use function keyword inside other function xyz, then function defined with function keyword is called closure

 In js functions, we return at the end, just to tell them that javascript function has finished its execution.
 js function executes only when we use () , 
 if we are defining function using var, then whole function is copied to variable and it will get its value only at runtime 
 	not at compile time

this
prototype

1:  Angular is a MVC framework, where we can manage our javascript code very easily..specially used in case of specially specially SPA.

2: 1st: Angular is downloaded to the browser, Js file is loaded..all the dependency made available to project then the main phase started
   ie. compilation phase, this angular scan html and find all the directives and process it, whenever angular finds any directives
   responsible for changing view then angular adds watcher over it..which checks for any change in the value of directives

   I angular uses scope for the communication between controller and view. ANgular knows that data stored in scope can only change
   in response to certain events..like service call, a user clicking on certain events. as soon as these events occurs ..angular trigers a digest
   cycle which checks that if thers is any change in value or not

   3: In angular factories are the function which returns the object, through which we can make them reusable components

   angular.module('app').factory('SomeService', function() {
    return {
        someFunction: function() {}
    };
});

When angular compiles ng-app, it creates rootscope instance,, then it create the variable for {{}}, then it compiles ng-controller
where scope instance is created ..then it applies or link value to variables

Scope.emit is used to pass scope data to parent
scope.broadcast is used to pass scope data from parent to child
scope.on is used to fetch data


 
1  :  $scope.emit( 'haha' , {id: xxx , data :sss}; 
 
 
2  :  $scope.$on('haha' ,function (event,obj) { 
 		$scope.broadcast( 'nana' , {id: obj.id , data :obj.data}; 
      }); 
 
 
3   : $scope.$on('nana' ,function (event,obj) { 
 		$scope.broadcast( 'nana' , {id: obj.id , data :obj.data}; 
      });   

      $scope.emit('test',{mydata});

      $scope.on('test',function(event,obj){
      })



  var myApp = angular.module('testApp',['','']);

  myApp.config(function($stateProvider, $urlRouterProvider ,$httpProvider){

     $httpProvider.defaults.withCredentials = true;
     $urlRouterProvider.otherwise("/sess_router")
     $stateProvider

            .state('sess_router', {
                url: '/sess_router',
                templateUrl : 'login/test.html',
                controller  : 'sessionController'
            })

  })