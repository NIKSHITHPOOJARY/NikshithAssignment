const request = require('supertest');
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

describe('POST /add-to-cart', () => {
    it('it will add items to the cart and update the total', async () => {
        const response = await request(app)
            .post('/add-to-cart')
            .send({ id: '1', price: 10, quantity: 2 });

        expect(response.status).toBe(200);
        expect(response.body.total).toBe(20);
        expect(response.body.items.length).toBe(1);
        expect(response.body.items[0]).toEqual({ id: '1', price: 10, quantity: 2, itemTotal: 20 });
    });

    it('Will return 400 if item details are missing', async () => {
        const response = await request(app)
            .post('/add-to-cart')
            .send({ id: '1', price: 10 });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Missing item details');
    });
});
