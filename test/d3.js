download d3 from some source
unzipped it, we will get d3.v3.js and d3.v3.min.js  < for development  we should use d3.v3.js as we can debug under this library>

in html head first use : 

<meta charset="utf-8">

as d3 uses certain symbols of utf8,else our browser will not be able to load d3 elements

then include d3 cdn

d3.select('body').append('h1').text('Hello World!');

SElections and Data binding

Selectors are objects that represent collections (or sets) of DOM element

.foo select every DOM element that has class foo
#foo select every DOM element that has id foo
div.foo select all the <div> tags that have class foo
div#foo select all the <div> tags that have id foo
div .foo select every DOM element that has class foo that’s inside a <div> tag
div #foo select every DOM element that has id foo that’s inside a <div> tag
div p .foo select every DOM element that has class foo that’s inside a <p> tag
that’s inside a <div> tag


attr
Another selector method that operates almost identically to style() is attr().

d3.selectAll('div')
 .attr('width', '100%');




 ex1 

 <style>
 .bar{
 height: 10px;
 background-color: blue;
 border-bottom: 1px solid white;
 }
 </style>

 <div class="bar"></div>
 <div class="bar"></div>
 <div class="bar"></div>

 var data = [10, 30, 60];
 d3.selectAll('.bar').data(data)
 .style('width', function(d){
 return d + '%';
 });


here this is static, but what if we dont know how many bars we should create? 


To summarize, we can use .enter() and .append() to create new DOM elements

we don’t need to have them hard coded in the <body> tag


var data = [10, 30, 60];
 d3.select('body').selectAll('.bar').data(data)
 .enter().append('div')
 .style('width', function(d){ return d + '%'; })
 .attr('class', 'bar');


 d3.range(3) returns the
array [0, 1, 2] d3.range(4) return the array [0, 1, 2, 3],


If we do not include the first line of d3.select('body'), D3 won’t know where to place
our elements, so it picks the topmost DOM element (or the root element), which is the
<html> element


SVG
in html svg tag is used to create scalable vector graphics, 

circle
<body>
 <svg>
 <circle cx="223" cy="83" r="54"/>
 <circle cx="83" cy="83" r="54"/>
 <circle cx="152" cy="125" r="16"/>
 </svg>
</body>

here cx and cy are the x-y coordinates

Note These are not HTML properties(cx,cy,r) we’re using. They are properties specific to circles and not
other SVG shapes (like rectangles) or other HTML elements 

EClipse
<ellipse cx="50" cy="50" rx="40" ry="20">
 </ellipse>

 rectangles
 <rect x="100" y="15" width="150" height="150"></rect>

 line
 <line x1="10" y1="10"
 x2="100" y2="100"
 stroke="blue"
 stroke-width="100"></line>

 Path
 <path d="M 100 50 L 300 50 L 200 150 z"/>

 This tell that first move to this x,y coordinates then create line to spcified coordinated and z stands to meet that line to the origin

 text

 svg has its own text element because we cant easily use html elements into svg

 <text x="100" y="100" fill="green" font-family="arial" font-size="16">
 Ceci nest pas une pipe.
 </text>


The <g> tag is an easy way to group SVG elements. Any transformations (positioning, scaling,
rotating) that are applied to the group element will also be applied to each of the child elements.

example:::::

<!DOCTYPE HTML>
 <html>
 <head>
 <style>
 svg path {
 stroke: red;
 stroke-width: 30px;
 fill: white;
 }
 svg text {
 font-size: 30px;
 font-family: sans-serif;
 fill:red; /* not `color` or `font-color` */
 }
 </style>
 </head>
 <body>
	<svg>
	  <path d="M 30 20 L 140 200 L 240 20 z"></path>
	  <text x="95" y="80">YIELD</text>
	</svg>
</body>
</html>



TRansformation in SVG http://tutorials.jenkov.com/svg/svg-transformation.html

D3 with Angular

//
THere are lot of reason to create visualization using angular but tha main is directive, it makes easier to create reusable components

<pie-chart></pie-chart> like this

there are also lot of reason like we can use ng-switch to conditionally show visualization

<div ng-switch on="selection">
 <div ng-switch-when="pie">
 <pie-chart></pie-chart>
 </div>
 <div ng-switch-default>
 <bar-chart></bar-chart>
 </div>
 </div>







 master  > do changes (test)
 Production