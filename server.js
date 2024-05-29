const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let cart = {
    total: 0,
    items: []
};

app.post('/add-to-cart', (req, res) => {
    const { id, price, quantity } = req.body;
    if (!id || !price || !quantity) {
        return res.status(400).send({ error: 'Missing item details' });
    }

    const itemTotal = price * quantity;
    cart.total += itemTotal;
    cart.items.push({ id, price, quantity, itemTotal });

    res.status(200).send(cart);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

