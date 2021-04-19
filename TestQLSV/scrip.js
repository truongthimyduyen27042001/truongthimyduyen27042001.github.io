

var table=document.getElementById('table')
var nameForm=document.querySelector("#nameitemForm")
var majorForm=document.getElementById("majorForm")
let imgForm=document.getElementById("formIMG")
let errorMajor=document.getElementById("messageMajor")
let errorName=document.getElementById("message")
let errorIMG=document.getElementById("messageIMG")
let imgItem=document.getElementById("anhItem input")

let checkName=true;
let checkMajor=true;
let checkAnh=true;

let nameCheck;


readData()

function preview_img(event){
    let files=event.target.files;
    let bob=URL.createObjectURL(files[0])
    document.querySelector("#formIMG").src=bob;
}
document.querySelector("#input-image").onchange=preview_img;


function addSV(event){
    event.preventDefault();
  
  
    if(checkValidValue()==false) {   
        
        return 
    }
    else {
        errorName.innerHTML=" "
        errorMajor.innerHTML=" "
        imgForm.src="http://127.0.0.1:5500/index.html"

        let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
        listdata.push({
            name : nameForm.value,
            major : majorForm.value,
            anh : imgForm.src
        })
      
        localStorage.setItem("data",JSON.stringify(listdata))

        this.readData(); 
        nameForm.value= " "
        majorForm.value="Chọn chuyên ngành"
        imgForm.src="http://127.0.0.1:5500/index.html"         
    }
}
document.querySelector("#form").onsubmit=addSV;
function checkValidName(nameCheck,eName){
    let checkName=true;
    nameCheck.value=nameForm.value.trim()
    if(nameCheck.value==""){
        eName.innerHTML="Bạn chưa nhập tên!";
        checkName=false;
    }
    if(nameCheck.value[0]>='0'&&nameCheck.value[0]<='9'){
       
        eName.innerHTML="Tên không bắt đầu bằng chữ số"
        checkName=false;
    }
    if(nameCheck.value.length>10){
        eName.innerHTML="Tên không được quá 10 kí tự"
        checkName=false;
    }
  
    return checkName;

}
function checkValidMajor(){
    let checkMajor=true
    if(majorForm.value=="Chọn chuyên ngành"){
        errorMajor.innerHTML="Bạn chưa chọn chuyên nghành"
        checkMajor=false;
    }
    return checkMajor;
}
function checkValidAnh(imgCheck,errorIMGCheck){
    let checkAnh=true;
    if(imgCheck.src=="http://127.0.0.1:5500/index.html?fname=duyen"){
        checkAnh=false;
        errorIMGCheck.innerHTML="Bạn chưa chọn ảnh";
    }
    return checkAnh;
   
}

function checkValidValue(){ 
   let checkName=checkValidName(nameForm,errorName)
    let checkMajor=checkValidMajor();
    let checkAnh=checkValidAnh(imgForm,errorIMG)
    if(checkName&&checkMajor&&checkAnh) return true;
    return false;
}
function readData(){
 
    let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]

    if(listdata.length==0) return 
    
    let tableContent = `<thead>
        <tr>
            <td id="stt">#</td>
            <td>Name</td>
            <td id="category">Chuyên ngành</td>
            <td id="image">Image</td>
            <td id="action">Action</td>
        </tr>
    </thead>
    <tbody>`

    listdata.forEach((student,index)=>{
       
        let StudentID=index
        index++
        tableContent+=`
                <tr id="row1">
                    <td>${index}</td>
                    <td>
                        <input id="name${StudentID}" class="nameitems"  type="text" name="fname" value="${student.name}" 
                        readonly
                        required>
                        <p class="error" id="eName${StudentID}"> </p>
                    </td>
                   
                    <td>
                        <select id="select${StudentID}" class="selectList" disabled ">
                            <option value="Công nghệ thông tin">Công nghệ thông tin</option> 
                            <option value="Công nghệ thực phẩm">Công nghệ thực phẩm</option>
                            <option value="Hóa học">Hóa học</option>
                        </select>
                       
                    </td>
                    <td>
                       <div class="anhItem">
                            <input type="file" accept="image/*"  id="inputAnh${StudentID}" style="display:none" required>
                            <img src="${student.anh}" alt="" id="anh${StudentID}">
                       </div>
                       <p class="error" id="eAnh${StudentID}"> </p>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-primary btnEdit"  onclick="editRow(event,${StudentID})" >Edit</button>
                        <button type="button" class="btn btn-danger" onclick="deleteRow(${StudentID})">Delete</button>
                    </td>
                </tr>
        `
    })
   
    tableContent+='</tbody>'
    document.getElementById("table").innerHTML=tableContent;
    listdata.forEach((student,index)=>{
        document.getElementsByClassName("selectList")[index].value=student.major
      })
}
function deleteRow(id){
    let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
    listdata.splice(id,1)
    localStorage.setItem("data",JSON.stringify(listdata))
    readData()
}
function editRow(event,id){   
    var btnEdit=document.getElementsByClassName("btnEdit")[id]
    if(btnEdit.innerHTML=="Edit") {
        btnEdit.innerHTML="Save"
        document.getElementById(`inputAnh${id}`).style.display="block"
        event.target.parentNode.parentNode.querySelector("input").readOnly=false;
        document.getElementsByClassName("selectList")[id].disabled = false;
    }
    else{  
   
    nameNew = document.getElementById(`name${id}`)
    majorNew=document.getElementById(`select${id}`)
    srcNew=document.getElementById(`anh${id}`)
    
  
    checkName=true;

    let eName=document.getElementById(`eName${id}`)
    let eAnh=document.getElementById(`eAnh${id}`)
        checkValidName(nameNew,eName);
      if(checkName==false) return ;
      else eName.innerHTML="";
      
    

    let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
        listdata[id]={
            name : nameNew.value,
            major : majorNew.value,
            anh:srcNew.src
        }
        localStorage.setItem("data",JSON.stringify(listdata))
       btnEdit.innerHTML="Edit"
       document.getElementById(`inputAnh${id}`).style.display="none"
      
        event.target.parentNode.parentNode.querySelector("input").readOnly=true;
        document.getElementsByClassName("selectList")[id].disabled = true;
    }
}