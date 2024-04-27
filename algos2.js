// This is from the Fundemental section fo the Algorithms Book

// Implement a function sigma(num)​ that, given a
// number, returns the sum of all positive integers
// from 1 up to number (inclusive).
function sigma(num){
    let sum = 0
    for(i = 0 ; i <= num ; i++){
        sum = sum + i
    }
    console.log(sum)
}
// sigma(9)

// Write a function factorial(num)​ that, given a
// number, returns the product (multiplication) of all
// positive integers from 1 up to number (inclusive).
function factorial(num){
    let product = 1;
    for(i=1; i<=num; i++){
        product = product * i;
    }
    console.log(product)
}
// factorial(5)

// Create function ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
function ThreesFives() {
    let totalSum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            totalSum += i;
        }
    }
    console.log("Final sum:", totalSum);
}

// ThreesFives();

// ​ Change your function to make a BetterThreesFives(start,end)​where start and end
// values are customizable.
function betterThreesFives(start,end){
    let totalSum = 0
    for(i=start; i<= end; i++){
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            totalSum += i;
        }
    }
    console.log("Final sum:", totalSum);
}
// betterThreesFives(1,50)

// Implement generateCoinChange(cents)​ that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.
function generateCoinChange(cents){
    let coins = [25,10,5,1];
    let coinNames = ['Quarters', 'Dimes', 'Nickels', 'Pennies'];
    let change = {};

    for(let i=0; i< coins.length ; i++){
        const coinValue = coins[i];
        const coinName = coinNames[i];
        let numCoins = Math.floor( cents / coinValue);
        if(numCoins > 0){
            change[coinName] = numCoins;
        }
        cents -= numCoins * coinValue;
    };
    console.log(change);
}
// generateCoinChange(86)

// Implement a ‘die’ that randomly returns an
// integer between 1 and 6 inclusive. Roll a pair of
// these dice, tracking the statistics until doubles
// are rolled. Display the number of rolls, min, max,
// and average.

function statisticDoubles() {
    function rollDice(numOfSides){
        return Math.floor(Math.random() * numOfSides);
    }
    let rollNumber = 1;
    let sum = 0;
    let min = 1;
    let max = 0;
    let rollDieOne = [rollDice(6)];
    let rollDieTwo = [rollDice(6)];
    while(rollDieOne[rollNumber] !== rollDieTwo[rollNumber]){
        rollDieOne.push(rollDice(6))
        rollDieTwo.push(rollDice(6))
        rollNumber++
    }
    for(let i =0 ; i < rollDieOne.length ; i++){
        sum = sum + rollDieOne[i];
    }
    for(let i =0 ; i < rollDieOne.length ; i++){
        sum = sum + rollDieTwo[i];
    }
    for(let i =0 ; i < rollDieOne.length ; i++){
        if(rollDieOne[i] > min ){
            min = rollDieOne[i]
        }
        if(rollDieOne[i] > max){
            max = rollDieOne[i]
        }
    }
    console.log("It took " + rollNumber + " rolls to get doubles");
    console.log("The lowest roll was : " + min)
    console.log("The highest roll was : " + max)
    console.log("The average of all rolls is : " + sum/(rollDieOne.length*2))
}
statisticDoubles()