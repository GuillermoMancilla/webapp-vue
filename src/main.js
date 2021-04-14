import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter, percentFilter, cmerc } from "@/filter";
import Chart from 'chart.js';
import Chartick from 'vue-chartkick';
import {VueSpinners} from '@saeris/vue-spinners'; 

Vue.filter("dollar", dollarFilter);
Vue.filter("dollarPercent", percentFilter);
Vue.filter("mercad", cmerc)

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart))

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
