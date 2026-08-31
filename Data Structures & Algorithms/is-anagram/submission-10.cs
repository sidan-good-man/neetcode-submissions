public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length) return false;
		var uniqueS = new Dictionary<char, int>();
		var uniqueT = new Dictionary<char, int>();
		for(int i = 0; i < s.Length; i++){
			bool isSunique = uniqueS.ContainsKey(s[i]); 
			bool isTunique = uniqueT.ContainsKey(t[i]);
			if(isSunique){
				uniqueS[s[i]]++;
			}else {
				uniqueS[s[i]] = 1;
			}
			
			if(isTunique){
				uniqueT[t[i]]++;
			}else {
				uniqueT[t[i]] = 1;
			}
		}
		
        foreach(KeyValuePair<char, int>kvp in uniqueS){
            uniqueT.TryGetValue(kvp.Key, out int tCount);
            if(tCount != kvp.Value) return false;
        }
		
		return true;
    }
}
