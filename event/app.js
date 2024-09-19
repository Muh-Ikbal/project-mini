const button = document.querySelector('#clickme');

button.onclick = function (){
	console.log("You clicked me	")
}

// button.onmouseover = function (){
// 	console.log("don't touch me")
// }

const scream = () =>{
	console.log("don't touch me")
}

button.onmouseover = scream;

const eventBtn = document.querySelector('#eventbtn');

// eventBtn.addEventListener('click',()=>{
// 	alert("you clicked me")
// })

eventBtn.addEventListener('click',stepSatu)
eventBtn.addEventListener('click',stepDua)
function stepSatu(){
	console.log("step satu")
}

function stepDua(){
	console.log("step dua")
}
// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;
