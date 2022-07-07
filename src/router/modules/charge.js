
import Layout from '@/layout'

const chargeRouter = {
  path: '/charge',
  meta: {
    title: '收费室',
    icon: 'nested',
    roles: ['charge']
  },
  component: Layout,
  children: [
    {
      path: 'escort',
      meta: { title: '电子陪护', icon: 'documentation' },
      component: () => import('@/views/charge/escort/index')
    },
    {
      path: 'invoice',
      meta: { title: '电子发票', icon: 'documentation' },
      component: () => import('@/views/charge/invoice/index')
    }
  ]
}

export default chargeRouter
