const perso = document.getElementById("person");
const work = document.getElementById("work");
const score = document.getElementById("score");


document.addEventListener("keydown", function(event) {
	jump();
});
function jump (){
	if (person.classList !="jump") {
		person.classList.add("jump")
	}
	setTimeout(function() {
		person.classList.remove("jump")
	},400 )
};

setInterval( ()=>{ 

	score.innerText++;
	let personTop = parseInt(window.getComputedStyle(person).getPropertyValue("top"))
	let workLeft = parseInt(window.getComputedStyle(work).getPropertyValue("left"))
	
	console.log(workLeft)
	if ( workLeft<280  &&  personTop>=300) {
		alert("GAME OVER !! "+" You a score of = "+ score.innerText);
		location.reload();
	} 
},10);




