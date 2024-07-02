"use strict";
// Function declaration
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Yasir!");
// Function Expression
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
// Arrow Function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil perkalian: " + result);
// Challenge funct expression 
let cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
// Object
let person;
person = {
    name: "Yasir Rizqi",
    age: 20,
    address: "Tegal"
};
console.log(person);
