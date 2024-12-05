function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici
 //ici voici les groupes des equipes de qualifications de la CAN 2025 au Maroc seulement les deux premiers de chaque groupe participeront à la CAN au maroc 
 
//  const qualifCAN2025 [
//   groupe A : Comores 12 points, Tunisie 10 points
//  ];