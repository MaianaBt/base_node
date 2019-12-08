module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('orders', {
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.STRING
        },
        outbound_flight: {
            type: DataTypes.TEXT('long')
        },
        inbound_flight: {
            type: DataTypes.TEXT('long')
        },
        flight_tickets: {
            type: DataTypes.JSON
        },
        clear_sale_id: {
            type: DataTypes.STRING
        },
        origin: {
            type: DataTypes.STRING
        },
        utm_source: {
            type: DataTypes.STRING
        },
        utm_medium: {
            type: DataTypes.STRING
        },
        utm_campaign: {
            type: DataTypes.STRING
        }
    }, {});

    Orders.associate = function (models) {
        Orders.hasMany(models.payment, { foreignKey: 'order_id' });
        Orders.belongsTo(models.user, { foreignKey: 'user_id' });
        Orders.belongsTo(models.search, { foreignKey: 'search_id' });
    };

    return Orders;
};