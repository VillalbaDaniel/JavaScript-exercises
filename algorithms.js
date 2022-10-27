///////// Algorithms 1 - Ej 1 ////////////

/*function ejercicio1_1(){

  const d = new Date();
  let month = d.getMonth() + 1;
  console.log(`Mes Nº ${month} = Octubre`);
  
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  console.log(`Tiene ${days} días`);
}

ejercicio1_1();*/

///////// Algorithms 1 - Ej  ////////////

/*function ejercicio2_1() {
  let month = prompt("Choose a month, please.");
  switch (month) {
    case "January":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "january":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Enero":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "enero":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "February":
      answer = "Has 28 days";
      console.log(answer);
      break;
    case "february":
      answer = "Has 28 days";
      console.log(answer);
      break;
    case "Febrero":
      answer = "Tiene 28 días";
      console.log(answer);
      break;
    case "febrero":
      answer = "Tiene 28 días";
      console.log(answer);
      break;
    case "March":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "march":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Marzo":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "marzo":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "April":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "april":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "Abril":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "abril":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "May":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "may":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Mayo":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "mayo":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "June":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "june":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "Junio":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "junio":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "July":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "july":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Julio":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "julio":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "August":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "august":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Agosto":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "agosto":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "September":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "september":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "Septiembre":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "septiembre":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "Octuber":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "octuber":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Octubre":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "octubre":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "November":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "november":
      answer = "Has 30 days";
      console.log(answer);
      break;
    case "Noviembre":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "noviembre":
      answer = "Tiene 30 días";
      console.log(answer);
      break;
    case "December":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "december":
      answer = "Has 31 days";
      console.log(answer);
      break;
    case "Diciembre":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    case "diciembre":
      answer = "Tiene 31 días";
      console.log(answer);
      break;
    default:
      console.log("That's not a real month");
      break;
  }
}

ejercicio2_1();*/

///////// Algorithms 1 - Ej 3 ////////////

/*function ejercicio1_3(){

 let temperature = prompt(`What temperature is it outside?`)

if (temperature < 15) {
  alert(`Warm up`);
} else if (temperature >= 15 && temperature <= 25) {
  alert(`Enjoy the weather!!!!`)
} else
alert()
}

ejercicio1_3();*/

///////// Algorithms 1 - Ej 4 ////////////

/*function ejercicio1_4(){

let isGreen = true;
let counter = 1;
let timer = setInterval(() => {
  if (isGreen) {
    console.log("Croos the road");
  } else {
    console.log("Please await");
  }

  isGreen = !isGreen;
  if (counter++ == 10) {
    clearInterval(timer);
  }
}, 2000);

}

ejercicio1_4();*/

///////// Algorithms 1 - Ej 5 ////////////

/*function ejercicio1_5(){

  let temperature = "frezing point";
switch (temperature) {
  case "absolute zero":
    console.log((-273.15 * 9) / 5 + 32);
    break;
  case "freezing point":
    console.log((0 * 9) / 5 + 32);
    break;
  case "body temperature":
    console.log((37 * 9) / 5 + 32);
    break;
  case "boiling point":
    console.log((100 * 9) / 5 + 32);
    break;
  default:
    console.log(`not a valid temperature`);
    break;
}
}
ejercicio1_5();*/

///////// Algorithms 1 - Ej 6 ////////////

/*function ejercicio1_6() {

let email = prompt(`Enter email, please`);
let password = prompt(`Enter password, please`);

if (email != `tolkien@lordofrings.com` || password != `aNBR6ZeWPY`) {
 console.log(`Wrong password or email`); 
} else {
  console.log(`Welcome Mr. Tolkien`);
}
}

ejercicio1_6();*/

///////// Algorithms 1 - Ej 7 ////////////

