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

// Create an array with all the odd integers between 1 and 255 (inclusive).
function findOdds(start, end){
    let odds = [];
    for(i=start; i<=end ; i++){
        if(i % 2 !== 0){
            odds.push(i)
        }
    }
    console.log(odds)
}
//  findOdds(1,255)

// Given an array and a value Y, count and print the number of array values greater than Y. 
function greaterThan(arr,value){
    let greater =[];
    for(i=0; i<arr.length ; i++){
        if(arr[i] > value ){
            greater.push(arr[i])
        }
    }
    console.log(greater)
}
// greaterThan([1,3,5,7,34,54,33,12,66],14)

// Given an array, print the max, min and average values for that array.
function minMaxAverage(arr){
    let min = arr[0];
    let max = arr[0];
    let avg = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
        avg =avg+arr[i];
    }
    avg = avg/arr.length;
    console.log("Min is : " + min )
    console.log("Max is : " + max )
    console.log("Average is : " + avg )
}
// minMaxAverage([1,3,5,7,9,3,5,4,-1])