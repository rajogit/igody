import Vue from 'vue'
import Router from 'vue-router'

import User from '../components/account/Account.vue'
import UserStart from '../components/account/AccountStart.vue'
import UserDetail from '../components/account/AccountDetail.vue'
import UserEdit from '../components/account/AccountEdit.vue'
import Home from '../components/page/PageHome.vue'
import Header from '../components/common/BaseHeader.vue'
import Footer from '../components/common/BaseFooter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      components: {
        default: Home,
        'header-top': Header
      }
    },
    {
      path: '/user',
      components: {
        default: User,
        'header-bottom': Footer
      },
      children: [
        {
          path: '',
          component: UserStart
        },
        {
          path: ':id',
          component: UserDetail
        },
        {
          path: ':id/edit',
          component: UserEdit,
          name: 'userEdit'
        }
      ]
    },
    {
      path: '/redirect-me',
      redirect: {name: 'home'}
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
