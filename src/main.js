import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

// Pages
import App from './App.vue';
import Home from './views/home.vue';
import About from './views/about.vue';
import Calendar from './views/Calendar.vue';
import FAQ from './views/faq.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Calendar', path: '/calendar', component: Calendar },
  { name: 'FAQ', path: '/faq', component: FAQ },
  { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);

app.use(router);
app.mount('#app');
