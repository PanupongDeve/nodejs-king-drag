const express = require('express');
const router = express.Router();
const modelPromise = require('../database').model;
const response = require('../helpers/Response');
const service = require('../helpers/Service');

class GroupController {

    constructor() {
        this.router = router;
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getById);
        this.router.post('/', this.create);
        this.router.post('/users/', this.createUserGroup);
        this.router.patch('/:id', this.update);
        this.router.delete('/soft/:id', this.softDelete);
        this.router.delete('/:id', this.delete);
    }

    async getAll(req, res) {
        /**
        * Get all
        */
        const model = await Promise.resolve(modelPromise);
        const query = { include: [{ model: model.models }] }
        const result = await model.groups.findAll(query);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async getById(req, res) {
        /**
        * Get by id
        * @param  {Number} id id of object
        */
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        const query = { include: [{ model: model.models }] }
        const result = await model.groups.findById(id, query);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async create(req, res) {
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.groups.create(req.body);
            return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async createUserGroup(req, res) {
        const model = await Promise.resolve(modelPromise);
        const exist = await model.userGroup.findAll({ where: { groupId: req.body.groupId, userId: req.body.userId } });
        if (exist && !!exist.length) return await response.push(res, { status: 400, result: 'duplicate data' }, 400);
        try {
            const result = await model.userGroup.create(req.body);
            return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.groups.update(req.body, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async softDelete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.groups.update({ softDelete: 1 }, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.groups.destroy(id);
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }
}

module.exports = new GroupController().router;