import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('toCurrency', function(value) {
  if (!value) return '';
  return (value/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
