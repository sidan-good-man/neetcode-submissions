public class Solution {
    public int MaxArea(int[] heights) {
        int maxArea = 0;
        int left = 0;
        int right = heights.Length - 1;

        while(left < right){
            int wid = right - left;
            int height = Math.Min(heights[left], heights[right]);
            int currArea = wid * height;

            // instead use if to check that currArea was bigger that maxArea
            // use Math.Max() method instead
            maxArea = Math.Max(currArea, maxArea); 
            // else if chain makes an error
            // might find other way to use just if and else
            if(heights[left] > heights[right]){
                right--;
            }else {
                left++;
            }
        }
        return maxArea; 
    }
}
