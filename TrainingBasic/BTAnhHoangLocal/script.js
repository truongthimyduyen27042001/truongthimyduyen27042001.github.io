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

//hoat dong show
//hoat dong danh cho submit 

var retrievedObject = localStorage.getItem("data");
var stored = JSON.parse(localStorage.getItem("data"));
showData()
//hoat dong danh cho submit 

function addSV(event){
    event.preventDefault();
    
    if(checkValidValue()==false) {   
        return 
    }
    else {
      
        errorName.innerHTML=" "
        errorMajor.innerHTML=" "
  
        var temp = {
                "stt" :stt,
                "name" :nameForm.value,
                "major" : majorForm.value,
                "src" : imgForm.src
        };
        stt++

        stored.push(temp)
        
        localStorage.setItem("data",JSON.stringify(stored))

        showData()
                    
    }
}
document.querySelector("#form").onsubmit=addSV;
let error;
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
//bat dau lai tu dau 
//add sẵn dữ liệu cho local 



var listdata=[]
var newSTudent={
    "stt" :1,
    "name" :"Trương Thị Mỹ Duyên",
    "major" : "Công nghệ thông tin",
    "src" : "https://scontent.fdad8-1.fna.fbcdn.net/v/t1.6435-9/82440376_1333037346905603_3222950360930844672_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=dTFYgGi3ekcAX9_D8Hq&_nc_ht=scontent.fdad8-1.fna&oh=94979b660ba50170151332133e959a7d&oe=609C12E3"
 }
 listdata.push(newSTudent)

 var newSTudent2={
    "stt" :2 ,
    "name" :"Lê Hoàng Ngọc Hân",
    "major" : "Công nghệ thông tin",
    "src" : "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/150082242_1430472140650096_2994224548256427455_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ijzlDP0lmtYAX8iK-xF&_nc_ht=scontent.fdad3-1.fna&oh=181ebe62574d2af57767852080048b12&oe=609E143B"
 }
 listdata.push(newSTudent2)
 localStorage.setItem("data",JSON.stringify(listdata))


 //Lấy dữ liệu về rồi add thêm vào

//lay nhung du lieu tu data cuar local truyen vao mot list 

//showdata thông qua local 
function showData(){

    var listStudent=[]

    for(i=0;i<stored.length;i++){
   var tempStudent={
       "stt" :stored[i].stt,
       "name" :stored[i].name,
       "major":stored[i].major,
       "src" : stored[i].src
   }
    listStudent.push(tempStudent)
    }
    var newTable=table
    newTable.innerHTML=`
        <thead>
        <tr>
            <td id="stt">#</td>
            <td>Name</td>
            <td id="category">Chuyên ngành</td>
            <td id="image">Image</td>
            <td id="action">Action</td>
        </tr>
    </thead>`
    for(i = 0 ; i < listStudent.length;i++){
        newTable.innerHTML+=`
        <tr>
        <td>${listStudent[i].stt}</td>
        <td>
            <input class="nameitems"  type="text" name="fname" value="${listStudent[i].name}" 
            readonly
            required>
        </td>
        <td>
                <select disabled="disabled" name="" id="major">
                <option value="">Công nghệ thông tin</option> 
                <option value="">Công nghệ thực phẩm</option>
                <option value="">Hóa học</option>
            </select>
        </td>
        <td>
            <img src="${listStudent[i].src}" alt="hinhanh">
        </td>
        <td>
                <input class="btn btn-primary" type="submit" id="edit" value="Edit">
                <button type="button" class="btn btn-danger">Delete</button>
        </td>
        </tr>
        `
    }
}

//them du lieu thu nghiem ??





