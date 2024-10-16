const prompt = require("prompt-sync")()

// EXO 1


// let choice = prompt("Entrez un prenom entre Alice , Pierre, Quentin, Louis ");
// function sayHello(name) {
//     if (name === "Alice") {
//         return "Bonjour " + name ;
//     }else {
//         return"Je te dis pas bonjour";  
//     }
// }
// console.log(sayHello(choice));

// EXO 2

// let choice = parseInt(prompt("Entrez un age :  "))

// function isadult(age) {
//     if (age >= 18) {
//         return true
//     }
//     else {
//         return false
//     }
// }console.log(isadult(choice));


// EXO 3

// let choice = prompt("Entrez un mot :  ")
// function inverserMot(word) {
//     return word.split("").reverse().join("");

// }
// console.log("Le mot ecris à l'envers donne " + inverserMot(choice));



// Correction


// let choice = prompt("Entrez un mot, ou une phrase :  ")


// function reverseStr(string) {
//     let result = ""
//     for (let i = string.length-1; i >= 0; i--) {
//         result = result + string[i]
//     }
//     return result
// }
// console.log(("Voici votre mot ou votre phrase inverse :  "),reverseStr(choice));

// EXO 4


// function genererNombreAleatoire() {
//     return Math.floor(Math.random() * 100) + 1 ;
// }
// function inverserChiffres(nombre) {
//     return parseInt(nombre.toString().split("").reverse().join(""), 10)
// }
// let nombreAleatoire = genererNombreAleatoire();
// console.log(" Le nombre aléatoire genere est le  :  " +  nombreAleatoire);
// let nombreInverse = inverserChiffres(nombreAleatoire);
// console.log(nombreInverse);

// TD 3

// EXO 1

// let choice = prompt("Entrez un mot, ou une phrase :  ")


// function countLetters(string) {
//     let compteur = 0;

//     for (let i = 0; i < string.length - 1; i++) {
//         let letters = string[i]
//         if ((letters >= "a" && letters <= "z") || (letters >= "A" && letters <= "Z")) {
//             compteur++
//         }
//     }
//     return compteur;
// }
// console.log(("Voici votre mot ou votre phrase contient :  "), countLetters(choice) + " lettres . ");

// EXO 2

// let choice = prompt("Entrez un mot, ou une phrase :  ")
// let times = Number(prompt("Entrez le nombre de fois que vous souhaitez repeter votre mot ou phrase :  "))

// function repeat(string, number) {
//     if (number < 0) {
//         return
//     }
//     let result = "";
//     for (let i = 1; i <= times; i++) {
//         result += string
//     }
//     return result
// }
// console.log(repeat(choice));


// EXO 3

// let choice = prompt("Entrez un mot, ou une phrase :  ")


// function reverseStr(string) {
//     let result = ""
//     for (let i = string.length-1; i >= 0; i--) {
//         result = result + string[i]
//     }
//     return result
// }
// console.log(("Voici votre mot ou votre phrase inverse :  "),reverseStr(choice));


// EXO 4

// let size = prompt("Veuillez entrez votre taille en m, (ex : si vous mesurez 1.85m vous tapez 1.85), :  ")
// let weight = parseFloat(prompt("Veuillez rentrez votre poids en kg, (vous pouvez mettre votre poids exacte ex : 81.5,)  :  "))
// let result = calculImc(weight, size)
// function calculImc(weight, size) {
//     let result = weight / (size * size)
//     return result.toFixed(2)

// }
// console.log("Votre IMC est de :  ", + result);
// if (result <= 18.5) {
//     console.log("Il s'agirait de manger maintenant. Vous etes maigre");
// } else if (result > 18.5 && result <= 25) {
//     console.log("Sois normal mec");
// }
// else if (result > 25 && result <= 30) {
//     console.log("Fais belek tu commences a etre en surpoids");
// }
// else if (result > 30 && result <= 40) {
//     console.log("Sa commence a faire beaucoup la non ? bienvenue chez les obeses");
// }
// else {
//     console.log("Mec c'est vraiment chaud la, mais ne perds pas espoir tu peux y arriver!");
// }



// EXO 5 


// let name = prompt("Veuillez entrer un nom : ")
// let firstname = prompt("Veuillez entrer un prenom : ")
// let birthdate = prompt("Veuillez entrer une annee de naissance : ")

// function genererPseudo(name, firstname, birthdate) {
// return   name + firstname + birthdate 
// }
// console.log(genererPseudo(name,firstname,birthdate));

// EXO 6

let firstname = prompt("Veuillez entrer un prenom : ")
let hour = prompt("Veuillez  entrer une heure ")
let minutes = prompt("Veuillez  entrer des minutes ")

function saluerPersonne(name, time) {
    if (time <= 0 && <= 7) {
        return 
        
    }
    }




// EXO 7

let choice = prompt("Entrez un mot, ou une phrase :  ")


function countLetters(string) {
    let compteur = 0;

    for (let i = 0; i < string.length - 1; i++) {
        let letters = string[i]
        if (letters = "a" && "e" && "i" && "o" && "u" && "y" ) && (letters = "A" && "E" && "I" && "O" && "U" && "Y"); {
            compteur++
        }
    }
    return compteur;
}
console.log(("Voici votre mot ou votre phrase contient :  "), countLetters(choice) + " lettres . ");
