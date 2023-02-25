const snake=document.getElementById('snake')
const apple=document.getElementById('apple')

function moveRect(e){

let wh = window.getComputedStyle(snake);

let left = parseInt(wh.marginLeft);
let top = parseInt(wh.marginTop);

while(){

}
switch(e.key){
case "ArrowLeft":
if(left>-1)
snake.style.marginLeft = left - 5 + "px";
break;
case "ArrowUp":
if(top>-1)
snake.style.marginTop = top - 5 + "px";
break;
case "ArrowRight":
if(left < 521)
snake.style.marginLeft = left + 5 + "px";
break;
case "ArrowDown":
if(top < 521)
snake.style.marginTop = top + 5 + "px";
break;
}
}

addEventListener("keydown", moveRect);

setInterval( ()=>{

	let wh = window.getComputedStyle(snake);

	let left = parseInt(wh.marginLeft);
	let top = parseInt(wh.marginTop);
	
	console.log(top)
	console.log(left)
	if ( left>520 ) {
		console.log('gg');
	}
	if ( left<0 ) {
		console.log('gg');
	}
	if ( top>520 ) {
		console.log('gg');
	}
	if ( top<0 ) {
		console.log('gg');
	}
	},100);
	
