// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//cookie
import Cookie from 'js-cookie'

Vue.prototype.Cookie = Cookie;
//axios
import axios from '@/common/axios.js'

Vue.prototype.$http = axios;
// //element
import {
  Row,
  Col,
  Button,
  DatePicker,
  Table,
  TableColumn,
  Select,
  Option,
  Input,
  Dialog,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Upload,
  InputNumber,
  Pagination,
  Steps,
  Step,
  Cascader,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Popover
} from 'element-ui'

Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(Upload);
Vue.use(InputNumber);
Vue.use(Pagination);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Cascader);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(CheckboxGroup);
Vue.use(Popover);

// // 注册一个全局自定义指令 v-positionFixed 用于右边固定
// Vue.directive('positionFixed', {
//     // 当绑定元素插入到 DOM 中。
//     inserted: function (el) {
//         var rightListLeft = el.offsetLeft;//右侧栏距离浏览器左边的距离
//         var height=el.offsetTop-68;
//         var scrollTop=0;
//         window.onresize=function () {
//             el.setAttribute('style','');
//             height=el.offsetTop-68;
//             rightListLeft = el.offsetLeft;//右侧栏距离浏览器左边的距离
//             if (height >= scrollTop ) {
//                 el.setAttribute('style','');
//             }else{
//                 el.setAttribute('style','position:fixed;top:68px;left:'+rightListLeft+'px');
//             }
//         };
//         window.addEventListener('scroll',function () {
//             el.setAttribute('style','');
//             height=el.offsetTop-68;
//             rightListLeft = el.offsetLeft;//右侧栏距离浏览器左边的距离
//             scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
//             if (height >= scrollTop ) {
//                 el.setAttribute('style','');
//             }else{
//                 el.setAttribute('style','position:fixed;top:68px;left:'+rightListLeft+'px');
//             }
//         });
//     }
// });


Vue.config.productionTip = false
//美化时间
import { goodTime } from '@/common/common.js'

Vue.filter('time',function(val){
  return goodTime(val);
})
/* eslint-disable no-new */
export const vue = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
// cookie失效重新登陆
// router.beforeResolve((to, from, next) => {
//   if( to.path.indexOf('/login')==-1 && vue.Cookie.get('Ticket')==undefined){
//     next({ path: '/login/'+localStorage.PlatformCode })
//   }else{
//     next();
//   }
// })
