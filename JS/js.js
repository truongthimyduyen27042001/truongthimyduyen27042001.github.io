// // $('button')
// //   .html('Click me') // Try edit it...
// //   .on('click', () => console.log('Hi friend!'))

// // console.log('App started')

// var btn = document.getElementById("add")
// console.log(btn)
// var w=document.getElementsByClassName("warning");
// console.log(w);
// document.getElementById("add").addEventListener("click",function(){
//     w.style.display="none"
// })
// // btn.onclick = ()=> {
   
// //     console.log(warning)

//     // let name=document.getElementById("name").value
//     // for( i=0;i<name.length;i++){
//     //     if(name[i] > "0" && name[i] < "9"){
//     //        alert("Full name không có chữ số!.Nhập lại!");
//     //         break 
//     //     } 
        
//     //     let age=document.getElementById("age").value
//     //     if(age<1) alert("Tuổi không thể bé hơn 1.Nhập lại");
//     //     else{
//     //         alert("Đăng nhập thành công!");
//     //     }
//     // }
    
   
    
// // }

function myFunction(){
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    check=true
    var t=document.getElementById("warning-font");
    for(i=0;i<name.length;i++){
        if(name[i]>"0"&&name[i]<"9"){
            check=false
             t.innerHTML="Tên của bạn không được có chữ số"
            show()
            break
        }
        if(age<1) {
            check=false
            t.innerHTML="Tuổi không được bé hơn 1"
            show();
            break;
        }
        
    }
    if(check==true) {
        t.innerHTML="Bạn đăng nhập thành công"
            show();
    }
    

}
function show(){
    var t=document.getElementById("warning-font");
    var w=document.getElementsByClassName("warning");
    if(w[0].style.display=="none") {
        w[0].style.display="block";
    }
    else{
        w[0].style.display="none";
    }
}
