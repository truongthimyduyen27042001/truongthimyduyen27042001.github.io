let promise =new Promise(function Sangtac(resolve,reject){
    setTimeout(function(){
        resolve("Hello");
    },3000)
})

promise.then(function(resolve){
    console.log(resolve);
}).catch(function (error){
    console.log(error);
})

fetch("link").then(function(resolve){
    var re=resolve.json();
    console.log(re);
})


//Cach goi 2 
promise.then(
    function ok(songname){
        console.log(songnam)
    },
    function errorr(cause){
        console.log(cause);
    }
).finally(function(){
    console.log("Done")
})

//Noi chuoi function
promise.then(
    function ok(songname){
        return songname
    }).then(
    function errorr(data){
        console.log(data+"abc");
    }
)
//data sẽ được nhận giá trị từ thằng trên nó là songname

promise.catch(function(cause){
    console.log("1");
    throw "XXXX";
}).then(function(data){
    console.log("2");
}).catch(function(erro){
    console.log("3")
})
    
//kHI XUẤT hiện return hay throw thì thực tế nó đang tạo ra một promise trả về resolve(return) , reject(throw)  
//bai tap 1 . MỘT HÀM TRẢ VỀ PROMISE

function delay(ms){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(1);
        },ms)
    })
}

delay(3000).then(function(data){
    console.log("run after 3 seconds ");
})

//Thực hiện promise 

function job(){
    return Promise(function(resolve,reject){
        reject();
    })
}

let promise=job();

promise.then(function(){
    console.log("1");
}).then(function(){
    console.log("2")
}).then(function(){
    console.log("3")
}).catch(function(){
    console.log("eror");
}).then(function(){
    console.log("4")
})

//Đấ án eror 4 
//nó thực tế đang trả về return undefine nên nó vẫn trả về một promise resolve



//Nghiên cứu những biến thể của promise 
const compareToTen = (num)=>{
    return new Promise(function(resolve,reject){
        if(num>10) resolve(num + " is greater than 10,success");
        if(num<10) reject(num+" is less than 10 , error");
    })
}

compareToTen(15).then(function(resolve){
    console.log(resolve);
}).catch(function(error){
    console.log(error);
})

compareToTen(8).then(function(resolve){
    console.log(resolve);
}).catch(function(error){
    console.log(error);
})


