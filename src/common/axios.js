import { Message } from 'element-ui';
import { apiUrl } from '@/common/common.js';
import axios from 'axios';
import Cookie from 'js-cookie'
import Qs from 'qs';
import { vue } from '@/main.js'

axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 15 * 1000;
axios.defaults.headers = !Cookie.get('Ticket')? {'Authorization': null, 'Content-Type': 'application/x-www-form-urlencoded'} :{'Authorization': 'BasicAuth ' + Cookie.get('Ticket'), 'Content-Type': 'application/x-www-form-urlencoded'};
// axios.defaults.headers = {'Authorization': 'BasicAuth ' + !Cookie.get('Ticket') ? null : Cookie.get('Ticket')};

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
    //在请求发出之前进行一些操作
    // if(vue.Cookie.get('ticket')==undefined){
    //     vue.$router.push('/login');
    // }
    config.data = Qs.stringify(config.data);
    return config;
},function(err){
    //Do something with request error
    return Promise.reject(error);
});



//添加一个响应拦截器
axios.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    return res.data;
},function(err){
    if(err.response.status == 401){
        vue.Cookie.remove("Ticket", { expires: 1 });
        vue.Cookie.remove("gcId", { expires: 1 });
        vue.Cookie.remove("password", { expires: 1 });
        vue.Cookie.remove("userName", { expires: 1 });
        vue.Cookie.remove("ProName", { expires: 1 });
        vue.Cookie.remove("code", { expires: 1 });
        vue.Cookie.remove("IsEnter", { expires: 1 });
        vue.Cookie.remove("Oulevel", { expires: 1 });
        vue.Cookie.remove("Level", { expires: 1 });
        vue.Cookie.remove("ProCount", { expires: 1 });
        vue.Cookie.remove("ProType", { expires: 1 });
        localStorage.removeItem('type');
        vue.$router.push('/login/'+localStorage.PlatformCode);
    }
    Message({
        message: '操作失败，请稍后重试。',
        type: 'error',
        showClose: true
    })
    return Promise.reject(err);
})

export default axios
