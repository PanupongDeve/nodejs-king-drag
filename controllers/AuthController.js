const express = require('express');
const router = express.Router();
const modelPromise = require('../database').model;
const response = require('../helpers/Response');
const service = require('../helpers/Service');

class AuthController {
    constructor() {
        this.router = router;
        this.router.post('/', this.authen);
    }

    async authen(req, res) {
        const { username, password } = req.body;
        const model = await Promise.resolve(modelPromise);
        const user = await model.users.find({ where: { username, softDelete: false } });
        if (!user) return await response.push(res, { status: 400, result: 'invalid username, password' }, 400);
        const isCorrectPassword = await service.comparePassword(password, user.password);
        if (!isCorrectPassword) return await response.push(res, { status: 400, result: 'invalid email, password' }, 400);
        const token = await service.generateToken(user);
        return await response.push(res, { status: 200, result: { user, token } }, 200);
    }
}

module.exports = new AuthController().router;