class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let leftIdx = 0
        let rightIdx = heights.length - 1
        while(leftIdx < rightIdx){
            // calculate the currArea to be compare to maxArea

            // calc the wid between the right and left pointer to the index position
            let wid = rightIdx - leftIdx
            // choose the second tallest lines "according to the problem rules" so that the water not spill out
            let height = Math.min(heights[leftIdx], heights[rightIdx])

            let currArea = wid * height // calculate the area
            if(currArea > maxArea){ // compare it to the maxArea
                maxArea = currArea
            }

            // move current smalles lines pointer inward
            // if the smaller was was left move it to the right, if right move it to the left
            if(heights[leftIdx] < heights[rightIdx]){
                leftIdx += 1
            } else if(heights[leftIdx] > heights[rightIdx]){
                rightIdx -= 1
            } else{
                // here if the both pointer point to the same exact number, we can choose it left or right to be move
                rightIdx -= 1
            }
        }
        return maxArea
    }
}
