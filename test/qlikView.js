Datastructures
Javascript : Express js/nodejs, Angular js
Database : Mysql , Redis
Oauth2.0
Visualization : D3

Java/Spring Mvc : SPring Roo 



Qlik Sense offers two different approaches to develop visualization extension.



Qlikview EXtension Object

Well it allows us to create charts using HTML and javascript. Our charts can use data from qlikview and it can pass click events back to Qliview

During integration, we cant use all the features of Angularjs in qliksense objects

Concepts which can be used

1 Directives
2 Templates
3 Filters
4 Re-using AngularJS internal methods
5 Data-binding
6 The entire scope concept


define a template + a controller in your main JavaScript file:

define( [
    ],
    function (  ) {
        'use strict';

        return {
            definition: {},
            initialProperties: {},
            snapshot: {canTakeSnapshot: true},
            template: '<div qv-extension>This is my message: <b>{{msg}}</b></div>',
            controller: ['$scope', function ( $scope ) {
                $scope.msg = 'Hello AngularJS';
            }]
        };
    } );


The following files are mandatory when creating a Qlik Sense Extension:

1:Main script file
2:Extension meta data file (.qext)

In addition to the mandatory files an extension project may certainly have one or more of the following complementary file-types:

External scripts
Style sheets (.css files)
Images, icons and fonts
and other resources ...



********************************************************************************************88888

One of the features of Qlik Sense which I get really excited about is the ability to integrate Qlik Sense objects into responsive websites

This allows a Qlik Sense developer to present objects in very different ways and to get very creative in how users interact with the visualisations.



The concept of extensions in general can also be seen as a plugin-mechanism which allows developers to combine the power of Qlik Sense’ APIs with the nearly unlimited capabilities of the web.



Skeleton of a script file

This is the basic skeleton of a script file for a visualization extension for Qlik Sense:

define( [ /* dependencies */ ],
    function ( /* returned dependencies as arguments */ ) {
        'use strict';
        return {

            // Paint resp.Rendering logic
            paint: function ( $element, layout ) {
                // Your rendering code goes here ...                
            }
        };
    } );


define is a concept introduced by RequireJS to define dependencies in your JavaScript files.
 The idea is to load external dependencies before your main script gets executed

 $element	jQuery wrapper containing the HTML element where the visualization should be rendered.
layout	Data and properties for the visualization.


.quest file has the meaning for each components

https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/part-01/03-Lets-Get-Started--Hello-World-Example.md

//you need to check how to play with dom in angular




Here you will see that, about paint method... This method will always be called when the visualization should be rendered, and a resize triggers the paint. So in fact we are appending a new $helloWorld object to $element on every resize.

but there are various ways to solve This


Even when developing using Qlik Sense Desktop you can use your favorite browser for debugging purposes at the same time:

Open Qlik Sense Desktop (and leave it opened)
Open your favorite browser and open http://localhost:4848/hub


***********************************************************************

Now create Hello World more dynamic

Changing the behavior by using the property panel:
  Define the text displayed (not a hard coded "Hello World" anymore)
Create a preview image to be displayed when clicking on the object in (left) object panel


* When building Visualization Extensions it is essential that a non developer can use and configure the object like any other native object of Qlik Sense
Therefore you can define which properties are exposed to the user in the (right) property panel and add additional custom properties which can then be used in your code.






here are two ways of embedding the Qlik Sense content:

iFrame integration using the App Integration or the Single Integration API
Div integration using the Capability APIs