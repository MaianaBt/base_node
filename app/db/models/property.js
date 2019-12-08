module.exports = (sequelize, DataTypes) => {
    const properties = sequelize.define('properties', {
        key: {
            type: DataTypes.STRING,
            unique: true
        },
        value: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {});

    return properties;
};