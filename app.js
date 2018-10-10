const express = require('express');
const database = require('./database');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

module.exports = class App {

    constructor(config) {
        this.config = config;
        this.port = this.config.getPort();
        this.express = express;
        this.app = this.express();
    }

    async mountDatabase() {
        await database.initialDatabase();
    }

    mountMiddleware() {
        middlewares.initialApp(this.app);
        middlewares.initialMiddlewares();
    }

    mountController() {
        controllers.initialApp(this.app);
        controllers.initialController();
    }

    async start() {
        this.app.listen(this.port, () => {
            console.log('\x1b[31m', 'System:', '\x1b[37m', `Running \x1b[32m${this.config.getAddress()}\x1b[37m Server on port \x1b[32m${this.port}\x1b[37m`)
        });
        await this.mountDatabase();
        await this.mountMiddleware();
        await this.mountController();

    }
}