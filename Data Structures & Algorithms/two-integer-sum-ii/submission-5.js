class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // here the numbers array was sorted, so we use that sorted array benefit to solve the problem
        let ans = []
        let left = 0
        let right = numbers.length - 1
        while(left < right){
            let currSum = numbers[left] + numbers[right]
            // check if the sum > target
            if(currSum > target) // which pointer we move to make the sum more "less" or to be close to the target
            {
                right -= 1 //move the right pointer backward 
            }else if(currSum < target) // which pointer we move to make the sum more "greater" or to be close to the target
            {
                left += 1 // move the left forward
            }

            // positive case sum === target
            if(currSum === target && left !== right){
                ans.push(left + 1, right + 1)
                return ans
            }

        }
    }
}
