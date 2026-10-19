class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let unique = new Set()
        let left = 0
        let maxLen = 0
        for(let right = 0; right < s.length; right++){
            if(s.length === 1) return 1
            // while if we found duplicate on the right
            // delete it from the left "old duplicate" until left reaches char that are not duplicate
            // then add the right "new duplicate" to the set
            while(unique.has(s[right])){
                unique.delete(s[left])
                // increment the left to move to forward to the next character
                // until the character is unique
                left++
            }
            // add the new char on the set on every loop
            unique.add(s[right])
            maxLen = Math.max(maxLen, unique.size)
        }
        return maxLen
    }
}
