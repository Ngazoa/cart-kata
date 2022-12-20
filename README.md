# Kata-panier
projet  test Karta Panier de gestion des articles dans un panier  (ajout-retrait du panier, calcul des prix hors Taxes de
 TTc,recherche filtrée et le recapitulatif en angular)

 But de lapplication:
    - ajouter un nouveau produit dans le panier

    - retirer un un produit
    - afficher la liste des produits en rang de 3 en 3
    - filtrer la liste des produits en fonction de la categorie
    - calculer les differentes taxes et les prix HT, TTC puis les afficher
    - Afficher le recapitulatif
    - Filtrer la liste des produits

 Fonctionnement de l'application:
    - elle fonction suivant le principe MVC:
    - utilise la librairie Jasmine et Karma pour les testes Unitaires
    - utlise Observable pour lire les fichiers json 
    - Decompose en 4 composants 
          * composant product-list pour la liste des articles
          * composant details-list pour afficher les details du produit
          * card composant pour gerer la liste des articles ajoutees dans le panier ainsi que leur recapitulatif
          * le header composant
       compose de 2 services:
          * cartService 
          * productServce
  
 
 Comment installer :
   - cloner le projet en executant la commande: 
         git clone https://github.com/Ngazoa/Cart-Manage.gitgular\cart-project.git

   - lancer le CMD , positionnez vous dans la rice du projet cloner puis  executer la commande :
        ng serve pour demarrer l'application

   - Ensuite saisir dans le navigateur 
        http://localhost:4200/

   - Pour les tests , executer dans le CMD 
         ng test
