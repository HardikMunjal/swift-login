

// 1   Node js is a web application frameworkk built on google chrome V8 engine. Due to this we can run any piece of javascript code at any machine outside the web browser

// 2  Asynchronus api 
//    node js server never waits for an api to return data , it moves to serve next api and notification mechanism of events of node js helps to return data from privious api

// 3 BENEFITS
//   Asynchronus and events driven
//   single threaded : consume less memory and fast

// 4 No Buffering - Node.js applications never buffer any data. These applications simply output the data in chunks.

// •	A callback function is a function that is passed 
// to another function (in the form of a pointer to the 
// callback function) so that the second function can
// call it. This is simply of way of making the second 
// function more flexible without the second function needing 
// to know a lot of stuff

// Uses:
// •	A callback can be used for notifications
// •	callback functions can be used for updates, sort of 
// like hooking into another function. For example, consider a 
// function that downloads files using http. Your application 
// may want to display progress to the user. You could pass a 
// callback function (display progress) into the download 
// function so that it calls your display function everytime 
// it reads from the socket. At least that is my 
// understanding... 



// let take the case of node

// mai kisi api se model me call krta hun kisi function ko to mai usk parameter me 1 callback funct bhi bhej dunga, jo ki execute hoga
// model k us function me. mera vo callback function 2 parameter leta hoga .. err aur result jyadatar cases me.
// to mera model ka function usko execute kr dega..agar error aati h to error parameter bhej gea ni to result.

// matlab ye h ki callback execute hoga model k function me... aur response bhi vhin se aaega lekin api vale function ko lag 
// rha hoga ki saala yahi se kuch jaadu ho rha hai.



// 2 kaam krne h ab, 1st request ka use krk code token vala krk dekhna hai

// 1 function jo dusre function se input lata hai...sochna pdega







//Good bad and the ugly


Node runs in single thread, this means that if we deploy application in a 8-core server, then we are wasting our money
because most of the CPU resource will not be used

IN node we can not run two parallel operation because it will not be able to run two actions at the same time


Node js shines is in building fast, scalable network applications as it is capable of handling a huge number of 
simuntaneously connection with high throughput

IMp: Compared to traditionallweb serving techniques where each request spawns a new thread,taking up system RAM
and eventually maxing out at the amount of RAM available

// Your approach to pick general patterns is wise. Sorting, searching, and even algorithms in general are CPU-bound. Of course, you can't eliminate CPU usage, but if you can make your database sort instead of your app code, you may be better off.

// I would also keep an eye out for large loops. A loop that doesn't fire any asynchronous events is a bottleneck. Of course, one cannot entirely avoid loops. They are a fact of life for programming. If your loops are short, then no problem. If you find a loop that runs 10,000 times, you may want to consider breaking it up using setTimeout, process.nextTick, or a separate node process.

// 10,000 was picked arbitrarily. It depends on what the loop does. Your milage may vary.


A quick calculation: assuming that each thread potentially has an accompanying 2 MB of memory with it, running on a system with 8 GB of RAM puts us at a theoretical maximum of 4000 concurrent connections, plus the cost of context-switching between threads. That’s the scenario you typically deal with in traditional web-serving techniques. By avoiding all that, Node.js achieves scalability levels of over 1M concurrent connections (as a proof-of-concept).

There is, of course, the question of sharing a single thread between all clients requests, and it is a potential pitfall of writing Node.js applications. Firstly, heavy computation could choke up Node’s single thread and cause problems for all clients (more on this later) as incoming requests would be blocked until said computation was completed. Secondly, developers need to be really careful not to allow an exception bubbling up to the core (topmost) Node.js event loop, which will cause the Node.js instance to terminate (effectively crashing the program).

However, a piece of CPU-bound code in a Node.js instance with thousands of clients connected is all it takes to block the event loop, making all the clients wait. CPU-bound codes include attempting to sort a large array, running an extremely long loop, and so on. For example:

If this array of users was being retrieved from the database, the ideal solution would be to fetch it already sorted directly from the database. If the event loop was being blocked by a loop written to compute the sum of a long history of financial transaction data, it could be deferred to some external worker/queue setup to avoid hogging the event loop.








setTimeout(fn, delay) calls the given callback fn after the given delay has ellapsed (in milliseconds). However, the callback is not executed immediately at this time, but added to the function queue so that it is executed as soon as possible, after all the currently executing and currently queued event handlers have completed. Setting the delay to 0 adds the callback to the queue immediately so that it is executed as soon as all currently-queued functions are finished.

setImmediate(fn) achieves the same effect, except that it doesn’t use the queue of functions. Instead, it checks the queue of I/O event handlers. If all I/O events in the current snapshot are processed, it executes the callback. It queues them immediately after the last I/O handler somewhat like process.nextTick. This is faster than setTimeout(fn, 0).


