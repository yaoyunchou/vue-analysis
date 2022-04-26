
import Vue from '../../../vue/dist/vue'
import VueRouter from '../../../vue-router/dist/vue-router'
import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.use(VueRouter)


let A = {
  beforeCreate(){
    console.log('A beforeCreate')
  },
  mounted(){
    console.log('AAAAAAA')
    setTimeout(() =>{
    
      debugger
      console.log(this.$router)
      // this.$router.push('/')

    },5*1000)
  },
  template: '<div class="a">' +
  '<p>A Comp</p>' +
  '</div>'
}
let B = {
  template: '<div class="b">' +
  '<p>B Comp</p>' +
  '</div>'
}
const routes = [
  { path:'/one', component:A},
  { path:'/two', component:B}
]
const router = new VueRouter({routes})


new Vue({
  el: '#app',
  render(h){ return h(App) },
  router
})