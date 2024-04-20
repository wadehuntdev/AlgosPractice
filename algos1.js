// Print all integers from 1-255
function printIntegers(start,end){
    for(i=start; i<=end; i++){
        console.log(i)
    }
}
// printIntegers(1,255)

// Print Integers and sum from 0-255
function printSum(start,end){
    let sum = 0;
    for(i=start; i<=end; i++){
        sum = sum + i;
        console.log("Value : " + i + " Sum : " + sum )
    }
}
// printSum(0,255)

// Find and print Max element in an array
function findMaxElem(arr){
    let max = arr[0];
    for(i=0; i< arr.length ; i++)
    if(arr[i] > max){
        max = arr[i]
    }
    console.log(max)
}
// findMaxElem([1,3,5,7,9,3,1])

 function findOdds(arr){
    let odds = [];
    for(i=0; i<arr.lenth ; i++){
        if(arr[i] % 2 != 0){
            odds.push(arr[i])
        }
    }
    console.log(odds)
 }
 findOdds([1,2,3,4,5,6,7,8,9,0,1,2,3])