question 2: what is callback



RabbitMQ

*// Very IMportant

http://typedarray.org/concurrency-in-javascript/

Javascript use web workers to maintain concurrency or to run heavy computing task in seperate thread.
similarly node js use child process to execute their callbacks




Why Threads
Threads (kernel threads) are very interesting creatures. They provide:

1.- Parallelism: All the threads run in parallel. On a single core processor, the CPU is switched rapidly back and forth among the threads providing the illusion that the threads are running in parallel, albeit on a slower CPU than the real one. With 10 compute-bound threads in a process, the threads would appear to be running in parallel, each one on a CPU with 1/10th the speed of the real CPU. On a multi-core processor, threads are truly running in parallel, and get time-sliced when the number of threads exceed the number of cores. So with 12 compute bound threads on a quad-core processor each thread will appear to run at 1/3rd of the nominal core speed.

2.- Fairness: No thread is more important than another, cores and CPU slices are fairly distributed among threads by the OS scheduler.

3.- Threads fully exploit all the available CPU resources in your system. On a loaded system running many tasks in many threads, the more cores there are, the faster the threads will complete. Automatically.

4.- The threads of a process share exactly the same address space, that of the process they belong to. Every thread can access every memory address within the process' address space. This is a very appropriate setup when the threads are actually part of the same job and are actively and closely cooperating with each other. Passing a reference to a chunk of data via a pointer is many orders of magnitude faster than transferring a copy of the data via IPC.

Why not multiple processes.
The "can't block the event loop" problem is inherent to Node's evented model. No matter how many Node processes you have running as a Node-cluster, it won't solve its issues with CPU-bound tasks.

Launch a cluster of N Nodes running the example B (quickIntro_blocking.js) above, and all you'll get is N -instead of one- Nodes with their event loops blocked and showing a sluggish performance.






You can create threads to handle CPU intensive tasks using node module called node-threads-a-gogo which makes thread synchronization pretty easy by message passing mechanism.

Node being single threaded process can't leverage multiple CPUs, for which node cluster is highly recommended.



JavaScript is single threaded so any particular callback will run on it's own and will run until completion without interruption (ignoring ES6 generators).

Of course you can spawn multiple node processes using the cluster API and then it's possible that the same callback runs in parallel on two different processes.
But that doesn't really matter because those two processes use their own v8 instance and their own node event loop.


"""""""


I am using node.js to write a web service, it calls an API for some data but I am limited by the API to a number of calls per month, so I wish to cache the data I retrieve from the API so I can serve it up with the cached data, and re-fetch the data from the API at a timed interval.

Is this a good approach for this problem? And what caching framework should I use? I looked at node-redis but I don't think a key value store is appropriate for the data.



28
down vote
accepted
I would disagree with you regarding Redis. Redis is a very powerful key-value store that can easily be used for what you want. It is designed to have stuff dumped in it and taken out again. In your situation, you can easy cache the API response by saving it into Redis with the query as the key (if this is a REST API you're calling, you could just use the URL or serialized data as the key) and simply cache the response as a stringified JSON object (or XML string if you happen to be getting that).

You can also set an expiry on the cached data, and it will be cleared when the time is expired.

You could then wrap your API call in a helper function which checks the cache, and returns the value if it's present. If it's not it makes the API request, adds it to the cache, then returns it.



push notification


sachin ka koi abhi friend nhi hai..agar koi sachin ko friend request bhejta hai to sachin ko bar bar page kholne ki jrurat nhi hai..push notification  se kaam ho jaega

var sachinfriend = ['hardik'];

Riddhi sent request

n1 : i will send notification to sachin about his new friend  dateTime




************************************************************
var abc ={a:'5',b:'6'};

console.log(Object.keys(abc));




The values are sent in the request body, in the format that the content type specifies.

Usually the content type is application/x-www-form-urlencoded, so the request body uses the same format as the query string:

parameter=value&also=another
When you use a file upload in the form, you use the multipart/form-data encoding instead, which has a different format.





	
It looks like people answered the first part of your question (use application/json).

For the second part: It is perfectly legal to send query parameters in a HTTP POST Request.

Example:

POST /members?id=1234 HTTP/1.1
Host: www.example.com
Content-Type: application/json

{"email":"user@example.com"}
Query parameters are commonly used in a POST request to refer to an existing resource. The above example would update the email address of an existing member with the id of 1234.

	
The example POST request is perfectly legal, but harder to support than it should be (because people who write HTTP servers expect HTTP POST to always be one of application/x-www-form-encoded or multipart/form-data, because getting web browsers to use anything else requires some tricky javascript)




The first case is telling the web server that you are posting JSON data as in:

{ Name : 'John Smith', Age: 23}
The second option is telling the web server that you will be encoding the parameters in the URL as in:

Name=John+Smith&Age=23

























