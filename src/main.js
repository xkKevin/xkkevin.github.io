import Vue from 'vue'
import App from './App.vue'
import router from './router'

 // 导入组件库
import ElementUI from 'element-ui'
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'
// 配置 Vue 插件
Vue.use(ElementUI)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faGraduationCap, faHandsClapping, faVideo, faFile, faCube } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faFile } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faEnvelope, faGithub, faGraduationCap, faHandsClapping, faFile, faVideo, faCube)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
