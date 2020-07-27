import React, {useEffect, useState} from 'react';

import Body from './body';
import Header from './header';

const App = () => {
  const titleList = [
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
  ];
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4202/music')
      .then(res => res.json())
      .then(o => {
        setTimeout(() => setData(o), 3000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="vdom-grid">
      <Header titleList={titleList} />
      <Body data={data} titleList={titleList} />
    </div>
  );
};

export default App;
