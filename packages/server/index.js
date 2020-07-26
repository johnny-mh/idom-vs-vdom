const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));
app.use(cors());

const music = require('./music.json');

app.get('/music', (_, res) => {
  res.json(music);
});

app.listen(4202, () => console.log('server listening on port 4202'));
