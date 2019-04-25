import Vue from 'vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { EditorInstaller } from '@progress/kendo-editor-vue-wrapper'
import App from './App.vue'

Vue.use(EditorInstaller)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
