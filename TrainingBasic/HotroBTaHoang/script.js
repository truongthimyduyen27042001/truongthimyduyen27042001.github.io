// function preview_imga(){
//     let files = document.querySelector("#input-image").files
//     console.log(files)
//     //Lấy được link của ảnh mình vừa up lên 
//     let blod = URL.createObjectURL(files[0])
//     //sau đó dùng URL vừa get được gán vào src của ảnh 
//     document.querySelector("#pre-image").src=blod;
    
//     console.log(blod);
// }
// document.querySelector("#input-image").onchange=preview_imga;

//cach 2 
function preview_img(event){
    //event la object chua tat ca nhung su kien co the xay ra 
    //console.log(event)
    let files=event.target.files;
    let bob=URL.createObjectURL(files[0])
    document.querySelector("#pre-image").src=bob;

}
document.querySelector("#input-image").onchange=preview_img;

//bắt sự kiện submit form
function getData(event){
    //ngan chan viec reload 
    event.preventDefault();
    //code ham lay du lieu roi them vao ben duoi table
    let id=1;
    let name="item1";
    let toal=1;

    let new_row=
    `<tr>
        <td>${id}</td>
     <td><input type="text" readonly value='${name}'></td>
        <td>${toal}</td>
        <td><button onclick="editRow(event)">Edit</button></td>
    </tr>`

    let new_element=document.createElement("tr")
    let cell1=document.createElement("td")
    cell1.innerHTML="2"
    let cell2=document.createElement("td")
    cell2.innerHTML="Item 3"

    new_element.appendChild(cell1)
    new_element.appendChild(cell2)
    document.querySelector("tbody").appendChild(new_element)
    document.querySelector("tbody").innerHTML+=new_row;

    
   
    document.querySelector("tbody").appendChild(new_element)
    document.querySelector("tbody").innerHTML+=new_row;

}
document.querySelector("form").onsubmit=getData;

//function phuc vu cho ham edit 
//Khi nhan vao edit thi chuyen cai input dung voiw 
//cai hang can edit readonly =false de co the chinh sua 

function editRow(event){
    event.target.parentNode.parentNode.querySelector("input").readOnly=false;
    console.log(event.target.parentNode.parentNode.querySelector("input"))  
}
// event.target.parentNode.parentNode.querySelector("input").removeAtrribute("readonly");