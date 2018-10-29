const middleware = require('../middlewares');
const path = require('path');

const AuthController = require('./AuthController');
const UserController = require('./UserController');
const ColorController = require('./ColorController');
const SizeController = require('./SizeController');
const GroupController = require('./GroupController');
const ProductController = require('./ProductController');
const OrderController = require('./OrderController');
const ModelController = require('./ModelController');


class Controller {

    constructor() {
        this.app = null;
        this.rootPath = __dirname.split('/controllers')[0];
    }

    initialApp(app) {
        this.app = app;
    }

    initialController() {
        console.log('\x1b[31m', 'System:', '\x1b[37m', 'Initial Controller has been established successfully.');
        this.app.use('/api/authentication', AuthController);
        this.app.use('/api/users', middleware.accessProtection, UserController);
        this.app.use('/api/colors', middleware.accessProtection, ColorController);
        this.app.use('/api/sizes', middleware.accessProtection, SizeController);
        this.app.use('/api/groups', middleware.accessProtection, GroupController);
        this.app.use('/api/products', middleware.accessProtection, ProductController);
        this.app.use('/api/orders', middleware.accessProtection, OrderController);
        this.app.use('/api/models', middleware.accessProtection, ModelController);
        this.app.get('*', (req, res) => {
            res.sendFile(path.resolve(this.rootPath, 'client', 'build', 'index.html'))
        });
    }
}

module.exports = new Controller();