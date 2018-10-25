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
        model.groups = require('./models/Groups')(sequelize, DataTypes);
        model.products = require('./models/Products')(sequelize, DataTypes);
        model.orders = require('./models/Orders')(sequelize, DataTypes);
        model.models = require('./models/Models')(sequelize, DataTypes);

        model.orderProduct = require('./models/orderProduct')(sequelize, DataTypes);
        model.userGroup = require('./models/userGroup')(sequelize, DataTypes);

        await this.mountSyncTable(model);
        await this.mountModelRelations(model);
        return model;
    }

    async mountSyncTable(model) {
        await model.users.sync();
        await model.colors.sync();
        await model.sizes.sync();
        await model.groups.sync();
        await model.products.sync();
        await model.orders.sync();
        await model.orderProduct.sync();
        await model.userGroup.sync();
        await model.models.sync();
    }


    async mountModelRelations(model) {
        model.products.belongsTo(model.groups);
        model.products.belongsTo(model.colors);
        model.products.belongsTo(model.sizes);

        model.orders.belongsTo(model.users);

        model.groups.hasMany(model.models);
        model.models.belongsTo(model.groups);

        model.products.belongsTo(model.models);

        model.orders.belongsToMany(model.products, { through: { model: model.orderProduct } });
        model.products.belongsToMany(model.orders, { through: { model: model.orderProduct } });

        model.users.belongsToMany(model.groups, { through: { model: model.userGroup } });
        model.groups.belongsToMany(model.users, { through: { model: model.userGroup } });
    }
}

module.exports = new Database();