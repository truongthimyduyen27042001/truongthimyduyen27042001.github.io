var selected=`selected ="selected" `
var selectedTT=`<select disabled="disabled" name="" id="major">
<option  ${selected} value="">Công nghệ thông tin</option> 
<option value="">Công nghệ thực phẩm</option>
<option value="">Hóa học</option>
</select>`
var selectedTP=`<select disabled="disabled" name="" id="major">
<option  value="">Công nghệ thông tin</option> 
<option  ${selected} value="">Công nghệ thực phẩm</option>
<option value="">Hóa học</option>
</select>`
var selectedHH=`<select disabled="disabled" name="" id="major">
<option value="">Công nghệ thông tin</option> 
<option value="">Công nghệ thực phẩm</option>
<option  ${selected} value="">Hóa học</option>
</select>`
var stt=3

var table=document.getElementById('table')
var nameForm=document.querySelector("#nameitemForm")
var majorForm=document.getElementById("majorForm")
let imgForm=document.getElementById("formIMG")
let errorMajor=document.getElementById("messageMajor")
let errorName=document.getElementById("message")

console.log("@@@")
function preview_img(event){
    let files=event.target.files;
    let bob=URL.createObjectURL(files[0])
    document.querySelector("#formIMG").src=bob;

}
document.querySelector("#input-image").onchange=preview_img;

//hoat dong danh cho submit 
function addSV(event){
    event.preventDefault();
    if(checkValidValue()==false) {
        
        return 
    }
    else {
        errorName.innerHTML=" "
        errorMajor.innerHTML=" "

        var AddRown = table;
        var NewRow = AddRown.insertRow(stt);

        var realMajor;
        if(majorForm.value=="Công nghệ thông tin") realMajor=selectedTT
        if(majorForm.value=="Công nghệ thực phẩm ") realMajor=selectedTP
        if(majorForm.value=="Hóa học") realMajor=selectedHH
        
        var name = nameForm.value
        var major = majorForm.value;
       var anh = imgForm.src
       
        
       var cel0=NewRow.insertCell(0)
        var cel1 = NewRow.insertCell(1);
        var cel2 = NewRow.insertCell(2);
        var cel3 = NewRow.insertCell(3);
        var cel4=NewRow.insertCell(4);
        
        var read=name
        alert(major)
        cel0.innerHTML=stt
        cel1.innerHTML =`<input class="nameitems"  type="text" name="fname" value="${read}" 
        readonly
        required>`
        cel2.innerHTML =realMajor
        cel3.innerHTML = ` <img src="${anh}" alt=""> `;
        cel4.innerHTML=`  <input class="btn btn-primary" type="submit" id="edit" value="Edit">
        <button type="button" class="btn btn-danger">Delete</button>`

        stt++
    }
}
document.querySelector("#form").onsubmit=addSV;
let error;
function checkValidValue(){
    let name=document.querySelector("#nameitemForm").value
    if(name==null||name[0]>='0'&&name[0]<'9'||name.length<10) {
        error="Name is valid"
        errorName.innerHTML=error;
        return false;
    }
    let select=document.getElementById("majorForm").value;
    if(select=="Chọn chuyên ngành") {
        error="Chưa chọn chuyên ngành"
        errorMajor.innerHTML=error;
        return false;
    }
    
    if( imgForm.src==""){
        error="Chưa chọn file ảnh"
        return false;
    }
    return true;
}

