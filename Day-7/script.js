let button = document.getElementById("btn");

button.addEventListener("click" , ()=>{
    document.querySelector(".box").innerHTML = "<b> System faaaddd denge !!! </b>"
})

button.addEventListener("dblclick" , ()=>{
    document.querySelector(".box").innerHTML = "<b> Devanshu ka 50 LPA ka package lagega </b> bhaichara on top"
})

button.addEventListener("contextmenu" , ()=>{
    alert("Dont hack us by Right click please");
})

document.addEventListener("keydown" , (e)=>{
    console.log(e); // in this we have added the event to the whole document not just the button.
})
