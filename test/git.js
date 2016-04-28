git version control  team purpose


sudo apt-get install git-core

$ git config --global user.name "Your Name Comes Here"
$ git config --global user.email you@yourdomain.example.com

git config --list



user 1 after changes push to ==> server(git)
user 2 will fetch ==> 



test environment: 

go to the folder where you want to put your project.
git clone psslass11113@192.168.1.54:/home/psslass11113/hardi/yesbro.git


then project will be added there.
git branch (IN starting we will work only on master : after some time..when you get familiar we will use branches and reviewing based system )


git status will show your changed files
first we will add in temporary staging area (git add index/)


 *  No one will ever send Node Modules  in  < git add . >   *

 whenever you add any dependency in project ( use npm install () --save)  and then verify is it added in package.json


after this now we will permanently add these changes

git commit -m 'well defined message'


git push origin master

here origin is automatically set,when we do git clone



take pull before starting any work 

git pull --rebase origin master

if two guys has change on same file and same functionality then auto merging will fail

we will see this type of error 

Failed to merge in the changes.

// <<<<<<< HEAD
// 	console.log('this will shock you bro');
// =======
// 	console.log('this will fuck you bro');
// }
// >>>>>>> oh bc
// }


THen resolve it first, after that you will do

git status (will tell you the file names)

then do git add (filenames)

git rebase --continue


function test(){

	console.log('this will fuck you bro');

}






 
