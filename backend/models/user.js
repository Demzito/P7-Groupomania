"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 */
		static associate(models) {
			// define association here
			models.User.hasMany(models.Post);
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				required: true
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				required: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				required: true
			},
			isAdmin: {
				type: DataTypes.BOOLEAN
			},
			latent: {
				type: DataTypes.BOOLEAN
			}
		},
		{
			sequelize,
			modelName: "User"
		}
	);
	return User;
};
