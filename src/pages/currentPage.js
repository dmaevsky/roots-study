import welcome from './welcome.html';
import library from './library.html';
import lectures from './lectures.html';
import notFound from './404.html';

import makeRouter from '@ellx/router';

const pages = { welcome, library, lectures };
const titles = {
  welcome: 'Главная',
  library: 'Библиотека',
  lectures: 'Лекции'
}

export const router = makeRouter();

export function currentPage(path) {
  const pageKey = path.slice(1) || 'welcome';
  return {
    title: titles[pageKey] || 'Не найдено',
    body: pages[pageKey] || notFound
  }
}
