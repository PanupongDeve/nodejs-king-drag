module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        code: {
            field: 'code',
            type: DataTypes.STRING(191),
            allowNull: false,
            unique: 'compositeIndex'
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        groupId: {
            field: 'group_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        colorId: {
            field: 'color_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        sizeId: {
            field: 'size_id',
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isInt: true
            }
        },
        imagePath: {
            field: 'image_path',
            type: DataTypes.STRING(191),
            allowNull: true
        },
        price: {
            field: 'price',
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        priceA: {
            field: 'price_A',
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        priceB: {
            field: 'price_B',
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        remark: {
            field: 'remark',
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
                },
                {
                    fields: ['color_id']
                },
                {
                    fields: ['size_id']
                }
            ]
        })
};