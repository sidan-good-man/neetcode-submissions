class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length !== t.length) return false
    const uniqueS = new Map()
    const uniqueT = new Map()
    let unique = true
    let count = 1
    
        for(let i = 0; i < s.length; i++){
                    uniqueS.get(s[i]) > 0 ? uniqueS.set(s[i], uniqueS.get(s[i]) + 1) : uniqueS.set(s[i],count)
        uniqueT.get(t[i]) > 0 ? uniqueT.set(t[i], uniqueT.get(t[i]) + 1) : uniqueT.set(t[i],count)
        }

        for (const [key, val] of uniqueS){
            let charT = uniqueT.get(key)
            if(charT !== val) {
                unique = false
            }
        }
        return unique
    }
}
