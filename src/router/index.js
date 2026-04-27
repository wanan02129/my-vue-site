import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Demo from '@/views/Demo.vue'
import Services from '@/views/Services.vue'
import Contact from '@/views/Contact.vue'
import Demo1 from '@/views/demo/Demo1.vue'
import Demo2 from '@/views/demo/Demo2.vue'
import Demo3 from '@/views/demo/Demo3.vue'
import Demo4 from '@/views/demo/Demo4.vue'
import Demo5 from '@/views/demo/Demo5.vue'
import Demo6 from '@/views/demo/Demo6.vue'
import Demo7 from '@/views/demo/Demo7.vue'
import Demo8 from '@/views/demo/Demo8.vue'
import Demo9 from '@/views/demo/Demo9.vue'
import Demo10 from '@/views/demo/Demo10.vue'
import Demo11 from '@/views/demo/Demo11.vue'
import Demo12 from '@/views/demo/Demo12.vue'
import Demo13 from '@/views/demo/Demo13.vue'
import Demo14 from '@/views/demo/Demo14.vue'
import Demo15 from '@/views/demo/Demo15.vue'
import Demo16 from '@/views/demo/Demo16.vue'
import Demo17 from '@/views/demo/Demo17.vue'
import Demo18 from '@/views/demo/Demo18.vue'
import Demo19 from '@/views/demo/Demo19.vue'
import Demo20 from '@/views/demo/Demo20.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/demo', name: 'demo', component: Demo, 
    children: [
    { path: 'demo1', name: 'demo1', component: Demo1},
    { path: 'demo2', name: 'demo2', component: Demo2},
    { path: 'demo3', name: 'demo3', component: Demo3},
    { path: 'demo4', name: 'demo4', component: Demo4},
    { path: 'demo5', name: 'demo5', component: Demo5},
    { path: 'demo6', name: 'demo6', component: Demo6},
    { path: 'demo7', name: 'demo7', component: Demo7},
    { path: 'demo8', name: 'demo8', component: Demo8},
    { path: 'demo9', name: 'demo9', component: Demo9},
    { path: 'demo10', name: 'demo10', component: Demo10},
    { path: 'demo11', name: 'demo11', component: Demo11},
    { path: 'demo12', name: 'demo12', component: Demo12},
    { path: 'demo13', name: 'demo13', component: Demo13},
    { path: 'demo14', name: 'demo14', component: Demo14},
    { path: 'demo15', name: 'demo15', component: Demo15},
    { path: 'demo16', name: 'demo16', component: Demo16},
    { path: 'demo17', name: 'demo17', component: Demo17},
    { path: 'demo18', name: 'demo18', component: Demo18},
    { path: 'demo19', name: 'demo19', component: Demo19},
    { path: 'demo20', name: 'demo20', component: Demo20},
  ]},
  { path: '/services', name: 'services', component: Services },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
