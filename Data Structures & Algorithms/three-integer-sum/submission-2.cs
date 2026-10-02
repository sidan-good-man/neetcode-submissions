public class Solution {
    public List<List<int>> ThreeSum(int[] nums) {
        List<List<int>> result = new List<List<int>>();  
        Array.Sort(nums);

        for(int i = 0; i < nums.Length; i++){
            if(i > 0 && nums[i] == nums[i - 1]){
                continue;
            }

            int a = i;
            int left = i + 1;
            int right = nums.Length - 1;
            while(left < right){
            int sum = nums[a] + nums[left] + nums[right];
                if(sum > 0){
                    right -= 1;
                } else if (sum < 0) {
                    left += 1;
                } else{
                        result.Add(new List<int>{nums[a], nums[left], nums[right]});
                        left += 1;
                        right -= 1;

                    while(left < right && nums[left] == nums[left - 1]) left += 1;
                    while(left < right && nums[right] == nums[right + 1]) right -= 1;
                }
            }
        }
        return result;
    }
}
