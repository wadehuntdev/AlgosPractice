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

// Replace any negative array values with 'Dojo'​.
function noNegatives(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo'
        }
    }
    console.log(arr)
}
// noNegatives([1,3,-4,5,8,-3])

// Print all odd integers from 1 to 255.
function printOdds(start,end){
    for(i=start;i<=end;i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
// printOdds(1,255)

// Iterate through a given array, printing each value
function iterate(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
// iterate([1,2,3,4,5,6])

// Analyze an array’s values and print the average.
function getAverage(arr){
    let sum = 0
    for(i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    console.log("Average is : " + sum/arr.length)
}
// getAverage([1,3,5,7,9])

// Square each value in a given array, returning that same array with changed values.
function squaredArr(arr){
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i]*arr[i]
    }
    console.log(arr)
}
// squaredArr([1,2,3,4])

// Return the given array, after setting any negative values to zero.
function zeroNegatives(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr)
}
// zeroNegatives([1,3,-4,5,8,-33,57,-9])

// Given an array, move all values forward by one index, dropping the first and leaving a '0'​ value at the
// end.
function shiftArray(arr){
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    console.log(arr)
}
// shiftArray([1,3,4,7,3,12])
