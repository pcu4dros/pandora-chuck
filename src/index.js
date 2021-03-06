import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

//Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
//auth.checkAuth()

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
