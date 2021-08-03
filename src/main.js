import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import {postRequest} from "./utils/api"
import {putRequest} from "./utils/api"
import {getRequest} from "./utils/api"
import {deleteRequest} from "./utils/api"
import {initMenu} from "./utils/menus"
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest

router.beforeEach((to,from,next)=>{
  if(window.sessionStorage.getItem('tokenStr')){
    //加载左侧菜单
    initMenu(router,store);
    //判断用户信息是否存在
    if(!window.sessionStorage.getItem('user')){
      return getRequest('/user/info').then(resp => {
        if(resp){
          //存入用户信息
          window.sessionStorage.setItem('user',JSON.stringify(resp));
          next();
        }
      })
    }
    next();
  }else{
    //如果用户未登录访问内部页面则跳至登录页面
    if(to.path == '/'){
      next();
    }else{
      next('/?redirect=' + to.path);
    }
  }
})


//解决报错
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
