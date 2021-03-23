"use strict";

const fs = require("fs");
const path = require("path");
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
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "mysql"
	}
}[env];

let sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);


// UNE FOIS LA BASE DE DONNEES CREE MERCI DE DECOMMENTER LE BOUT DE CODE CI-DESSOUS AVANT DE LANCER LE SERVEUR
// ET REMPLACER LES VALEURS SOUHAITEES POUR CREER UN COMPTE MODERATEUR
// !! LA VALEUR DEFAULT , ET LES 4 DERNIERES VALEURS DOIVENT RESTER TELS QUELLES
// Par sécurité le mot de passe doit contenir au minimum 8 caractères dont une lettre majuscule,une minuscule,un chiffre et un caractere special(voir l'exemple)

////////////////////////////////////////////////////////////////////////////// A DECOMMENTER POUR CREER LE COMPTE ADMINISTRATEUR //////////////////////////////////////////////////////////////////////////////

// const password = pw => bcrypt.hashSync(pw, 10);
// const privilegedUser = sequelize.query(
// 	`INSERT INTO Users (id,email,username,password,isAdmin,createdAt,updatedAt,latent)
// 	VALUES (DEFAULT,"adminaccount@admin.com","Admin Account","${password(
// 		"Test@mdp00"
// 	)}"
// 		,1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1)`
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

module.exports = db;
