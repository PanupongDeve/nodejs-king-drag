module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user_group', {
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        groupId: {
            field: 'group_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        discountA: {
            field: 'discount_A',
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        discountB: {
            field: 'discount_B',
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