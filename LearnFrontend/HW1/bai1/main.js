new Vue({
    el: '#app',
    
  data:{
    activeName: 'nothing',
      arr:[
      
          {
              name:'Home',
              active:true
          },
          {
              name:'Projects',
              active:false
          },
          {
              name:'Services',
              active:false
          },
          {
              name:'Contact',
              active:false
          }
      ]
  },
  methods:{
    turnOfActive(){
        alert(this.arr[0].active)
    },
      turnActive(item){
       this.arr[0].active=false
       this.arr[1].active=false
       this.arr[2].active=false
       this.arr[3].active=false
       item.active=true;
        this.activeName=item.name
      }
  }
})