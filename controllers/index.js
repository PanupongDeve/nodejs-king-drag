const bodyParser = require('body-parser');

const AuthController = require('./AuthController');
const UserController = require('./UserController');
const ColorController = require('./ColorController');
const SizeController = require('./SizeController');

class Controller {

    constructor() {
        this.app = null;
    }

    initialApp(app) {
        this.app = app;
    }

    initialController() {
        console.log('\x1b[31m', 'System:', '\x1b[37m', 'Initial Controller has been established successfully.');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use('/api/users', UserController)
        this.app.use('/api/authentication', AuthController)
        this.app.use('/api/colors', ColorController)
        this.app.use('/api/sizes', SizeController)
    }
}

module.exports = new Controller();