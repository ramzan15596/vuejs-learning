Vue.component('greeting',{
  template: "<p>Hey There I {{name}} <button v-on:click='changeName'>Change Name</button></p>",
  data: function (){
    return {
      name: 'Ramzan!'
    }
  },
  methods: {
    changeName: function()
    {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app-one',
  
});


new Vue({
  el: '#vue-app-two',
  
});
