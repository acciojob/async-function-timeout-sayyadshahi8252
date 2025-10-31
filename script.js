//your JS code here. If required.
let button=document.getElementById("btn")
btn.addEventListener("click",async()=>{
	let textdata=document.getElementById("text").value.trim();
	let numberdata=document.getElementById("delay").value.trim();
	let output=document.getElementById("output")
	await new Promise(resolve => setTimeout(resolve, numberdata));
  output.innerText = textdata;

})