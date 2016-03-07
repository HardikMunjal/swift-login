//callback function is a function, which is passeed as parameter to another function
//there are some basic rules when we use callbacks

•	 Use named or anonymous functions as callbacks
•	 Pass parameters to callback functions
•	 Make sure callback is a function before executing it


//how to keep away from callback hell
Here are the quick reminders for callback hell:
•	 Never let your function be unnamed. Give your function an understandable
and meaningful name. The name must show it's a callback function that is
performing certain operations instead of defining an anonymous function
in the parameter of the main function.
•	 Make your code less scary to look at and easier to edit, refactor, and hack
on later. Most of the engineers write code in a flow of thought with less
focus on beautification of code, which makes it difficult to maintain
the code later. Use online tools such as http://www.jspretty.com to
add readability to your code.
•	 Separate your code into modules; don't write all your logic in a single
module. Instead, write short meaningful modules so that you can export
a section of code that does a particular job. You can then import that module
into your larger application. This approach can also help you reuse the code
in similar applications, thus making a whole library of your modules.


The events
Events are signals that are generated when a specific action takes place.
Any event is useless if it doesn't have a handler that works to handle events.

The single-threaded model of JavaScript has its limitation, which can be controlled through
better use of callbacks.

The
single-threaded model of JavaScript has its limitation, which can be controlled through
better use of callbacks. However, the scenarios such as callback hell really pushed
engineers to find and implement a better way to control the callbacks and maximize
the performance of the program, while staying inside a single thread

There is absolutely no harm in using callbacks, but there are also a number of other
options available to handle asynchronous events. Promise is one such way to handle
asynchronous events and has more efficiency than many of other asynchronous tools
in its family.


The
problem was making a browser know how much time is left for an upload process.

The callback approach is known as the inversion of control, a function that is capable
of accepting a callback rather than returning a value. Such a mechanism can more
easily be described as the phrase, Don't call me, I will call you.