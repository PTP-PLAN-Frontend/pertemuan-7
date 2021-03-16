let productTeam = [
  "Product Manager",
  "Frontend Developer",
  "Backend Developer",
  3,
  true,
];
console.log(productTeam);
console.log(productTeam[2]);
productTeam[1] = "UI Designer";

let arrayRandom = ["string", 0, true, "nama"];
console.log(arrayRandom);

// const in array

const cars1 = ["tesla", "honda", "toyota"];
cars1 = ["Ferrari"];
console.log(cars1);

// method .push
// cars2[3] = "Ferrari";
const cars2 = ["tesla", "honda", "toyota"];
cars2.push("Ferrari");
console.log(cars2);

// method .pop() digunakan untuk menghapus data paling terakhir
cars2.pop();

// method .shift digunakan untuk menghapus data paling awal
cars2.shift();

// method .unshift digunakan untuk menambahkan data paling awal
cars2.unshift("Wuling");

// method .sort digunakan untuk mengurutkan secara ascending atau descending
let number = [1, 7, 15, 3, 24, 17];
number.sort();

// ascending yang benar
let number = [1, 7, 15, 3, 24, 17];
number.sort(function (a, b) {
  return a - b;
});

// descending yang benar
number.sort(function (a, b) {
  return b - a;
});

let huruf = ["abc", "cicak", "delman", "becak"];
huruf.sort();

let huruf = ["abc", "cbc", "bbc", "dbc"];
huruf.sort();

// method .forEach
const cars = ["tesla", "honda", "toyota"];
// menggunakan function biasa
cars.forEach(function (elements) {
  console.log(elements);
});
// menggunakan arrow function
cars.forEach((elements) => {
  console.log(elements);
});

// method .map
let number = [1, 2, 3, 4];
number.map(function (elements) {
  return elements * elements;
});

const cars = ["tesla", "honda", "toyota"];
cars.map(function (elements) {
  return elements + "s";
});

// method .map vs .foreach

let number = [1, 2, 3, 4];
number.map(function (elements) {
  return elements * elements;
});

let number = [1, 2, 3, 4];
number.forEach(function (elements, index) {
  console.log((number[index] = elements * elements));
});

// soal 1
