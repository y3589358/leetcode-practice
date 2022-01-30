
const findPosition = (nums, target)=> {
    // Write your code here
    //define a middle position
    let midIndex = parseInt(nums.length/2);
    let endIndex = nums[midIndex] > target ? midIndex : nums.length;
    let beginIndex = nums[midIndex] > target ? 0 : midIndex;
    let position = -1;
    for(let i=beginIndex;i<endIndex;i++){
        if(nums[i] == target){
            position = i;
            return position;
        }
    }
    return position;
  };

  const nums = [1,2,2,4,5,5], target = 2
  const res = findPosition(nums,target);
  console.log("res",res);