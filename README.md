# Projet 7 : Kasa

Septième projet du parcours "Développeur web" chez OpenClassroom. L'objectif est de créer une application de location immobilière avec React.

<img src="https://user-images.githubusercontent.com/98737248/232500465-0d743860-a4cd-4af0-bcf9-bc2cf2f698b3.svg" style="height:35px;"> [![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

![217819401-d55df576-8b36-4faf-9951-6ac00f07cf95](https://user-images.githubusercontent.com/98737248/232498896-5657dce3-82a1-49c3-a50c-fd428f3747ac.png)

## Qui est Kasa ?

Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

## Demande du client
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Ils ont lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. 

## Objectifs

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes, le site doit être responsives. 

## Technologies

- React.js
- Sass

## Contraintes fonctionnelles

- Pour le défilement des photos dans la galerie (composant Gallery) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
  - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Installation du projet

`React` et `npm` doivent être installés localement sur votre machine.

Pour installer et lancer le projet sur votre machine :

```terminal
npm install
npm start
```