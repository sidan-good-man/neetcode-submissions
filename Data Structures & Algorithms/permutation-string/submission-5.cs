public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if(s1.Length > s2.Length) return false;
        Dictionary<char,int> s1_map = new Dictionary<char, int>();
        Dictionary<char,int> s2_map = new Dictionary<char, int>();

        for(var i = 0; i < s1.Length; i++){
            char addChar = s1[i];
            if(s1_map.ContainsKey(s1[i])){
                s1_map[addChar]++;
            }else{
                s1_map[addChar] = 1;
            }
        }

        int start = 0;
        for(var end = 0; end < s2.Length; end++){
            char addChar = s2[end];
            // check the map with first before perform an update 
            if(s2_map.ContainsKey(s2[end])){
                s2_map[addChar]++;
            }else{
                s2_map[addChar] = 1;
            }

            if(end - start + 1 > s1.Length){
                char leavingChar = s2[start];
                // get count value using index
                if(s2_map.ContainsKey(s2[start])){
                    int count_start = s2_map[leavingChar];
                    if(count_start > 1){
                        s2_map[leavingChar]--;
                    } else{
                        s2_map.Remove(leavingChar);
                    }
                    start = start + 1;
                }
            }

            if(end - start + 1 == s1.Length){
                bool isMatch = true;
                foreach(var (character, pairs) in s1_map){
                    s2_map.TryGetValue(character, out int count);
                    if(count != pairs){
                        isMatch = false;
                        break;
                    }
                }
                if(isMatch)
                    return true;
            }
        }
        return false;
    }
}
