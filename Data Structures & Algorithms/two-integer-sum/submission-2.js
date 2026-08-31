class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] = i
        }

        for(let i = 0; i < nums.length; i++){
            let needNumber = target - nums[i]
            if(map[needNumber] !== undefined && map[needNumber] !== i){
                console.log(map)
                return [i, map[needNumber]]
            }
        }
    }
}