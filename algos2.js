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