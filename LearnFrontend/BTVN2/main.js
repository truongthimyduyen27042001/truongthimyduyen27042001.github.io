new Vue({
    el:'#app',
    data:{
        newLabel:'',
        editLabel:'',
        choiceLabel:'',
        list:[
        {
            label:'Làm bài tập nodejs ',
            done:true,
            edit:false
        },
        {
            label:'Làm bài tập XSTK',
            done:true,
            edit:false
        },
        {
            label:'Làm bài tập c#',
            done:true,
            edit:false
        },
        {
            label:'Làm bài tập Java',
            done:true,
            edit:false
        },
        {
            label:'Xem cá hồi hoang',
            done:true,
            edit:false
        },
        {
            label:'Xuống nhà nội',
            done:true,
            edit:false
        },
        {
            label:'Đi chơi',
            done:true,
            edit:false
        },
        {
            label:'Đi hội an',
            done:false,
            edit:false
        }
    ]
    },
    methods:{
        addList(newLabel){
            let check=false;
            for(var i=0;i<this.list.length;i++){
               if(newLabel===this.list[i].label) check=true
            }
            if(check==false) this.list.push({
                label:newLabel,
                done:false
            })
            else{
                alert('da ton tai')
            }
            this.newLabel=''
        },
        goEdit(item){
            this.editLabel=item.label
            item.edit=true
        },
        edit(item){
            item.label=this.editLabel
          item.edit=false
        },
        deleteItem(item){
            const index=this.list.findIndex(i=>i.label===item.label)
            if(index>=0){
                this.list.splice(index,1)
            }
        }
        
    },
    computed:{

    }
})

function showModal(){
    

    // Get the button that opens the modal
    // When the user clicks the button, open the modal 
       
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}