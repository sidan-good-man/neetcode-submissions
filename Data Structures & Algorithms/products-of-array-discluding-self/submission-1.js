class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let rightArr = []
        let leftArr = []
        let result = []
        let runningLeft = 1
        let runningRight = 1

        // left and right loop
        for(let i = 0; i < nums.length; i++){
            let rIdx = nums.length - i - 1 // track from back of the array

            // edge case [0], Left part
            if(nums[i-1] === undefined){
                leftArr[i] = runningLeft
                runningLeft *= nums[i]
            }else{
                leftArr[i] = runningLeft
                runningLeft *= nums[i]
            }

            // edge case [nums.length], right part
            if(nums[i+1] === undefined){
                rightArr[rIdx] = runningRight
                runningRight *= nums[rIdx]
            }else{
                rightArr[rIdx] = runningRight
                runningRight *= nums[rIdx]
            }

        }

        for(let j = 0; j < nums.length; j++){
            let res = leftArr[j] * rightArr[j]
            let resNum = res === 0 ? Math.abs(res) : res
            result.push(resNum)
        }
        return result
    }
}
