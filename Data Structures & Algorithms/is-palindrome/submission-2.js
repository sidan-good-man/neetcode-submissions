class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Input: s = "Was it a car or a cat I saw?"
        const sentence = s.toLowerCase().replace(/[^A-Za-z^0-9]/g, '')
        // i want to make like this ['w','a','s'... so on]
        const sCount = sentence.split("")
        console.log(sCount)
        const switchS = []
        for(let i = sCount.length - 1; i >= 0 ; i--){
            switchS.push(sCount[i])
        }
        const newSentence = switchS.join("")
        if(sentence === newSentence){
            return true
        } else{
            return false
        }
        // then i switch it up and store it in another variable
        // then compare it with sentece if true yes it palindrome else is not
        
    }
}
