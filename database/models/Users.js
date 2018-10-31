module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        address: {
            field: 'address',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        username: {
            field: 'username',
            type: DataTypes.STRING(191),
            allowNull: false,
            unique: 'compositeIndex'
        },
        tel: {
            field: 'tel',
            type: DataTypes.STRING(191),
            allowNull: true,
            defaultValue: null,
        },
        group: {
            field: 'group',
            type: DataTypes.ENUM('Default', 'Member A', 'Member B', 'Admin'),
            allowNull: false,
            defaultValue: 'Default',
            validate: {
                isIn: [['Default', 'Member A', 'Member B', 'Admin']]
            }
        },
        softDelete: {
            field: 'soft_delete',
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
};