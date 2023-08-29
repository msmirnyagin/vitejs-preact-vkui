import {
  RouteWithRoot,
  createHashRouter,
} from '@vkontakte/vk-mini-apps-router';

const routes: RouteWithRoot[] = [
  {
    path: '/', // Путь
    panel: 'home_panel', // Желаемый Panel
    view: 'default_view', // Желаемый View
    root: 'default_root', // Желаемый Root
  },
  {
    path: `/about`,
    panel: 'about_panel',
    view: 'default_view',
    root: 'default_root',
  },
  {
    path: `/user`,
    modal: 'user_modal', // Модальное окно
    panel: 'home_panel',
    view: 'default_view',
    root: 'default_root',
  },
];

const router = createHashRouter(routes);

export default router;
