

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

























