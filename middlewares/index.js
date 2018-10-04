const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

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
}

module.exports = new Middleware();