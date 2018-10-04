const express = require('express');
const router = express.Router();
const modelPromise = require('../database').model;
const response = require('../helpers/Response');
const service = require('../helpers/Service');

class OrderController {

    constructor() {
        this.router = router;
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getById);
        this.router.post('/', this.create);
        this.router.patch('/:id', this.update);
        this.router.delete('/soft/:id', this.softDelete);
        this.router.delete('/:id', this.delete);
    }

    async getAll(req, res) {
        /**
        * Get all
        */
        const model = await Promise.resolve(modelPromise);
        const query = { include: [{ model: model.products, include: [{ model: model.groups }, { model: model.colors }, { model: model.sizes }] }] };
        const result = await model.orders.findAll(query);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async getById(req, res) {
        /**
        * Get by id
        * @param  {Number} id id of object
        */
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        const query = { include: [{ model: model.products, include: [{ model: model.groups }, { model: model.colors }, { model: model.sizes }] }] };
        const result = await model.orders.findById(id, query);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async create(req, res) {
        const model = await Promise.resolve(modelPromise);
        const { products } = req.body;
        try {
            const result = await model.orders.create(req.body);
            if (products && products.length) {
                await products.reduce((p, e, i) => p.then(async () => {
                    e.orderId = result.id;
                    return await model.orderProduct.create(e);
                }), Promise.resolve());
            }
            return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.orders.update(req.body, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async softDelete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.orders.update({ softDelete: 1 }, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.orders.destroy(id);
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }
}

module.exports = new OrderController().router;