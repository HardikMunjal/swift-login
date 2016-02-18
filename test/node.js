Node js runs on the single threaded architecture..
 it seems like that this is a non scalable architecture, but no...this is totally scalable

 We just have to run different Node.js processes and use a load balancer that
distributes the requests between them.


Ryan eventually took the Chrome V8 runtime and an event-processing library called libev, and came up with the first
versions of a new system called Node.js.

Node runs in a single
process, and your code executes largely in a single thread, so the resource requirements are
much lower than for many other platforms.


*********debugging*************
 node debug app.js

 cont : cont till debugger
 next : next statement
 repl : start the node repl to view variables