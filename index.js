const express = require('express');
const app = express();
const port = 3000;

//route
app.get('/', (req, res) => {
    //route logic
  res.send('Hello World!');
});

app.get('/products', (req, res) =>{
    //reoute logic
    res.send('Hello PRODUCTS!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});