let bodi=document.querySelector(".container");
let control=document.querySelector("#control")
let contact=document.querySelector("#small-contact")
let settingColor=document.querySelector("#setting-color")
var test=document.querySelectorAll(".headerItem")
var activetest=document.querySelector(".active")
let btnSetting=document.querySelector("#setting-menu")
let btnMenu=document.querySelector("#menu-reposive")
let menuItem=document.querySelector(".mobile-nav")
let icon1=document.querySelectorAll(".extend .icon1")
let extend=document.querySelector(".extend .icon")
function activeFunction(e) {
   var elems = document.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
  e.target.className = "active";
   
}
//Lam phan setting color 
function settingColorFunction(event){
  var x = event.clientX;
  console.log(x)
  settingColor.style.transition="0.5s"
  if(x<50){
    settingColor.style.left="0px"
  }
  if(x>50){
    settingColor.style.left="-250px";
  }
}
// kiểm soát phần contact small
function showSmallContact(){
  contact.style.transition="0.5s";
  contact.style.right="0%"
  bodi.style.transition="0.2s"
  bodi.style.backgroundColor="#000"
  bodi.style.opacity="0.7" 
  extend.classList.add("blackChange") 
}
// Tắt phần contact small 
function closeSmallContact(){
  let contact=document.querySelector("#small-contact")
  let bodi=document.querySelector(".container");
  contact.style.transition="0.8s";
  contact.style.right="-50%"
  bodi.style.transition="0.3s"
  bodi.style.backgroundColor="var(--bg-color)"
  bodi.style.opacity="1"
  extend.classList.remove("blackChange") 
}
// Kiểm soát phần menu-small-item
function closeMenuItem(){
  
  menuItem.style.transform=" translateX(100%)"
  menuItem.style.transition="0.5s"
  bodi.style.transition="0.3s"
  bodi.style.backgroundColor="var(--bg-color)"
  bodi.style.opacity="1" 
}
// Mở phần menuItem
function showMenuItem(){
  menuItem.style.transform="translateX(0%)"
  menuItem.style.transition="0.5s"
  bodi.style.transition="0.2s"
  bodi.style.backgroundColor="#000"
  bodi.style.opacity="0.7" 
}

// 0.5px solid rgb(109, 99, 99
//Thay đổi màu cho phần header khi trượt xuống 
window.addEventListener('scroll',function (e){
  if(window.scrollY>0){
    activetest.style.color="var(--headerafter-color)"
    test.forEach(function(item){
       item.style.color="var(--headerafter-color)"

    })
    btnMenu.style.border="0.5px solid rgb(221, 210, 210)"
    btnSetting.style.color="var(--headerafter-color)"
    btnSetting.style.border="0.5px solid rgb(221, 210, 210)"
  }
  if(window.scrollY==0){
    activetest.style.color="var(--headerbefore-color)"
    test.forEach(function(item){
       item.style.color="var(--headerbefore-color)"
     
    })
    btnMenu.style.border="0.5px solid rgb(109, 99, 99)"
    btnSetting.style.color="var(--headerbefore-color)"
    btnSetting.style.border=" 0.5px solid rgb(109, 99, 99)"
  }
})
//Đổi back thành màu đen 
function changeBlack(){
    control.style.right="0%";
    bodi.style.backgroundColor="#27292e"
    extend.classList.add("blackChange") 
}
//Đổi thành màu trắng 
function changeWhite(){
    control.style.right="50%";
    extend.classList.remove("blackChange")
    bodi.style.backgroundColor="var(--bg-color)"
}

//Đổi màu nên thành màu của item ??
function changerColor1(){
  document.documentElement.style.setProperty('--main-color', '#e83b35');
}
function changerColor2(){
  document.documentElement.style.setProperty('--main-color', '#e8676b');
}
function changerColor3(){
  document.documentElement.style.setProperty('--main-color', '#ec407a');
}
function changerColor4(){
  document.documentElement.style.setProperty('--main-color', '#8e45ae');
}
function changerColor5(){
  document.documentElement.style.setProperty('--main-color', '#673bb7');
}
function changerColor6(){
  document.documentElement.style.setProperty('--main-color', '#3f51b5');
}
function changerColor7(){
  document.documentElement.style.setProperty('--main-color', '#5d6cc1');
}
function changerColor8(){
  document.documentElement.style.setProperty('--main-color', '#1a77d4');
}
function changerColor9(){
  document.documentElement.style.setProperty('--main-color', '#07aaf5');
}
function changerColor10(){
  document.documentElement.style.setProperty('--main-color', '#56c8d2');
}
function changerColor11(){
  document.documentElement.style.setProperty('--main-color', '#27a79a');
}
function changerColor12(){
  document.documentElement.style.setProperty('--main-color', '#07cb79');
}
function changerColor13(){
  document.documentElement.style.setProperty('--main-color', '#8dc24c');
}
function changerColor14(){
  document.documentElement.style.setProperty('--main-color', '#ffde03');
}
function changerColor15(){
  document.documentElement.style.setProperty('--main-color', '#fec107');
}
function changerColor16(){
  document.documentElement.style.setProperty('--main-color', '#ff9801');
}
function changerColor17(){
  document.documentElement.style.setProperty('--main-color', '#d1a3a6');
}
function changerColor18(){
  document.documentElement.style.setProperty('--main-color', '#ffcfd3');
}
function changerColor19(){
  document.documentElement.style.setProperty('--main-color', '#fbbdd4');
}
function changerColor20(){
  document.documentElement.style.setProperty('--main-color', '#c7ccea');
}
function changerColor21(){
  document.documentElement.style.setProperty('--main-color', '#83d5fb');
}
function changerColor22(){
  document.documentElement.style.setProperty('--main-color', '#83d5fb');
}
function changerColor23(){
  document.documentElement.style.setProperty('--main-color', '#b4e1dc');
}
function changerColor24(){
  document.documentElement.style.setProperty('--main-color', '#a7d9a8');
}


// Thay đổi chỗ finally , nếu chuyển sang đen