/*function ejercicio1_7() {
  
  let amount = 100;
  let divisa = "dollar";
  switch (divisa) {
    case "dollar":
      console.log(`${amount} euros equivalen a ` + (amount * 0.99) + ` dolares americanos`);
      break;
    case "yen":
      console.log(`${amount} euros equivalen a ` + (amount * 141.29) + ` yenes japoneses`);
      break;
    case "libra":
      console.log(`${amount} euros equivalen a ` + (amount * 0, 88) + ` libras esterlinas`);
      break;
    case "franco suizo":
      console.log(`${amount} euros equivalen a ` + (amount * 0.97) + ` francos suizos`);
      break;
    case "rupia india":
      console.log(`${amount} euros equivalen a ` + (amount * 81.37) + ` rupias indias`);
      break;
    case "won":
      console.log(`${amount} euros equivalen a ` + (amount * 1408.81) + ` wones surcoreanos`);
      break;
    case "peso mexicano":
      console.log(`${amount} euros equivalen a ` + (amount * 19.66) + ` pesos mexicanos`);
      break;
    case "peso colombiano":
      console.log(`${amount} euros equivalen a ` + (amount * 4780.07) + ` pesos colombianos`);
      break;
    case "rublo":
      console.log(`${amount} euros equivalen a ` + (amount * 60.77) + ` rublos rusos`);
      break;
    case "peso argentino":
      console.log(`${amount} euros equivalen a ` + (amount * 151.64) + ` pesos argentinos`);
      break;
    case "boliviano":
      console.log(`${amount} euros equivalen a ` + (amount * 6.74) + ` bolivianos`);
      break;
    case "yuan":
      console.log(`${amount} euros equivalen a ` + (amount * 7.14) + ` yuanes`);
      break;
    case "quetzal":
      console.log(`${amount} euros equivalen a ` + (amount * 7.64) + ` quetzales guatemaltecos`);
      break;
    case "guarani":
      console.log(`${amount} euros equivalen a ` + (amount * 7032.75) + ` guaranies paraguayos`);
      break;
  }
}

ejercicio1_7();*/

///////// Algorithms 1 - Ej 8 ////////////

/*function ejercicio1_8() {

num1 = prompt(`select the first number`);
operador = prompt(`select the operation`);
num2 = prompt(`select the second number`);

if (operador == "sumar") {
  console.log(`${num1} + ${num2} = ` + (num1 + num2));
} else if (operador == "restar") {
  console.log(`${num1} - ${num2} = ` + (num1 - num2));
} else if (operador == "multi") {
  console.log(`${num1} x ${num2} = ` + (num1 * num2));
} else if (operador == "division") {
  console.log(`${num1} / ${num2} = ` + (num1 / num2));
}
 else {
  console.log(`Not a valid operation`);
}
}
ejercicio1_8();*/

///////// Algorithms 1 - Ej 10 ////////////



///////// Algorithms 2 - Ej 1 ////////////

/*function ejercicio1_2(){

let palindrome = "palindrome"
let split = palindrome.split("")
console.log(split);
}

ejercicio1_2();*/

///////// Algorithms 2 - Ej 2 ////////////

/*function ejercicio2_2(){

function reverse(s){
  return s.split("").reverse().join("");
}

var sss = reverse("no melon, no lemon")
console.log(sss)
}

ejercicio2_2();*/

///////// Algorithms 2 - Ej 3 ////////////

/*function ejercicio3_2(){

  function genrerateAsterisk (n) {
    return Array(n)
    .fill("*".repeat(n))
    .join("\n")
  }
  genrerateAsterisk(4)
  console.log(genrerateAsterisk(4));
}

ejercicio3_2();*/

///////// Algorithms 2 - Ej 4 ////////////

/*function ejercicio4_2(){

function media() {

let temp1 = 21
let temp2 = 25
let temp3 = 24
let temp4 = 22
let temp5 = 23
let temp6 = 27
let temp7 = 24
let total = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7;
let med = total/7;
console.log(Math.round(med));
}
media();
}

ejercicio4_2();*/

///////// Algorithms 2 - Ej 5 ////////////

///////// Algorithms 2 - Ej 7 ////////////

/*function ejercicio7_2(){

let min = 0
let max = 10
let number = Math.floor(Math.random()* (max - min +1)) + min;
let tries = 1
let answer = prompt("Please, guest the number")

while (answer != number && tries < 3) {
  tries++;
  if (answer != number) {
    alert("Try it again");
    answer = prompt("Please, guest the number")
  } if (answer == number) {
    alert("You Win!");
  }
  else if (tries == 3 && answer != number) {
    alert("Sorry, Good luck in love");
  }
}
}

//ejercicio7_2();*/