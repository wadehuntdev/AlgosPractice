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
function threesFives(){
    let sum = 0;
    for (i=100 ; i <=4000000 ; i++){
        if(i % 3 === 0 || i % 5 === 0 ){
            if(i % 3 === 0 && i % 5 === 0){
                break
            }
        sum = sum + i;
        }
    }
    console.log(sum)
}
threesFives()

