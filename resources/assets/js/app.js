import Vue from 'vue'
import store from './store'
import router from './router'
import App from '~/components/base/App'
import axios from 'axios'
import $ from 'jquery'

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').text(),
    'X-Requested-With': 'XMLHttpRequest'
}
Vue.prototype.$http = axios

// Init SPA.
new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app')
