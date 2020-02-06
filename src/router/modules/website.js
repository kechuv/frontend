import Home from '@/views/Home.vue';
const Detail = () => import(/* webpackChunkName: "detail" */ '@/components/website/ProductDetail.vue')

const routes = [
  {
    path: 'home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'product/:id',
        name: 'product detail',
        component: Detail,
        props: true
      }
    ]
  }
];

export default routes;