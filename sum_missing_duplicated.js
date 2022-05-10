// The input nums is supposed to be an array of unique integers ranging from 1 to nums.length (inclusive). However, there is a mistake: one of the numbers in the array is duplicated, which means another number is missing.
// Find and return the sum of the duplicated number and the missing number.
// Example: in the array [4, 3, 3, 1], 3 is present twice and 2 is missing, so 3 + 2 = 5 should be returned.

function sum_missing_duplicated(arr) {
    let missing,repeated
    arr.sort((a,b)=>{return a-b;})//sort arr
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(i+1) == -1){missing = i+1}//find out the missing number
        if(arr[i] == arr[i+1]){repeated = arr[i]}//find out the repeated number
    }
    return missing + repeated
}
console.log(sum_missing_duplicated([1,1,3,4]))
console.log(sum_missing_duplicated([2,2]))
console.log(sum_missing_duplicated([4,3,3,1]))
console.log(sum_missing_duplicated([6,3,2,4,3,1]))
console.log(sum_missing_duplicated([10,2,3,4,5,6,7,8,9,10]))





