import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Introducao from '../views/Introducao.vue';
import Contato from '../views/Contato.vue';
import Aluno from '../views/Aluno.vue';
import Atividades from '../views/Atividades.vue';
import Turmas from '../views/Turmas.vue';
import turmaView from '../components/turmaView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    notListed: true,
  },
  {
    path: '/about',
    name: 'Introdução',
    component: Introducao,
  },
  {
    path: '/activities',
    name: 'Atividades',
    component: Atividades,
  },
  {
    path: '/classes',
    name: 'Turmas',
    component: Turmas,
  },
  {
    path: '/student',
    name: 'Aluno',
    component: Aluno,
  },
  {
    path: '/contact',
    name: 'Contanto',
    component: Contato,
  },
  {
    path: '/tecnico/:id',
    name: 'Turma Técnico',
    props: true,
    component: turmaView,
    notListed: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
