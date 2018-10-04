const Sequelize = require('sequelize');
const Config = require('../config');
const config = new Config(process.env.NODE_ENV);

class Database {

    constructor() {
        this.Sequelize = Sequelize;
        this.sequelize = this.setup();
        this.model = this.mountModels(this.sequelize, this.Sequelize);
    }

    setup() {
        return new Sequelize(config.getDatabase(), config.getUsername(), config.getPassword(), {
            host: config.getAddress(),
            dialect: 'mysql',
            define: {
                timestamps: true
            },
            pool: {
                max: 10,
                min: 0,
                idle: 300000
            },
            logging: false,
            operatorsAliases: false
        });
    }

    async initialDatabase() {
        this.sequelize
            .authenticate()
            .then(() => {
                console.log('\x1b[31m', 'System:', '\x1b[37m', 'Connection has been established successfully.');
            })
            .catch(err => { console.error('\x1b[31m', 'System:', '\x1b[37m', 'Unable to connect to the database:', err); });
    }

    async mountModels(sequelize, DataTypes) {
        const model = {};

        model.users = require('./models/Users')(sequelize, DataTypes);
        model.colors = require('./models/Colors')(sequelize, DataTypes);
        model.sizes = require('./models/Sizes')(sequelize, DataTypes);

        await this.mountSyncTable(model);
        await this.mountModelRelations(model);
        return model;
    }

    async mountSyncTable(model) {
        await model.users.sync();
        await model.colors.sync();
        await model.sizes.sync();
    }


    async mountModelRelations(model) {

    }
}

module.exports = new Database();