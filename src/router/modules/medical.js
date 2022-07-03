
import Layout from '@/layout'

const medicalRouter = {
  path: '/medical',
  meta: {
    title: '医务处',
    icon: 'nested',
    roles: ['medical']
  },
  component: Layout,
  children: [
    {
      path: 'surgery',
      meta: { title: '手术' },
      component: () => import('@/views/medical/surgery/index'), // Parent router-view
      children: [
        {
          path: 'dictionary',
          name: 'dictionary',
          meta: { title: '手术字典' },
          component: () => import('@/views/medical/surgery/dictionary/index')
        },
        {
          path: 'privilege',
          name: 'privilege',
          meta: { title: '手术授权' },
          component: () => import('@/views/medical/surgery/privilege/index')
        }
      ]
    }
  ]
}

export default medicalRouter
