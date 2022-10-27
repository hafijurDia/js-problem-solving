// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*2*3
// 5! = 1*2*3*4*5

//factorial value by for loop

// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

//factorial value by a function

// function factorial(n){
//     let factorial = 1;
//     for (let i = 1; i <= n; i++) { 
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// const result = factorial(5);
// console.log(result);

//factorial value by while Loop

// let i = 1;
// let factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);

// while loop in funtion

function factorial(n){
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
let result = factorial(10);
console.log(result);