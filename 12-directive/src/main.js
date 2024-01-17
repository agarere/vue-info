import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive("globalColor", {
  // el, binding, vnode
  bind (el, binding) {

    if (binding.modifiers["delay"]) {
      setTimeout(() => {
        if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value
        } else {
          el.style.color = binding.value
        }
      }, 2000)
    } else {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }


  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
