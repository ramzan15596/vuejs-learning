new Vue({
  el: '#vue-app',
  data: {
    // name: 'Ramzan',
    // job: "Developer",
    // website: "https://www.google.com/",
    // websiteTag: '<a href="https://www.google.com/">Google Webste</a>'
    // age: 22,
    // x: 0,
    // y: 0
    // name: '',
    // age: ''
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    // greet: function(time){
    //   return 'Good ' + time + " " + this.name;
    // }
    // add: function(inc){
    //   this.age += inc;
    // },
    // substract: function(dec){
    //   this.age -= dec;
    // },
    // updateXY: function(event){
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
    // click:function(){
    //   alert('you clicked me');
    // }
    // logName: function(){
    //   console.log('you entered your name');
    // },
    // logAge: function(){
    //   console.log('you entered your age');
    // }
    // addToA: function(){
    //   return this.a + this.age;
    // },
    // addToB: function(){
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function(){
      return this.a + this.age;
    },
    addToB: function(){
      return this.b + this.age;
    }
  }
});
