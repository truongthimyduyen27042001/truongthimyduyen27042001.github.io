console.log("$$$$")

let chooseColor=document.getElementById("setting-color")
console.log(chooseColor)
function setColorFunction(event){
   
    var x = event.clientX;
    console.log(x)
   if(x>200) {
    chooseColor.style.transition="0.5s"
    chooseColor.style.transform="translateX(-80%)"
   }
    else {
    chooseColor.style.transition="0.5s"
    chooseColor.style.transform="translateX(0%)"
    console.log("hello")
    }
}