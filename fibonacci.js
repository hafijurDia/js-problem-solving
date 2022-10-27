// fibonacci in normal for loop

// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[6] = fibo[6-1] + fibo[6-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];


//let fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
//    // console.log(fibo[i],fibo[i-1], fibo[i-2]);
    
// }
// console.log(fibo);

// fibonacci in function

function fibonacci(i){
    let fibo = [0, 1];
    for (let i = 2; i <= 10; i++) {
      fibo[i] = fibo[i-1] + fibo[i-2];
       // console.log(fibo[i],fibo[i-1], fibo[i-2]);     
    }
    return fibo;
}
let result = fibonacci(10);
console.log(result);

