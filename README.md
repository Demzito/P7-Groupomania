Développement d'un réseau social entreprise  

STACK :

Front-end : react, context api, react router, json web token. 

Back-end : node.js express, sequelize, json web token helmet et bcrypt . 

Base de donnée : MySql, Xampp

Installation du projet :

1) Clôner le projet 

2) Installer les dépendances (assurez vous d’avoir mySql)


3) créer localement la base de donnée « groupomania » à partir du fichier groupomania.sql contenu dans le dossier Backend.
     - command : DATABASE CREATE GROUPOMANIA



4) Dans le dossier backend => config => config.json décommentez et mettez-y votre username et votre mot de passe(voir exemple ci-dessous) ou conservez ceux d'origine

- l.42      VALUES (DEFAULT,"votre_adresse_mail","le_pseudo","${password(
   		      "le_mot_de_passe@00" 
            )}"


5) Dans le dossier backend => models => index.js suivez les instructions pour créer un compte modérateur , enregistrez les modifications , puis lancer nodemon. 

6) Pour le frontend déplacez vous dans le dossier frontend à l’aide de la commande cd frontend puis npm start 

7) Vous pouvez maintenant vous connecter avec votre compte modérateur ou créer un autre compte normal
