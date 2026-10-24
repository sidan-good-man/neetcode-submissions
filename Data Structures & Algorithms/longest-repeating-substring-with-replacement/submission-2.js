class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max_len = 0
        let max_count = 0
        let left = 0
        let map = new Map()
        for(let right = 0; right < s.length; right++){
            let currCount =  map.get(s[right]) ||  0 // add fallback if the search result on undefined
            if(currCount < 1){
                map.set(s[right], 1)
            }else{
                currCount = map.get(s[right])
                map.set(s[right], currCount + 1)
            }
            // update max count
            max_count = Math.max(currCount + 1, max_count)
            // check invalid window
            while((right - left + 1) - max_count > k){
                let leftChar = map.get(s[left])
                map.set(s[left], leftChar - 1)
                left++ // move left forward to shrink the window
            }
            max_len = Math.max(max_len, right - left + 1)
        }
        return max_len
    }
}
