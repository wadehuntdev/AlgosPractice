// Given an array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods.
function pushFront(arr, value){
    let i = arr.length;
    while( i > 0){
        arr[i] = arr[i-1];
        i--;
    }
    arr[0] = value
    console.log(arr)
}
// pushFront([17,1,3,4,6,7,8,9,66], 44)

// Given an array, index, and additional value, insert
// the value into the array at the given index. Do this
// without using built-in array methods. 
function insertAt(arr, idx , value){
    let i = arr.length;
    while( i > idx){
        arr[i] = arr[i-1]
        i--;
    }
    arr[i] = value;
    console.log(arr)
}
// insertAt([1,3,6,8], 2,66)
