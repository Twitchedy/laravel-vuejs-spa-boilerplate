import Vue from 'vue'
import store from './store'
import router from './router'
import App from '~/components/base/App'

// Init SPA.
new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app')
