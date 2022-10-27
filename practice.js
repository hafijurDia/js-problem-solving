// ************ coding with normal way ******* //

// let nums = [4,5,10,15,13,14,20];

// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num % 2 == 0) {
//         console.log(num + ' is an even number');
//     }
//     else{
//         console.log(num + ' is an odd number');
//     }
    
// }

// let ages = [15,20,21,24,30,35];
// for (let i = 0; i < ages.length; i++) {
//     const age = ages[i];
//     if (age % 2 == 0) {
//         console.log(age + ' is an even number');
//     }
//     else{
//         console.log(age + ' is an odd number');
//     }
    
// }

// ************ Function using for avoiding duplicate coding and reusing ******* //

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
