
window.onload = function (){
 var navBurger = document.getElementById('mobileNav');
 navBurger.addEventListener('click',clickFunction);
}
window.onresize = () =>{
    document.getElementById('mobileNavDiv').style.cssText = "display:none;";
    ruchag = false;
}
var ruchag = false;
function clickFunction(){
    if(ruchag == false){
        document.getElementById('mobileNavDiv').style.cssText = "display:block;";
        ruchag = true;
    }
    else if(ruchag == true){
        document.getElementById('mobileNavDiv').style.cssText = "display:none;";
        ruchag = false;
    }

}
