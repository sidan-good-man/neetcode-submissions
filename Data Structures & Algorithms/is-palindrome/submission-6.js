class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let text = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
        let backIdx = text.length;
        for(let i = 0; i < text.length; i++){
            backIdx -= 1
            if(text[backIdx] !== text[i]){
                return false
            }
        }
        return true
    }
}
