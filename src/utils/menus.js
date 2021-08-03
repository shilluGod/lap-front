//菜单请求工具类
import {getRequest} from "./api";

export const initMenu = (router,store)=>{
  if (store.state.routes.length>0){
    return;
  }
  //菜单请求接口的url
  getRequest('/system/config/menu').then(data=>{
    if (data){
      //格式化Router
      let fmtRoutes = formatRoutes(data);
      //添加到router
      router.addRoutes(fmtRoutes);
      //将数据存入Vuex
      store.commit('initRoutes',fmtRoutes);
    }
  })
}


export const formatRoutes = (routes) =>{
  let fmtRoutes = [];
  routes.forEach(router=>{
    let{
        path,
        component,
        name,
        iconCls,
        children,
    } = router
    if(children && children instanceof Array){
      children = formatRoutes(children);
    }
    let fmRouter = {
      path:path,
      name:name,
      iconCls:iconCls,
      children:children,
      component(resolve){
        if(component.startsWith('Home')){
          require(['../views/'+component+'.vue'],resolve);
        }else if(component.startsWith('Data')){
          require(['../views/data/'+component+'.vue'],resolve);
        }else if(component.startsWith('Eva')){
          require(['../views/eva/'+component+'.vue'],resolve);
        }else if(component.startsWith('User')){
          require(['../views/user/'+component+'.vue'],resolve);
        }else if(component.startsWith('Sys')){
          require(['../views/sys/'+component+'.vue'],resolve);
        }else if(component.startsWith('Util')){
          require(['../views/util/'+component+'.vue'],resolve);
        }
      }
    }
    fmtRoutes.push(fmRouter)
  });
  return fmtRoutes;
}
