import axios from 'axios';
/*单独引用，单独引入element ui的message*/
import {Message} from 'element-ui';
import router from '../router';

/*请求拦截器*/
axios.interceptors.request.use(config=>{
  // 如果存在token，请求携带这个token
  if (window.sessionStorage.getItem('tokenStr')){
    config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
  }
  return config;
}, error => {
  console.log(error);
})

/*axios全局拦截器*/
/*响应拦截器*/
axios.interceptors.response.use(success => {
  //业务逻辑错误
  if (success.status && success.status == 200) {
    if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
      Message.error({message: success.data.message});
      return;     // 返回空
    }

    if (success.data.message) {
      Message.success({message: success.data.message});
    }
  }

  return success.data;

}, error => {
  /*服务器宕机或接口无法访问等其他错误(权限不够)*/
  if (error.response.code == 504 || error.response.code == 404) {
    Message.error({message: '服务器宕机或页面无法访问等其他错误'});
  } else if (error.response.code == 403) {
    Message.error({message: '权限不足'});
  } else if (error.response.code == 401) {
    Message.error({message: '当前用户暂未登录'});
    router.replace('/')
  } else {
    /*查看返回相应里是否存在信息*/
    if (error.response.data.message) {
      Message.error({message: error.response.data.message});
    } else {
      Message.error({message: '未知错误!'});
    }
  }
  return;
});

/*传送json格式的post请求*/
let base = '';          // 为了后续添加url前置方便设计
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params
  })
}

/*传送json格式的put请求*/
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params
  })
}

/*传送json格式的get请求*/
export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    data: params
  })
}

/*传送json格式的delete请求*/
export const deleteRequest = (url, params) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    data: params
  })
}
