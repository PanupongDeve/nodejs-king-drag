module.exports = (sequelize, DataTypes) => {
    return sequelize.define('order_product', {
        orderId: {
            field: 'order_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        productId: {
            field: 'product_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        discount: {
            field: 'discount',
            type: DataTypes.INTEGER(10),
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
    })
};