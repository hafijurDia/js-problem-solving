// 0 1 1 2 3 5 8 13 21



function fibonacciSeriesRecursive (n){
    if (n == 0) {
        return [0];
    }else if(n == 1){
        return [0,1];
    }else{
        // calculate arrey the nth element
        let fibo = fibonacciSeriesRecursive(n - 1);  
        let nextElement = fibo[n-1] + fibo[n-2]; 
        fibo.push(nextElement);
        return fibo;
    }
}

let result = fibonacciSeriesRecursive(7);
console.log(result);