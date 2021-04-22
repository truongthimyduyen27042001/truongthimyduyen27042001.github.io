

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
  let settingColor=document.querySelector("#setting-color")
  settingColor.style.transition="0.5s"
  if(x<50){
    settingColor.style.left="0%"
  }
  if(x>200){
    settingColor.style.left="-17%";
  }
 
}
// kiểm soát phần contact small
function showSmallContact(){
  let contact=document.querySelector("#small-contact")
  let bodi=document.querySelector(".container");

  contact.style.transition="0.5s";
  contact.style.right="0%"
  bodi.style.transition="0.5s"
  bodi.style.backgroundColor="#000"
  bodi.style.opacity="0.7"
  
}
// Tắt phần contact small 
function closeSmallContact(){
  let contact=document.querySelector("#small-contact")
  let bodi=document.querySelector(".container");

  contact.style.transition="0.5s";
  contact.style.right="-30%"
  bodi.style.transition="0.5s"
  bodi.style.backgroundColor="var(--bg-color)"
  bodi.style.opacity="1"
}
// 0.5px solid rgb(109, 99, 99
//Thay đổi màu cho phần header khi trượt xuống 
window.addEventListener('scroll',function (e){
  var test=document.querySelectorAll(".headerItem")
  let btnSetting=document.querySelector("#setting-menu")
  test.forEach(function(item){
    item.style.color="var(--headerafter-color)"
    btnSetting.style.color="var(--headerafter-color)"
    btnSetting.style.border="0.5px solid rgb(221, 210, 210)"
  })
  if(window.scrollY==0){
    test.forEach(function(item){
      item.style.color="var(--headerbefore-color)"
      btnSetting.style.color="var(--headerbefore-color)"
      btnSetting.style.border=" 0.5px solid rgb(109, 99, 99)"
    })
  }
})


