import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('Hi!');
});

app.listen(4000, () => {
  console.log('App listening on port 3000');
});
