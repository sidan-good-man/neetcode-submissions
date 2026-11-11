class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1
        let total_water = 0
        let left_max = height[left]
        let right_max = height[right]
        while(left <= right){
            if(left_max < right_max){
                // if the bar taller or equal then the left_max
                if(height[left] >= left_max){
                    left_max = height[left] // assign the new left_max
                }else{
                // if less then that or else
                // calculate the total_water
                    total_water += left_max - height[left]
                }
                left += 1 // move the left inward
            } else { // here handle both left_max === right_max and right_max < left_max
                // same as the left_max
                if(height[right] >= right_max){
                    right_max = height[right]
                }else{
                    total_water += right_max - height[right]
                }
                right -= 1
            }
        }
        return total_water
    }
}
