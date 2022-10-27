function woodCalculator(chair, table, bed){
    let totalWoodForChair = chair * 1;
    let totalWoodForTable = table * 3;
    let totalWoodForBed = bed * 5;
    return 'Total ' + (totalWoodForChair + totalWoodForTable + totalWoodForBed) +' cubic feet wood need for making all furnitures ';
}

let result = woodCalculator(5,6,7);
console.log(result);