// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    let i = 0
    let sum = 0
    while (i < num){
        sum = sum + i + 1
        i++
    }
    return sum
}

console.log(addUp(4), 10)
console.log(addUp(13), 91)
console.log(addUp(600), 180300)
console.log(addUp(392), 77028)
console.log(addUp(53), 1431)
console.log(addUp(897), 402753)
console.log(addUp(23), 276)
console.log(addUp(1000), 500500)
console.log(addUp(738), 272691)
console.log(addUp(100), 5050)
console.log(addUp(925), 428275)
console.log(addUp(1), 1)
console.log(addUp(999), 499500)
console.log(addUp(175), 15400)
console.log(addUp(111), 6216)