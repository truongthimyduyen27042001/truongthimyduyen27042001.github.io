new Vue({
    el:'#app',
    data:{
        totalMoney:0,
       
        arr:[
            {
                name:'Web Development',
                price:300000,
               
            },
            {
                name:'Design',
                price:400000,
               
            },
            {
                name:'Integration',
                price:250000,
              
            },
            {
                name:'Training',
                price:200000,
            }
        ],
    arrChoice:[{

    }]
    },
    methods:{
        Buy(item){
        const index=this.arrChoice.findIndex(i=>i.name===item.name)
        if(index>=0){
            this.totalMoney-=item.price;
            this.arrChoice.splice(index,1)
        }
        else{
            this.totalMoney+=item.price;
            this.arrChoice.push({name:item.name,price:item.price})  
            
        }
        },
        checkChoose(item){
            if(this.arrChoice.find((x)=>x.name==item.name)) return true
           return false
        },
        changeMoney(price){
            return price.toLocaleString('vi',{
            style:'currency',currency:'VND'});
        }
        
    }
})

// Create our number formatter.

