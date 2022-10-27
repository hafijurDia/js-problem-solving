
function evenifyAll(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num * 2 + ' is an even number');
        }
        else{
            console.log(num + ' is an odd number');
        }
        
    }
}

let nums = [4,5,10,15,13,14,20];
evenifyAll(nums)


let ages = [15,20,21,24,30,35];
evenifyAll(ages)
