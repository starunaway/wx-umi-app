import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//  Cannot read property 'forceUpdate' of undefined -> 需要给微信小程序一个appid

const app = new Vue({
    ...App
})
app.$mount()
