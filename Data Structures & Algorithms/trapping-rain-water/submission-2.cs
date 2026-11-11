public class Solution {
    public int Trap(int[] height) {
        int total_water = 0;
        int left = 0;
        int right = height.Length - 1;
        int left_max = height[left];
        int right_max = height[right];

        while(left < right){
            if(height[left] < height[right]){
                if(height[left] >= left_max){
                    left_max = height[left];
                }else{
                    total_water += left_max - height[left];
                }
                left += 1;
            }else{
                if(height[right] >= right_max){
                    right_max = height[right];
                }else{
                    total_water += right_max - height[right];
                }
                right -= 1;
            }
        }
        return total_water;
    }
}
