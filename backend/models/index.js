"use strict";

const fs = require("fs");
const path = require("path");
const { getMaxListeners } = require("process");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const bcrypt = require("bcrypt");
require("dotenv").config();

const db = {};

const config = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: "groupomania",
		host: "127.0.0.1",
		dialect: "mysql"
	}
}[env];

let sequelize;
// if (config.use_env_variable) {
// 	sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
// }

////////////////////////////////////////////////////////////////////////////// A DECOMMENTER POUR CREER LE COMPTE ADMINISTRATEUR //////////////////////////////////////////////////////////////////////////////
// const password = pw => bcrypt.hashSync(pw, 10);
// const privilegedUser = sequelize.query(
// 	`INSERT INTO Users (id,email,username,password,isAdmin,createdAt,updatedAt)
// 	VALUES (DEFAULT,"admin@admin.com","Admin Account","${password(
// 		"Admin@madmin00"
// 	)}"
// 		,1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`
// );


fs.readdirSync(__dirname)
	.filter(file => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(file => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
