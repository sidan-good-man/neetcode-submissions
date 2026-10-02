class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b)=> a-b)
        // array was sort to make pointer move left to right more easy, cause the more left it get smaller number and more to the right it got bigger number
        // [-4    -1    -1     0     1     2]
        //  <= more small         more big =>
        let result = []
        for(let i = 0; i < nums.length; i++){
            // check if prev i is the same number and i was not the first index
            if(i > 0 && nums[i] === nums[i-1]) { // check if pointer a have same number before
                continue
            }
            let a = i
            let left = i + 1
            let right = nums.length - 1

            while(left < right){
                let sum = nums[a] + nums[left] + nums[right]
                if(sum > 0){
                    // move the right pointer to the smaller number, to the left of the array
                    right -= 1
                }else if(sum < 0){
                    // move the left pointer to the bigger number, to the right of the array
                    left += 1
                } else{
                    // save the number on arr
                    let arr = [nums[a], nums[left], nums[right]]
                    result.push(arr)
                    // move both pointer 
                    left += 1 // move left and right
                    right -= 1

                    // before continue check again the next index of left and right pointer was the same number or not
                    // cause we have move the left and right on this else bracket
                    // so the left and right was on the next index and to check it we have to go backwads
                    // to get to the current index [left - 1] and [right + 1]
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
