public class Solution {
    public bool IsPalindrome(string s) {
        string text = Regex.Replace(s, "[^a-zA-Z0-9]", "").ToLower();
        int rIdx = text.Length;
        for(int i = 0; i < text.Length; i++){
            rIdx -= 1;
            if(text[rIdx] != text[i]) return false;
        }
        return true;
    }
}
