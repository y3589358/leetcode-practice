/**
   *
    Description
    Find the last position of a target number in a sorted array. Return -1 if target does not exist.
    Example 1:

    Input: nums = [1,2,2,4,5,5], target = 2
    Output: 2
   */

/**
   *
    Note
    find last position, should be from right to left, the i must be  >=  begin index 
   */

 function lastPosition(nums, target) {
    // write your code here
    const midIndex = parseInt(nums.length/2);
    const endIndex = nums[midIndex] > target ? midIndex : nums.length;
    const beginIndex = nums[midIndex] > target ? 0 : midIndex;
    let position = -1;

    for(let i=endIndex-1;i>=beginIndex;i--){
        if(nums[i] == target){
            position = i;
            return position;
        }
    }
    return position;
  }