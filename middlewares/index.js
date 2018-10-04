const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const service = require('../helpers/Service');
const response = require('../helpers/Response');

class Middleware {

    constructor() {
        this.app = null;
    }

    initialApp(app) {
        this.app = app;
    }

    initialMiddlewares() {
        console.log('\x1b[31m', 'System:', '\x1b[37m', 'Initial Middleware has been established successfully.');
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(compression());
    }

    async accessProtection(req, res, next) {
        try {
            const { authorization } = req.headers;
            if (!authorization) return await response.push(res, { status: 401, result: 'Unauthorized' }, 401);
            const result = await service.verifyToken(authorization);
            if (result) next();
        } catch (ex) {
            return await response.push(res, { status: 401, result: 'Unauthorized' }, 401);
        }
    }
}

module.exports = new Middleware();