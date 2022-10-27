let n = 13;

function checkPrime(n){
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return n + ' is not a prime number';
        }else{
            return n + ' is a prime number';
        }
    }
}

let result = checkPrime(7);
console.log(result);