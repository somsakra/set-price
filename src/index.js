import getPrice from './module.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', async (req, res) => {
  try {
    const result = await getPrice(req.body.symbol)
    res.send(result);
  } catch (error) {
    console.log(error)
  }

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

;
