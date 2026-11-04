public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int[] ans = new int[2];
        int left = 0;
        int right = numbers.Length - 1;
        while(left < right){
            int currSum = numbers[left] + numbers[right];

            if(currSum > target){
                right -= 1;
            }
            if(currSum < target){
                left += 1;
            }

            if(currSum == target && left != right){
                ans[0] = left + 1;
                ans[1] = right + 1;
                break; // skip the fallback error
            }
        }
        return ans;
    }
}
