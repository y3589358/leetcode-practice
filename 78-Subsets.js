/**
 *  Requirment:
    Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
    The solution set must not contain duplicate subsets. Return the solution in any order.

    Example 1:

    Input: nums = [1,2,2]
    Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 */

/**
    Note:
    before recursive should be sort arr, if exsist 2' and 2'' only chose one when index > i
    break and continue:
    continue is stop current i loop, and continue i+1 loop
    break is stop current all of i loop
 */
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort();
    if(nums.length == 0){
        res.push([]);
        return;
    }
    const dfs = (i,cur)=>{
        res.push([...cur]);
        for(let index = i;index < nums.length;index++){
            if(index != 0 && nums[index] == nums[index-1] && index > i){
               continue;
            }
            cur.push(nums[index]);
            dfs(index+1,cur);
            cur.pop();
        }
    }
    dfs(0,[]);
    return res;
};