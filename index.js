const prompt = require('prompt-sync')()

// let test = ["abricot", "fraise", "mangue", "pasteque"]
// for (let index = 0; index < test.length; index++) {

//     if (test[index] == "mangue") {
//         console.log(test[index]);
//         break;
//     }
// }


// TD-4 tableaux


// // EXO 1
// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : " ))    
//     choices.push(choice)
// }



//  function sommeTableau(chiffres) {
//     let total = 0

//     for (let i = 0; i < chiffres.length; i++) {
//         total = total + chiffres[i]

//     }
// return total
// }
// console.log(sommeTableau(choices));


// EXO 2 

// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : "))
//     choices.push(choice)
// }



// function getEvenNumbers(chiffres) {
//     let evenNumbers = []
//     for (let i = 0; i < chiffres.length; i++) {
//         if (isEven(chiffres[i])) {
//             evenNumbers.push(chiffres[i])
//         }
//     }
//     return evenNumbers
// }
// function isEven(number) {
//     return number % 2 === 0
// }

// console.log(getEvenNumbers(choices));


// EXO 3

// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : "))
//     choices.push(choice)
// }

// function bigger(chiffres) {
//     let max = 0
//     for (let i = 0; i < chiffres.length - 1; i++) {


//         if (max > chiffres[i] && max > chiffres[i + 1]) {
//             continue
//         }
//         if (chiffres[i] > chiffres[i + 1]) {
//             max = chiffres[i]
//         }
//         else {
//             max = chiffres[i + 1]
//         }
//     }
//     return max
// }
// console.log(bigger(choices));

// VERSION 2 :


// function bigger(chiffres) {
//     let max = chiffres[0]
//     for (let i = 1; i < chiffres.length; i++) {
//         if (max < chiffres[i]) {
//             max = chiffres[i]
//         }
//     }
//     return max
// }


// console.log(bigger(choices));


// EXO 4

// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : "))
//     choices.push(choice)
// }

// function reverse(chiffres) {
//     let reversedArray = []
//     for (let i =  chiffres.length - 1; i >= 0 ; --i) {
//      reversedArray.push(chiffres[i])  
//     }
//     return reversedArray
// }
// console.log(reverse(choices));

// TD 4 LES TABLEAUX

// EXO 1

// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : " ))    
//     choices.push(choice)
// }



//  function sommeTableau(chiffres) {
//     let total = 0

//     for (let i = 0; i < chiffres.length; i++) {
//         total = total + chiffres[i]

//     }
// return total
// }
// console.log(sommeTableau(choices));


// EXO 2

// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : "))
//     choices.push(choice)
// }

// function sommeTableau(chiffres) {
//     let total = 0

//     for (let i = 0; i < chiffres.length; i++) {
//         total += chiffres[i]

//     }
//     return total
// }

// function produitTableau(chiffres) {
//     let total = 1
//     for (let k = 0; k < chiffres.length; k++) {
//         total *= chiffres[k]

//     }
//     return total
// }

// function moyenneTableau(chiffres) {
//     let total = sommeTableau(chiffres);
//     return total / chiffres.length;
// }

// let somme = sommeTableau(choices);
// let produit = produitTableau(choices);
// let moyenne = moyenneTableau(choices);


// console.log("Somme:", somme);
// console.log("Produit:", produit);
// console.log("Moyenne:", moyenne);

// EXO 3

// let choices = []
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt(" Entrez un nombre : " ))    
//     choices.push(choice)
// }
// let time = Number(prompt("Entrez un chiffre de 0 à 9 : "))


//  function timesAppear(chiffres, target) {
//     let compteur = 0;

//     for (let i = 0; i < chiffres.length; i++) {
//         if (chiffres[i] === target) {
//             compteur++
//         }

//     }
// return compteur
// }
// let result = timesAppear(choices, time);
// console.log(`Le chiffre ${time} apparaît ${result} fois.`);


// EXO 4

// let choices = [];
// for (let j = 0; j < 5; j++) {
//     let choice = Number(prompt("Entrez un nombre : "));
//     choices.push(choice);
// }

// let newElement = Number(prompt("Entrez un nouveau nombre à insérer : "));
// let position = prompt("À quelle position voulez-vous l'insérer ? (début, milieu, fin) : ").toLowerCase();

// function insertElement(array, element, pos) {
//     if (pos === "debut") {
//         array.unshift(element); 
//     } else if (pos === "milieu") {
//         let middleIndex = Math.floor(array.length / 2);
//         array.splice(middleIndex, 0, element); 
//     } else if (pos === "fin") {
//         array.push(element); 
//     } else {
//         console.log("Position invalide. Aucune insertion effectuée.");
//     }
// }

// insertElement(choices, newElement, position);
// console.log("Tableau après insertion :", choices);


// EXO 5

// function removeEL(tab, el) {
//     let result = []
//     for (let i = 0; i < tab.length; i++) {
//      if (tab[i] != el) {
//         result.push(tab[i])
//      }

//     }
//     return result
// }
// console.log(removeEL([5, 4, 8, 9, 10],9));



// EXO 6 

// [5, 8, 9, 7, 6]

// function triABulle(tab) {
//     for (let i = 0; i < tab.length; i++) {
//         let minIndex = i

//         for (let j = i + 1; j < tab.length; j++) {
//             if (tab[j] < tab[minIndex]) {
//                 minIndex = j
//             }

//         }
//         if (minIndex != i) {
//             let temp = tab[i]
//             tab[i] = tab[minIndex]
//             tab[minIndex] = temp
//         }
//     }
//     return tab
// }

// console.log(triABulle[5, 8, 9, 7, 6]);




// function schtroumpf(tab1, tab2) {
//     let result = 0
//     for (let i = 0; i < tab1.length; i++) {
// for (let j = 0; j < tab2.length; j++) {
// result = result + tab1[i] *tab2[j]
    
// }
        
//     }
//    return result
// }


// console.log(schtroumpf([2, 4, 5],[3, 1]));



// function classe(tab) {
//     let sum = 0
//     let moy = 0
//     let max = 0
//     let pos = null
//     let supNmb = 0
//     for (let i = 0; i < tab.length; i++) {
//       sum = sum + tab[i]
//       if (tab[i] > max) {
//         max = tab[i]
//         pos = i + 1 
//       }
        
//     }
//     moy = sum / tab.length
//     for (let j = 0; j < tab.length; j++) {
//         if (tab[i] > moy) {
//             supNmb ++
//         }
        
//     }
//     return "La moyenne de la classe est de : " + moy + "la note maximum est de : " + max + "a la "
// }



// MATRICE

// let listCourse = [
//     ["courgette", "concombre", "citrouille"],
// ["pomme", "poire", "kiwi"],
// ["lait", "oeuf", "couche"]
// ]


// for (let i = 0; i < listCourse.length; i++) {
// for (let j = 0; j < listCourse[i].length; j++) {
//     console.log(listCourse[i][j]);
    
    
// }
    
// }




// exo matrice

// let questions = ["Quelle est la capitale d'Italie ? ", "Quel est le composant dont le symbole est O ? "]