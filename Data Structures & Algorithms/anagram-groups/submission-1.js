class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
const map = new Map()

for(let i = 0; i < strs.length; i++){
    let currStr = strs[i]
    let sortedStr = currStr.split('').sort().join('')
    if(map.get(sortedStr) === undefined){
        map.set(sortedStr,[currStr])
    }else {
        let prevMap = map.get(sortedStr)
        prevMap.push(currStr)
    }
}

let ans = []
map.forEach((key,val) => {
    ans.push(key)
}) 
    return ans
    }
}
