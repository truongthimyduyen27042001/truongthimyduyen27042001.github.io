

var table=document.getElementById('table')
var nameForm=document.querySelector("#nameitemForm")
var majorForm=document.getElementById("majorForm")
let imgForm=document.getElementById("formIMG")
let errorMajor=document.getElementById("messageMajor")
let errorName=document.getElementById("message")

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

        let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
        listdata.push({
            name : nameForm.value,
            major : majorForm.value,
            anh : imgForm.src
        })

        localStorage.setItem("data",JSON.stringify(listdata))
        this.readData();             
    }
}
document.querySelector("#form").onsubmit=addSV;

function checkValidValue(){
    
    if(nameForm.value==null||nameForm.value[0]>='0'&&nameForm.value[0]<'9'||nameForm.value.length<10) {
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
                        <input class="nameitems"  type="text" name="fname" value="${student.name}" 
                        readonly
                        required>
                    </td>
                    
                    <!-- cai category chinh la mot lua chon cua combobox -->
                    <td>
                        <select class="selectList" disabled name="" id="major${StudentID}">
                            <option value="">Công nghệ thông tin</option> 
                            <option value="">Công nghệ thực phẩm</option>
                            <option value="">Hóa học</option>
                        </select>
                    </td>
                    <td>
                        <img src="${student.anh}" alt="hinhanh">
                    </td>
                    <td>
                        <button type="submit" class="btn btn-primary" id="btnEdit"  onclick="editRow(event,${StudentID})" >Edit</button>
                        <button type="button" class="btn btn-danger" onclick="deleteRow(${StudentID})">Delete</button>


                    </td>
                </tr>
        `
    })
    tableContent+='</tbody>'
    document.getElementById("table").innerHTML=tableContent;
}
function deleteRow(id){
    let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
    listdata.splice(id,1)
    localStorage.setItem("data",JSON.stringify(listdata))
    readData()
}
function editRow(event,id){   
    var btnEdit=document.getElementById("btnEdit") 
    if(btnEdit.innerHTML=="Edit") {
        btnEdit.innerHTML="Save"
        event.target.parentNode.parentNode.querySelector("input").readOnly=false;
        document.getElementsByClassName("selectList")[id].disabled = false;
    }
    else{  
       btnEdit.innerHTML="Edit"
        event.target.parentNode.parentNode.querySelector("input").readOnly=true;
        document.getElementsByClassName("selectList")[id].disabled = true;
    }

    

}