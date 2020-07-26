fetch('http://localhost:4202/music')
  .then(res => res.json())
  .then(o => console.log(o));
