class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ""
        for(let i = 0; i < strs.length; i++){
            let currStr = strs[i]
            let encode = currStr.length+"#"+currStr
            str += encode
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodeArr = []
        let i = 0
        while(i < str.length){
            // get the delimiter index with indexOf to caught multiple digit len of the word
            let hashIdx = str.indexOf("#",i)
            // get the current len of the word
            let currLen = parseInt(str.slice(i, hashIdx))
            // get the start word after the deilimiter {the len}#{the words} = 23#might or 1#nice
            let wordStart = hashIdx + 1 // + 1 mean after the #
            // slice from word start until word start + curren len  cause the len and the # was count ass well
            let decode = str.slice(wordStart, currLen + wordStart)
            decodeArr.push(decode)
            // reposition the i to the next words by using the curren len and word start
            i = currLen + wordStart
        }
        return decodeArr
    }
}
