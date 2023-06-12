

let navside = document.getElementById("navside")
let menubar = document.getElementById("menubar")
navside.style.width="0px";
menubar.onclick=function(){
    if (navside.style.width=="0px") {
        navside.style.width="180px";
    }
    else{
        navside.style.width="0px"
    }
}