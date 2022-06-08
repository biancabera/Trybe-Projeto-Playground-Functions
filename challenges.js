// Desafio 1
function compareTrue(paradigma1, paradigma2) {
  if (paradigma1 === true && paradigma2 === true) {
      return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultadoArea = (base * height) / 2;
  return resultadoArea 
}

 // Desafio 3 
 // para realizar este desafio fiz uma pesquisa pelo blog da Trybe sobre o uso de split https://blog.betrybe.com/javascript/javascript-split/
 function splitSentence(string) {
    let splitString = string.split(" ")
    return splitString;
 }

// Desafio 4
// para realizar este desafio também precisei fazer uma pesquisa através do blog da Trybe: https://blog.betrybe.com/javascript/javascript-array/
 function concatName(strings) {
  let string1 = strings[0];
  let ultimaString = strings[strings.length-1];
  return ultimaString.concat(', ',string1)
  }

// Desafio 5
 function footballPoints(wins,ties) {
  let finalPoints = (wins * 3) + ties;
  return finalPoints;
  }

// Desafio 6
function highestCount(numeros) {
  let numeroMaior = numeros[0];
  for (indice = 0; indice < numeros.length; indice += 1) {
  if (numeros[indice] > numeroMaior) {numeroMaior = numeros[indice]}
  }
  let vezesQueNumeroAparece = 0;
  for(let index = 0; index < numeros.length; index += 1) { 
  if (numeros[index] === numeroMaior) 
  {vezesQueNumeroAparece = vezesQueNumeroAparece + 1}
  }
  return vezesQueNumeroAparece
  }
// Desafio 7
// referência para o uso do math.abs https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  function catAndMouse(mouse, cat1, cat2) {
  let distanciaEntreCat1eMouse = Math.abs(mouse - cat1); 
  let distanciaEntreCat2eMouse = Math.abs(mouse - cat2);
  
    if (distanciaEntreCat2eMouse > distanciaEntreCat1eMouse) { 
    return 'cat1';
  } else if (distanciaEntreCat2eMouse < distanciaEntreCat1eMouse) {
    return 'cat2';
  } else { 
    return "os gatos trombam e o rato foge"
  }
  }
// Desafio 8
  function fizzBuzz(numeroComArray) {
   let arrayVazia = [];
    for (index = 0; index < numeroComArray.length; index += 1) { 
  if (numeroComArray[index] % 3 === 0 && numeroComArray[index] % 5 !== 0) { 
      arrayVazia.push('fizz') 
    } 
  else if (numeroComArray[index] % 5 === 0 && numeroComArray[index] % 3 !== 0 ) {
      arrayVazia.push('buzz') 
    } 
  else if (numeroComArray[index] % 5 === 0 && numeroComArray[index] % 3 === 0) { 
      arrayVazia.push('fizzBuzz') 
    }
  else {arrayVazia.push('bug!')
      }
    }
   return arrayVazia
  }

// Desafio 9
   function encode(string) {
    let stringNova = "";
    for (index = 0; index < string.length; index += 1) { 
    if (string[index] === 'a') { 
    stringNova += "1"
    } else if (string[index] === 'e') { 
    stringNova += "2"
    } else if (string[index] === 'i') { 
    stringNova += "3"
    } else if (string[index] === 'o') {
    stringNova += "4"
    } else if (string[index] === 'u') {
    stringNova += "5"
    } 
    else {stringNova += string[index]
    }
    }
    return stringNova
    }
  
   function decode(stringNova) {
    let stringDecode = "";
    for (index = 0; index < stringNova.length; index += 1) { 
    if (stringNova[index] === '1') { 
    stringDecode += "a"
    } else if (stringNova[index] === '2') { 
    stringDecode += "e"
    } else if (stringNova[index] === '3') { 
    stringDecode += "i"
    } else if (stringNova[index] === '4') {
    stringDecode += "o"
    } else if (stringNova[index] === '5') {
    stringDecode += "u"
    } 
    else {stringDecode += stringNova[index]
    }
    }
    return stringDecode
    }


// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
 };