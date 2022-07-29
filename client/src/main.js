import App from './App.vue'
import Vue from 'vue'

import vuetify from './plugins/vuetify'
import './plugins/axios'



export const eventBus = new Vue();

new Vue({
    vuetify,
    render: h => h(App),


}).$mount('#app')