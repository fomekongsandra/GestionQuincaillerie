/*categorie*/

CREATE TABLE `gesqainc_db`.`categories` ( `IdCategorie` INT(15) NOT NULL ,
 `NomCategorie` VARCHAR(100) NOT NULL ,
  PRIMARY KEY (`IdCategorie`)) ENGINE = MyISAM;

/*produits*/
  CREATE TABLE `gesqainc_db`.`produits` ( `IdProduit` INT(15) NOT NULL ,
   `NomProduit` VARCHAR(100) NOT NULL ,
    `CodeProduit` INT(15) NOT NULL ,
   `CodeBare` INT(15) NOT NULL ,
    PRIMARY KEY (`IdProduit`),
     UNIQUE (`NomProduit`)) ENGINE = MyISAM;

/*utilisateur*/
     CREATE TABLE `gesqainc_db`.`utilisateur` ( `IdUtilisateur` INT(15) NOT NULL ,
      `NomUtilisateur` VARCHAR(100) NOT NULL ,
       `Email` VARCHAR(100) NOT NULL ,
      `Password` VARCHAR(100) NOT NULL ,
       PRIMARY KEY (`IdUtilisateur`),
       UNIQUE (`NomUtilisateur`)) ENGINE = MyISAM;

/*client*/
       CREATE TABLE `gesqainc_db`.`client` ( `IdClient` INT(15) NOT NULL ,
        `NomClient` VARCHAR(100) NOT NULL ,
         `EmailClient` VARCHAR(100) NOT NULL ,
        `Telephone` VARCHAR(100) NOT NULL ,
         PRIMARY KEY (`IdClient`),
          UNIQUE (`NomClient`)) ENGINE = MyISAM; 