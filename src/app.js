import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-button-group', ButtonGroup)

new Vue({
  el:'#app',
  data(){
    return {
      loading1:false,
      loading2:true,
      loading3:false
    }
  }
})