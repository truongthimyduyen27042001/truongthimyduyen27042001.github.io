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

///Làm phần trượt chỗ navbar 
// const sections = document.querySelectorAll("section")
// console.log(sections)
// const navLi=document.querySelectorAll(".menu-nav ul li")
// console.log(navLi)

// window.addEventListener("scroll",()=>{
//     let current="";
    
//     // sections.forEach(section=>{
//     //     const sectionTop = section.offsetTop;
//     //     const sectionHeight = section.clientHeight;
        
//     //     if(pageYOffset-1000>=sectionTop){
//     //         current=section.getAttribute("id");
//     //     }
//     // })
//     // navLi.forEach(li=>{
//     //     li.classList.remove("active");
//     //     if(li.classList.contains(current)){
//     //         li.classList.add("active");
//     //     }
//     // })
   
// })
// window.addEventListener("scroll",()=>{
//     console.log("start")
//     console.log(pageYOffset);
// })

//dung thuoc tinh xoa
// let menuItem = document.querySelectorAll(".menu-nav ul li span")
// menuItem.forEach(item=>{
//     item.classList.remove("active");
//     console.log("da delete")
// })


// thu nghiem
// window.addEventListener("scroll",()=>{
//     console.log("start")
//     let por=document.getElementById("porfolio")
//     let x=por.offsetTop;
//     console.log("offset cua porfolio")
//     console.log(x);
//     console.log("offpageY")
//     console.log(pageYOffset)
// })


console.log("@@@@")