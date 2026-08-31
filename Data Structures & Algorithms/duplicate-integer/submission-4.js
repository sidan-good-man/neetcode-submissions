class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i],i)
            if(map.has(nums[i+1])) return true
        }

        // for(const [key, val] of map){
        //     console.log(key, val)
        // }
        return false
    }
}
