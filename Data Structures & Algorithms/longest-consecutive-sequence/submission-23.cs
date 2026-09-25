public class Solution {
    public int LongestConsecutive(int[] nums) {
        // using hashSet to store the nums into set
        HashSet<int> numSet = new HashSet<int>(nums);

        for(int i = 0; i < nums.Length; i++){
            if(!numSet.Contains(nums[i])){
                numSet.Add(nums[i]);
            }
        }
        int longestStreak = 0;
        foreach(var num in numSet){
            if(!numSet.Contains(num - 1)){
                int streak = 1;
                int currNum = num;
                while(numSet.Contains(currNum + 1)){
                    currNum += 1;
                    streak += 1;
                }
                longestStreak = Math.Max(streak, longestStreak);
            }
        }
        return longestStreak;
    }
}
