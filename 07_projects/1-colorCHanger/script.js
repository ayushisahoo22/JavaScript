let boxes=document.querySelectorAll(".box");
let h=document.querySelector("button")

h.addEventListener("click",()=>{
    // .. → go one folder up
    // / → then go inside that folder to find file
    window.location.href="../index.html";   
})

boxes.forEach(box =>{
    //adding event for each box
    box.addEventListener("click",function(){  //can't use arrow func..they dont have 'this'
        let color=this.getAttribute("data-color");
        document.body.style.backgroundColor= color;
    });
})