// Function declaration
function sapa(nama:string){
    console.log("Halo, aku" + nama);   
}
sapa("Yasir!")

// Function Expression
function calculate (a:number, b:number, c:number):number{
    return a + b  + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);

// Arrow Function
let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication(5,8)
console.log("Hasil perkalian: "+ result);


// Challenge funct expression 

let cube = function(num:number){
    return num ** 3
}
console.log(cube(3));

// Object

let person: {
    name: string,
    age: number,
    address: string
}
person = {
    name: "Yasir Rizqi",
    age: 20,
    address: "Tegal"
}
console.log(person);

