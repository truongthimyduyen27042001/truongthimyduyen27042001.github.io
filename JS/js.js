// $('button')
//   .html('Click me') // Try edit it...
//   .on('click', () => console.log('Hi friend!'))

// console.log('App started')

var btn = document.getElementById("add")

btn.onclick = ()=> {
    let name=document.getElementById("name").value
    for( i=0;i<name.length;i++){
        if(name[i] > "0" && name[i] < "9"){
           alert("Nhap lai")
            break 
        } 
        
        let age=document.getElementById("age")
        
    }
    
    
}
 