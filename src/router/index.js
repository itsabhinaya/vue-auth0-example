import Vue from 'vue'
import Router from 'vue-router'
import GiphySearch from '@/components/GiphySearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GiphySearch',
      component: GiphySearch
    }
  ]
})
