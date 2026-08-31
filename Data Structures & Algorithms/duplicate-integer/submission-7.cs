public class Solution {
    public bool hasDuplicate(int[] nums) {
        bool ans = false;
        int numsLen = nums.Length;
        for(int i = 0; i < numsLen; i++){
            for (int j = i + 1; j < numsLen; j++){
                if(nums[i] == nums[j] && !ans){
                    return true;
                }
            }
        }
      return false;
    }
}