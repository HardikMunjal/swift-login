
function bhenc(){
	this.name='hardik';
	console.log(this);
}

bhenc();

(function(){
console.log(this.name);
})()
