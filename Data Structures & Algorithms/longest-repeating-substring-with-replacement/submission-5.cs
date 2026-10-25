public class Solution {
    public int CharacterReplacement(string s, int k) {
        int max_len = 0;
        int max_count = 0;
        int left = 0;
        Dictionary<char, int> map = new Dictionary<char, int>();
        for(int right = 0; right < s.Length; right++){
            bool currChar = map.ContainsKey(s[right]);
            if(!currChar){
                map.Add(s[right], 1);
                max_count = Math.Max(max_count, map[s[right]]);
            } else{
                map[s[right]] += 1;
                max_count = Math.Max(max_count, map[s[right]]);
            }

            // check the invalid window
            while((right-left + 1) - max_count > k){
                // locate the left char
                map[s[left]] -= 1; // decrement the count char
                left++;
            }
            // update the max len
            max_len = Math.Max(max_len, right-left + 1);
        }
        return max_len;
    }
}
