module.exports = (sequelize, DataTypes) => {
    const UserWhiteLabels = sequelize.define('users_white_labels', {
        created_at: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {});

    UserWhiteLabels.associate = function (models) {
        UserWhiteLabels.belongsTo(models.user, { foreignKey: 'user_id' });
        UserWhiteLabels.belongsTo(models.white_label, { foreignKey: 'white_label_id' });
    };

    return UserWhiteLabels;
};