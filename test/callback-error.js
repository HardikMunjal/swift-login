var fs = require("fs");

//NODE JS Error Handling Solution

console.log("Going to open file!");
fs.open('../../../seedap', 'r', function(err, fd) {
   if (err) {
        console.error(err);
        return;
   }
  console.log("File opened successfully!");     
});




//login page   email,  mobile no. , password dala ... pehle frontend validate kra
//usk baad backend me email ya mobile se password nikala..agar match hota hai aur status 1 hai to api se userdetails<role> send kri aur backend me session bna diya
//agar galat hota h to error de denge

//ab frontend se vo response lekar localstorage me save kr dena h

//fer frontend me logout ka button jo pehle frontend me fer backend me logout krega jo fer success ya failure return  krega

// user apni sari details dekh skta hai ur edit bhi kr skta hai
// frontend pe ek section <dropdown> hoga jo sirf admin dekh skta hai... vo sab users ko dekh skta hai unka created time bhi
//unka status deactivate kr skta hai
//admin role change kr skta hai
// backend me bhi admin ki api ka validation hoga 


// movie table

//movie id
//movie name
//photo
//movie type
//movie description


//actor_table

//actor_id
//name
//gender
//age


//movie_actor_table
//movie_id
//actor_id



//movie_id
//rating
//user_id



//group_id
//group_name
//group_admin


//group_id
//user_id



//users in groups who have particular movie
//group_id
//movie_id
//user_id



//movie_taker_description

//user_id
//movie_id
//movie_quality
//movie_size
//subtitles boolean
//subtitles lang


//movie messenger
//movie_id
//user_id
//group_id
//message


****************
//Old way of doing things

suppose we have to read something from the filesystem

$file = fopen('info.txt', 'r');
// wait until file is open
$contents = fread($file, 100000);
// wait until contents are read
// do something with those contents


If you were to analyze the execution of this script, you would find that it spends a vast major-
ity of its time doing nothing at all . Indeed, most of the clock time taken by this script is spent
waiting for the computer’s file system to do its job and return the file contents you requested.