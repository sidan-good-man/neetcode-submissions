class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if (nums.length < 1) return 0
        // first loop, set the nums into map
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            // skip the duplication, with the map so on the streak count not counting same number twice
            // so only select if the number dont exist on map and if exist skip it
            if(!map.get(nums[i])) map.set(nums[i],1)
        }


        // second loop, nested loop
        // first loop to find the smalles number on streak with n-1
        // second loop to count the streak with n + 1
        let longestStreak = 0 // to track the longest streak with Math.max()
        for(let j = 0; j < nums.length; j++){

            // check if curr map was the smallest 
            // if the currnums at map - 1 not exist on the map so that curr map nums was the smallest one
            if(!map.get(nums[j] - 1)){
                let currNum = nums[j]
                let currStreak = 1
                // second loop to count the streak by using n + 1
                // if the currnum + 1 dont exist on the map so the chain of streak was end on currnum
                while(map.get(currNum + 1)){
                    currNum += 1
                    currStreak += 1 
                    console.log(longestStreak)
                }
                longestStreak = Math.max(longestStreak, currStreak)
            }

        }
        return longestStreak


    }
}
