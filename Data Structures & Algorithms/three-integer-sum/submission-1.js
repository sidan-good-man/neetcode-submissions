class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b)=> a-b)
        let result = []
        for(let i = 0; i < nums.length; i++){
            // check if prev i is the same number and i was not the first index
            if(i > 0 && nums[i] === nums[i-1]) {
                continue
            }
            let a = i
            let left = i + 1
            let right = nums.length - 1

            while(left < right){
                let sum = nums[a] + nums[left] + nums[right]
                if(sum > 0){
                    right -= 1
                }else if(sum < 0){
                    left += 1
                } else{
                    // save the number on arr
                    let arr = [nums[a], nums[left], nums[right]]
                    result.push(arr)
                    // move both pointer 
                    left += 1
                    right -= 1

                    // before continue check again the next index was the same number or not
                    // left check
                    while(left < right && nums[left] === nums[left-1]) {
                        left += 1
                    }
                    // right check
                    while(left < right && nums[right] === nums[right+1]) {
                        right -= 1
                    }
                }
                
            }

        }
        return result
    }
}
