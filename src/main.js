// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

import App from './App';

Vue.use(Vuetify, {
  theme: {
    primary: '#66bb6a'
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

// Webp fallback
const parallaxUp = document.getElementsByClassName('parallax__image-container')[0].firstChild;
const parallaxDown = document.getElementsByClassName('parallax__image-container')[1].firstChild;
parallaxUp.setAttribute('onerror', 'this.onerror=null; this.src="/static/img/app-green.jpg"');
parallaxDown.setAttribute('onerror', 'this.onerror=null; this.src="/static/img/app-wood.jpg"');
