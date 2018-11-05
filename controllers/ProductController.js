const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const modelPromise = require('../database').model;
const response = require('../helpers/Response');
const service = require('../helpers/Service');
const middleware = require('../middlewares');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage });

class ProductController {

    constructor() {
        this.router = router;
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getById);
        this.router.post('/', middleware.accessProtection, this.create);
        this.router.post('/upload', upload.single('image'), middleware.accessProtection, this.upload);
        this.router.patch('/:id', middleware.accessProtection, this.update);
        this.router.delete('/soft/:id', middleware.accessProtection, this.softDelete);
        this.router.delete('/:id', middleware.accessProtection, this.delete);
    }

    async getAll(req, res) {
        /**
        * Get all
        */
        const model = await Promise.resolve(modelPromise);
        const query = { include: [{ model: model.groups }, { model: model.models }, { model: model.colors }, { model: model.sizes }] };
        const result = await model.products.findAll(query);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async getById(req, res) {
        /**
        * Get by id
        * @param  {Number} id id of object
        */
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        const query = { include: [{ model: model.groups }, { model: model.colors }, { model: model.sizes }] };
        const result = await model.products.findById(id, query);
        return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
    }

    async create(req, res) {
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.products.create(req.body);
            return await response.push(res, { status: result ? 200 : 400, result }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.products.update(req.body, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async softDelete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.products.update({ softDelete: 1 }, { where: { id } });
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const model = await Promise.resolve(modelPromise);
        try {
            const result = await model.products.destroy(id);
            return await response.push(res, { status: result ? 200 : 400, result: result ? 'Successful' : 'Failure' }, result ? 200 : 400);
        } catch (ex) {
            return await response.push(res, { status: 400, result: ex }, 400);
        }
    }

    async upload(req, res) {
        let { file } = req;
        file.path = file.path.substring(7); //  --> to cut /public
        if (!file) return await response.push(res, { status: 400, result: 'ต้องมีอย่างน้อย 1 ไฟล์' }, 401);
        return await response.push(res, { status: 200, result: '/' + file.path }, 200);
    }
}

module.exports = new ProductController().router;