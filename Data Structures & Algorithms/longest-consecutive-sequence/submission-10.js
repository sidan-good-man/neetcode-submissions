class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // edge case if nums.len = 0
        if(nums.length < 1) return 0

        // set the map
        let map = new Map()
        // first loop
        for(let i = 0; i < nums.length; i++){
            if(map.get(nums[i]) === undefined){
                map.set(nums[i], 1) // will skip the duplication
            }
        }
        let maxStreak = 0
        // second double loop
        for(let num of map.keys()){
            // check the smallest num on consecutive sequence using (x - 1)
            let currStreak = 1
            let currMap = map.get(num - 1)
            if(!currMap){
                let currNum = num

                // count the streak on (x + 1) 
                while(map.get(currNum + 1)){
                    currNum += 1
                    currStreak += 1
                }
                maxStreak = Math.max(maxStreak,currStreak)
            }
        }
        return maxStreak
    
    }
}
