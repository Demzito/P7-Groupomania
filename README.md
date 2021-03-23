Développement d'un réseau social entreprise  



STACK USED :

Front-end : react, context api, react router, json web token. 

Back-end : node.js express, sequelize, json web token helmet et bcrypt . 

Base de donnée : MySql



INSTALLATION DU PROJET :

1) Clôner le projet. 

2) Installer les dépendances cités plus-haut.

3) Importer la base de donnée « groupomania » sur phpMyAdmin à partir du fichier groupomania.sql contenu dans le dossier Backend.

4) Dans le dossier backend => models => index.js décommentez et suivez les instructions pour créer un compte modérateur(voir également l'exemple ci-dessous).
- l.42      VALUES (DEFAULT,"votre_adresse_mail","le_pseudo","${password(
   		      "le_mot_de_passe@00" 
            )}"
            
5) Vous pouvez maintenant lancer Nodemon dans votre dossier backend. 

5) Pour le frontend déplacez vous dans le dossier frontend à l’aide de la commande cd frontend puis npm start. 

6) Vous pouvez maintenant vous connecter avec votre compte modérateur ou créer un autre compte normal.
