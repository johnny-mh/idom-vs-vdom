import 'shared/grid.sass';

import {render} from './layout';

fetch('http://localhost:4202/music')
  .then(res => res.json())
  .then(o => {
    setTimeout(() => _render(o), 3000);
  });

function _render(data?: any) {
  render({
    el: document.querySelector('#root'),
    titleList: [
      'id',
      'name',
      'artist',
      'release',
      'type',
      'genre',
      'grade',
      'price',
      'downloadCount',
      'listenCount',
    ],
    data,
  });
}

_render();
