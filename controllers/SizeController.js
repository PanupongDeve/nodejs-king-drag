const express = require('express');
const router = express.Router();
const modelPromise = require('../database').model;
const response = require('../helpers/Response');
const service = require('../helpers/Service');
const middleware = require('../middlewares');

class SizeController {

    constructor() {
        this.router = router;
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getById);
        this.router.post('/', middleware.accessProtection, this.create);
        this.router.patch('/:id', middleware.accessProtection, this.update);
        this.router.delete('/soft/:id', middleware.accessProtection, this.softDelete);
        this.router.delete('/:id', middleware.accessProtection, this.delete);
    }

    async getAll(req, res) {
        /**
        * Get all
        */
        const model = await Promise.resolve(modelPromise);
        const result = await model.sizes.findAll();
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async getById(req, res) {
        /**
        * Get by id
        * @param  {Number} id id of object
        */
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        const result = await model.sizes.findById(id);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async create(req, res) {
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.sizes.create(req.body);
            return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.sizes.update(req.body, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async softDelete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.sizes.update({ softDelete: 1 }, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.sizes.destroy(id);
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }
}

module.exports = new SizeController().router;