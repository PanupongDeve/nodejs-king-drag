module.exports = (sequelize, DataTypes) => {
    return sequelize.define('groups', {
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
        discountA1: {
            field: 'discount_A1',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        discountA2: {
            field: 'discount_A2',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        discountB1: {
            field: 'discount_B1',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        discountB2: {
            field: 'discount_B2',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        discountC1: {
            field: 'discount_C1',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        discountC2: {
            field: 'discount_C2',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        qtyA: {
            field: 'qty_A',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        qtyB: {
            field: 'qty_B',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        qtyC: {
            field: 'qty_C',
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        mixedColor: {
            field: 'mix_color',
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        mixedModel: {
            field: 'mix_model',
            type: DataTypes.BOOLEAN,
            defaultValue: false
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