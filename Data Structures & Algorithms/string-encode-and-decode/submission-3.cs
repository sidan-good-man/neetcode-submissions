public class Solution {

    public string Encode(IList<string> strs) {
        string word = "";
        foreach(string str in strs){
            int currLen = str.Length;
            var concat = $"{currLen}#{str}";
            word += concat;
        }
        return word;
    }

    public List<string> Decode(string s) {
        List<string> result = new List<string>();
        int i = 0;
        while(i < s.Length){
            // get index of delimiter
            int hashIdx = s.IndexOf('#',i);
            // get index of current string Length;
            string strLen = s.Substring(i, hashIdx - i);
            // parse the len string into intger
            int currLen = int.Parse(strLen);
            // decode the word
            string word = s.Substring(hashIdx + 1, currLen);
            // add to the array
            result.Add(word);
            // move i into the next string
            i = hashIdx + currLen + 1 ;
        } 
        return result;
   }
}
