const DBUtils = require('../../util/helpers/db-utils');

module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define('payments', {
        amount: DataTypes.FLOAT,
        amount_miles: DataTypes.INTEGER,
        amount_luggage: DataTypes.FLOAT,
        amount_detailed: DataTypes.JSON,
        installments: DataTypes.INTEGER,
        wirecard_timeout: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        type: {
            type: DataTypes.STRING,
            validate: {
                enum(value) {
                    DBUtils.enumValidate(value, [
                        'CREDIT_CARD',
                        'BANK_TRANSFER'
                    ]);
                }
            }
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'WAITING',
            validate: {
                enum(value) {
                    DBUtils.enumValidate(value, [
                        'WAITING',
                        'IN_ANALYSIS',
                        'PRE_AUTHORIZED',
                        'AUTHORIZED',
                        'CANCELLED'
                    ]);
                }
            }
        },
        receipt: DataTypes.STRING,
        discount: DataTypes.FLOAT,
        is_porto: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {});

    Payments.associate = function (models) {
        Payments.hasOne(models.moip_payment, { foreignKey: 'payment_id' });
        Payments.belongsTo(models.buyer, { foreignKey: 'buyer_id' });
        Payments.belongsTo(models.order, { foreignKey: 'order_id' });
        Payments.belongsTo(models.coupon, { foreignKey: 'coupon_id'});
        Payments.belongsTo(models.credits_events, { foreignKey: 'credit_event_id'});
        Payments.belongsTo(models.rebudget, { foreignKey: 'rebudget_id'});
    };

    return Payments;
};