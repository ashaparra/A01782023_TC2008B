// /*Escribe una función que encuentre el primer carácter de un cadena de
//  texto que no se repite. Prueba tu función con: 'abacddbec'*/
// function UniqueChar(str) {
//     let frecuency={};

// //Iterate through the string and record the frecuency 
//     for(let i=0; i<str.length; i++){
//         if(frecuency(str[i])){
//         frecuency(str[i])++;
//     } 
//     else {
//         frecuency[str[i]]=1;
//     }   
//     }
// for (let i=0; i<str.length; i++){
//     if(frecuency[str[i]]==1){
//         return str[i];
//    }
// }
// console.log(frecuency);
// return null;
// }
// let result= UniqueChar("abacddbec");
// console.log(UniqueChar);

// // Create empty dictonary to save each character and its frecuency 


//13.Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

//14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function PowerofTwo(n){
    //Check if the given number is a positive value
    if(n>0){
        //While loop where the number is divided by two if it's an even number
        while(n % 2==0){
            n= n/2;
        }
    }
    //At the end of the while loop, if the result is =1, it is a power of 2
    if(n==1)
        return true;
    else
        return false;   
}
let n=64;
if (PowerofTwo(n)==true)
    console.log("True \n");
else
    console.log("False \n");

//15.Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function Desencing (Mylist){
// Iterate through the array 
 for (let i = 0; i < Mylist.length; i++) {
    //Iterate through the array starting one number after i
      for (let j = i + 1; j < Mylist.length; j++) {
        //Create an instance if the value j is bigger than i
        if (Mylist[j] > Mylist[i]) {
        //Change the  positions of the values
          //Create a tempral variable for the value swap to be possible
          temp = Mylist[i];
          Mylist[i] = Mylist[j];
          Mylist[j] = temp;
        }
      }
    }
}
let Mylist =[1,23,99,33,12];
Desencing(Mylist);
console.log(Mylist);

