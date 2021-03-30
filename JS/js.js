// $('button')
//   .html('Click me') // Try edit it...
//   .on('click', () => console.log('Hi friend!'))

// console.log('App started')

var btn = document.getElementById("add")

btn.onclick = ()=> {
    let name=document.getElementById("name").value
    for( i=0;i<name.length;i++){
        if(name[i] > "0" && name[i] < "9"){
           alert("Full name không có chữ số!.Nhập lại!");
            break 
        } 
        
        let age=document.getElementById("age")
        
    }
    let age=document.getElementById("age").value
        if(age<1) alert("Tuổi không thể bé hơn 1.Nhập lại");
    
    
}
 