import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DonationView from '@/views/DonationView.vue'
import AppDetails from '@/views/AppDetails.vue'
import ConversationView from '@/views/ConversationView.vue'
import FeedBackView from '@/views/FeedBackView.vue'
import UpdateVIew from '@/views/UpdateVIew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/appDetail',
      children: [
        {
          path: 'appDetail',
          name: '软件详情',
          component: AppDetails
        },
        {
          path: 'conversation',
          name: '交流群',
          component: ConversationView
        },
        {
          path: 'feedback',
          name: '软件反馈',
          component: FeedBackView
        },
        {
          path: 'update',
          name: '软件更新',
          component: UpdateVIew
        },
        {
          path: 'donation',
          name: '捐赠',
          component: DonationView
        }
      ]
    }
  ],
})

export default router
