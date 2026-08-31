class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let mapS = new Map()
        let mapT = new Map()
        for(let i = 0; i < s.length; i++){
            let charT = t.charAt(i)
            let charS = s.charAt(i)

            mapS.set(charS,(mapS.get(charS) || 0) + 1)
            mapT.set(charT,(mapT.get(charT) || 0) + 1)
        }
        for(const [key, count] of mapS){
           if(mapT.get(key) !== count) return false
        }
        return true
    }
}
