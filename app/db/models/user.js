'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('users', {
		email: DataTypes.STRING,
		name: DataTypes.STRING,
		birth_date: DataTypes.DATE,
		facebook: DataTypes.STRING,
		password: DataTypes.STRING,
		gender: DataTypes.STRING,
		phone: DataTypes.STRING,
		referral_code: {
			type: DataTypes.STRING, unique: true
		},
		referral_link: DataTypes.STRING,
		address: DataTypes.JSON,
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
	}, {});

	User.associate = function (models) {
		User.hasMany(models.search, { foreignKey: 'user_id' });
		User.hasMany(models.user_white_label, { foreignKey: 'user_id' });
		User.hasMany(models.user_role, { foreignKey: 'user_id' });
		User.hasMany(models.user_agreement, { foreignKey: 'user_id' });
	};

	return User;
};
