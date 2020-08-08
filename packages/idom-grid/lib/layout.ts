import {elementClose, elementOpen, patch, text} from 'incremental-dom';

type Data = {[key: string]: any}[];

export function render(options: {
  el: HTMLElement;
  titleList: string[];
  data?: Data;
}) {
  const {el, titleList, data} = options;

  patch(el, () => {
    layoutOpen();

    header(titleList);

    if (data) {
      body({data, titleList});
    }

    layoutClose();
  });
}

function layoutOpen() {
  elementOpen('div', '', ['id', 'idom-grid', 'class', 'grid']);
}

function layoutClose() {
  elementClose('div');
}

function header(titleList: string[]) {
  elementOpen('div', '', ['class', 'tr header']);
  titleList.forEach(title => {
    elementOpen('div', '', ['class', 'th']);
    text(title);
    elementClose('div');
  });
  elementClose('div');
}

function body(options: {data: {[key: string]: any}[]; titleList: string[]}) {
  const {data, titleList} = options;

  elementOpen('div', '', ['class', 'scroll']);

  data.forEach(datum => {
    elementOpen('div', datum.id, ['class', 'tr']);

    titleList.forEach(title => {
      const col = datum[title];

      if (!!col) {
        elementOpen('div', title, ['class', 'td']);
        text(col);
        elementClose('div');
      }
    });

    elementClose('div');
  });

  elementClose('div');
}
