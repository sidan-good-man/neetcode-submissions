class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ""
        for(let i = 0; i < strs.length; i++){
            let currStrs = strs[i]
            str += currStrs.length + "#" + currStrs
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = []
        let i = 0
        while(i < str.length){
            let hashIdx = str.indexOf('#',i) // get the index before the len {...len"can be one or more digit"}#
            let currLen = parseInt(str.slice(i, hashIdx))
            let startWord = hashIdx + 1
            // "5#Hello5#World"
            // 5 currLen, word = Hello => 5#Hello was 7 len, 
            // so start at "H" at 2 index until 7 was currLen + wordStart
            let decodeStr = str.slice(startWord, currLen + startWord)
            arr.push(decodeStr)
            i = currLen + startWord
        }
        return arr
    }
}
