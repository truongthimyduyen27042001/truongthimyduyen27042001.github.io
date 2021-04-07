console.log("@@@@")
var list = document.getElementById('list')
let warnning=document.getElementById("form-warning")
console.log(warnning)
let container=document.getElementsByClassName("container")
console.log(container);
console.log(warnning)
let ok=document.getElementById("ok")
let check=true
let error=document.getElementById("error")

// kiem tra du lieu cua name

//xử lí hàm sau khi nhập thành công thì sẽ hiển thị 
function myFunction(e){
    //kiem tra 2 ham da nhap day du chua
    e.preventDefault();
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    console.log(name.length)
    for(i=0;i<name.length;i++){
        if(name[i]>="0"&&name[i]<="9")
        {   
            check=false
           show();
            break;
        } 
        
    }
    if(name.length==0) {
        error.innerText="You don't enter name"
        check=false
        show();
    }
    
    
    
    if(age<1==true) {
        check=false
        error.innerText="Age cann't small 1"
        show();
    }
    
    if(check==true){
        list.innerHTML+='<li>'+"Name: " + name+". Age: "+age+'</li>'
    }   
}
function okFunction(e){
    e.preventDefault()
    container.style.opacity="1"
    warnning.style.display="none"
    alert("thuc hien ham ok ")
}
function show(){
    
    if(warnning.style.display=="none") {
        container[0].style.opacity="0.5"
        warnning.style.display="block";
    }
    else{
        warnning.style.display="none";
        container[0].style.opacity="1"
        
    }
}
