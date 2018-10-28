module.exports = (sequelize, DataTypes) => {
    return sequelize.define('orders', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        address: {
            field: 'address',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        messenger: {
            field: 'messenger',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        amount: {
            field: 'amount',
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        discount: {
            field: 'discount',
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            validate: {
                isDecimal: true
            }
        },
        tel: {
            field: 'tel',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        filePath: {
            field: 'file_path',
            type: DataTypes.STRING(191),
            allowNull: false
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
                    fields: ['user_id']
                }
            ]
        })
};