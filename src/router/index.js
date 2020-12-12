import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Introducao from '../views/Introducao.vue';
import Contato from '../views/Contato.vue';
import Aluno from '../views/Aluno.vue';
import Robotica from '../views/Robotica.vue';
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
    name: 'Quem somos',
    component: Introducao,
  },
  {
    path: '/classes',
    name: 'Organização Curricular',
    component: Turmas,
  },
  {
    path: '/activities',
    name: 'Atividades Extra',
    component: Robotica,
  },
  {
    path: '/student',
    name: 'Mural',
    component: Aluno,
  },
  {
    path: '/contact',
    name: 'Contato',
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
