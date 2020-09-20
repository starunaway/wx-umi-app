import Vue from 'vue'
import App from './App'
import moment from 'moment';
import fetch from './api/fetch.js'

Vue.config.productionTip = false

Vue.prototype.$fetch = fetch

App.mpType = 'app'
//  Cannot read property 'forceUpdate' of undefined -> 需要给微信小程序一个appid

const app = new Vue({
    ...App
})
app.$mount()
