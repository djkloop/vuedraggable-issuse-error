/*
 * @Author        : djkloop
 * @Date          : 2020-09-04 16:38:48
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-09-07 12:09:40
 * @Description   : main.js
 * @FilePath      : /vd/src/main.js
 */
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import formCreate from "@form-create/element-ui";
import Draggable from "vuedraggable";
import App from "./App.vue";
/// good
import router from "./router";
import store from "./store";
Vue.use(VueCompositionAPI);
Vue.use(ElementUI);
Vue.use(formCreate);
Vue.component(Draggable.name, Draggable);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
