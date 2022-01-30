  /**
    Description
    Given a sorted array (ascending order) and a target number, find the first index of this number in O(log n)O(logn) time complexity.

    If the target number does not exist in the array, return -1.
    Example 1:
    Input:
    tuple = [1,4,4,5,7,7,8,9,9,10]
    target = 1
    Output:
    0
 */

  /**
    Note
    is test case contain duplicate number, define begin index and end index should be ">="
 */

function binarySearch(nums, target) {
    // write your code here
    const midIndex = parseInt(nums.length/2);
    const endIndex = nums[midIndex] >= target ? midIndex : nums.length-1;
    const beginIndex = nums[midIndex] >= target ? 0 : midIndex;
    let position = -1;
    
    for(let i=beginIndex;i<endIndex;i++){
        if(nums[i] == target){
            position = i;
            return position;
        }
    }
    return position;
}

const nums = [1,4,4,5,7,7,8,9,9,10]
const target = 1
binarySearch(nums,target);