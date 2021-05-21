new Vue({
    el: '#app',
    
  data:{
    activeName: 'Nothing',
      arr:[
      
          {
              name:'HOME',
              active:true
          },
          {
              name:'PROJECTS',
              active:false
          },
          {
              name:'SERVICES',
              active:false
          },
          {
              name:'CONTACT',
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