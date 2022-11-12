let arr=['0','1','2','3','4','5','6','7','8','9'];
let arr2=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr4=['_','-','.'];

document.getElementById('lenth').oninput = function ()
{
	document.getElementById('number').innerHTML= this.value;
}

document.getElementById('generat').onclick = generationPass;

function generationPass(){
	let arr0=[];

	if (document.getElementById('exampleCheck1').checked){
		arr0=arr0.concat(arr)
	}

	if (document.getElementById('exampleCheck2').checked){
		arr0=arr0.concat(arr2)
	}

	if (document.getElementById('exampleCheck3').checked){
		arr0=arr0.concat(arr3)

	}

	if (document.getElementById('exampleCheck4').checked){
		arr0=arr0.concat(arr4)

	}
	arr0.sort(()=>Math.random()-0.5)


let pas='';
let paslenth= parseInt(document.getElementById('lenth').value)

for (let i=0; i<paslenth; i++){

	pas += arr0[randomIneger(0, paslenth-1)]
}
console.log(pas);
function randomIneger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.getElementById('password').innerHTML += '<p>' + pas+'</p>';}