import Vue from 'vue'
import Router from 'vue-router'
import orgIndex from '@/components/content/org/index'
import userIndex from '@/components/content/user/index'
import userCreat from '@/components/content/user/creat'
import roleIndex from '@/components/content/role/index'
import logIndex from '@/components/content/log/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'userIndex',
      component: userIndex
    },
    {
      path: '/content/org',
      name: 'orgIndex',
      component: orgIndex,

    },
    {
      path: '/content/user',
      name: 'userIndex',
      component: userIndex,
    //   childrens: [{
	// 	path: '/content/user',
    //     name: 'creat',
    //     component:userCreat,

    //   }, ]
    },
    {
      path: '/content/role',
      name: 'roleIndex',
      component: roleIndex
    },
    {
      path: '/content/log',
      name: 'logIndex',
      component: logIndex
    },
  ]
})
