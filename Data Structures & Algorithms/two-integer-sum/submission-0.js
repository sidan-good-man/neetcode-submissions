class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const matchs = new Map()
       for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j]+nums[i] === target) {
                return [i,j]

            }
        } 
       }
    }
}