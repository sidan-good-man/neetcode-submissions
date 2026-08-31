public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> map = new Dictionary<string, List<string>>();
        for(int i = 0; i < strs.Length; i++){
            string currStr = strs[i];
            char[] chars = currStr.ToArray();
            Array.Sort(chars);
            string sorted = new string(chars);

            var list = map.GetValueOrDefault(sorted);
            if(list == null){
                map[sorted] = new List<string> {currStr};
            } else{
                list.Add(currStr);
            }
        }
        return new List<List<string>>(map.Values);
    }
}
