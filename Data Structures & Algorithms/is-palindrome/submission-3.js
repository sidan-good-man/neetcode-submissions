class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Input: s = "Was it a car or a cat I saw?"
        const sentence = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
        const sCount = sentence.split("")
        // initialize pointer
        let left = 0
        let right = sCount.length - 1
        while(left < right){
            if(sCount[left] !== sCount[right]){
                return false
            }
            left++
            right--
        }
        return true
      
    }
}
