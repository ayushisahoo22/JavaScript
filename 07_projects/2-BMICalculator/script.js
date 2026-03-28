let home=document.querySelector("button");
let height=document.getElementById("height");
let weight=document.getElementById("weight");
let calc_btn=document.getElementById("calc");
let res=document.getElementById("result");

home.addEventListener("click",()=>{
    window.location.href="../index.html";
});
 function calculate_bmi(h,w){
    return (w/(h*h))*10000;
};
calc_btn.addEventListener("click",()=>{
    let h=Number(height.value);
    let w=Number(weight.value);
    res.classList.add("error");
    if(height.value==="" || weight.value===""){
        res.textContent="Fields can't be empty"
        return;
    }
    if(!Number.isFinite(h) || !Number.isFinite(w) || h<=0 || w<=0){
        res.textContent="Enter valid positive number"
        return;
    }
    if(h<100 || h>250){
        res.textContent="Enter valid height b/w 100cm - 250cm";
        return;
    }
    if(w<10 || w>200){
        res.textContent="Enter valid weight b/w 10kg - 200kg";
        return;
    }
    res.textContent="";
    let r=calculate_bmi(h,w);
    let msg="";
    if(r<18.6){
        msg="Under Weight";
    }else if(r>=18.6 && r<24.9){
        msg="Normal weight";
    }else{
        msg="Overweight";
    }
    res.classList.remove("error");
    res.textContent=`BMI: ${r.toFixed(1)} (${msg})`
})

height.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        e.preventDefault();
        weight.focus();
    }
})

weight.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        e.preventDefault();
        calc_btn.click();
    }
})