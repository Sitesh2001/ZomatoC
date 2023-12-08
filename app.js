let logbtn = document.getElementById("logbtn");
let form = document.querySelector(".form");
let cross = document.querySelector(".cross");
let log = true

cross.onclick = ()=>{
    form.style.display = "none";
    document.body.style.background = `transparent`
    log = true
}

logbtn.addEventListener("click",()=>{
    if(log){
        form.style.display = "block";
        document.body.style.background = `rgba(133,122,122,1)`
        log = false
    }
    else{     
        form.style.display = "none";
        document.body.style.background = `transparent`
        log = true
    }
})