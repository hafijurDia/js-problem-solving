// 0! = 1
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*2*3
// 5! = 1*2*3*4*5
// 6! = 5!*6
// 6! = (6-1)!*6
// 7! = (7-1)!*7
// n! = (n-1)!*n

// recursive factorial fuction
function factorial (n){
    if (n == 0) {
        return 1;
    }else{
        return n * factorial(n -1);
    }
}
let result = factorial(10);
console.log(result);