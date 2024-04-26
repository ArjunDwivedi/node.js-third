const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
    const formHtml = `
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add item</button>
        </form>
        <form action="/product" method="POST">
            <input type="text" name="productsize">
            <button type="submit">product-size</button>
        </form>
    `;
    res.send(formHtml);
});
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/second');
});


app.use('/second', (req, res, next) => {
    res.send('Say hello to basics again');
});

app.listen(3000);
