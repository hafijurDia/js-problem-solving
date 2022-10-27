// total 40 tota
// 1 - 10 > 15 feet * 1000 bricks
// 11 - 20 > 12 feet * 1000 bricks
// 21 - 40 > 10 feet * 1000 bricks

// 1 feet = 1000 brick

function brickCalculator(n){
    let bricks = 0;
    if (n <= 10) {
        return bricks = 'Total brick need for ' + n + ' floor building: ' + ((n * 15) * 1000) + ' bricks';
    }
    else if (n <= 20) {
        let oneToTen = 10 * 15;
        let oneToTenBricks = oneToTen * 1000;
        let elevenToTwenty = (n-10) * 12;
        bricks = elevenToTwenty * 1000;
        return '1 to 10 floor = ' + oneToTenBricks + ' bricks, 11 to 20 floor = ' + bricks + ' total ' + (oneToTenBricks + bricks) + ' bricks' ;   
    }
    else{
        let oneToTen = (10 * 15) * 1000;
        let elevenToTwenty = (10 * 12) * 1000;
        let aboveTwenty = (n - 20) * 10;
        bricks = aboveTwenty * 1000;
        return '1 to 10 floor = ' + oneToTen + ' bricks, 11 to 20 floor = ' + elevenToTwenty + ' bricks, 21 to rest floor = ' + bricks +' bricks, total ' + (oneToTen + elevenToTwenty + bricks) + ' bricks' ;   
    }
}

let result = brickCalculator(50);
console.log(result);