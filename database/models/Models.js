module.exports = (sequelize, DataTypes) => {
    return sequelize.define('models', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        groupId: {
            field: 'group_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        code: {
            field: 'code',
            type: DataTypes.STRING(191),
            allowNull: false
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        softDelete: {
            field: 'soft_delete',
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
    }, {
            indexes: [
                {
                    fields: ['group_id']
                }
            ]
        })
};