public class Solution {
    public int LengthOfLongestSubstring(string s) {
        HashSet<int> set = new HashSet<int>();
        int left = 0;
        int maxLen = 0;
        for(int right = 0; right < s.Length; right++){
            if(set.Contains(s[right])){
                while(set.Contains(s[right])){
                    set.Remove(s[left]);
                    left++;
                }
            }
            set.Add(s[right]);
            maxLen = Math.Max(maxLen, set.Count);
        }
        return maxLen;
    }
}
