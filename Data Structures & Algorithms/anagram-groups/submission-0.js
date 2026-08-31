class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = []
        let used = new Set()
        for(let i = 0; i < strs.length; i++){
            let anagram = []
            if(used.has(i)){
                continue
            } else{
                used.add(i)
                anagram.push(strs[i])
            }
            for(let j = i + 1; j < strs.length; j++){
                let a = strs[i].split('').sort().join('')
                let b = strs[j].split('').sort().join('')
                if(a === b){
                    used.add(j)
                    anagram.push(strs[j])
                }
            }
            result.push(anagram)
        }
        return result
    }
}
/*
    let result = []
    let used = new Set()
    loop i = 0 to strs.len {
        let anagram = []
        if(used.has(i)){
            continue
        }
        else{
            used.add(i)
            anagram.push(strts[i])
        }
        loop j = i+1 to strs.len {
            strs[i] and strs[j] turn into array each
            then sort(strs[i]) and sort(strs[j]) 
            compare it strs[i] === strs[j]:
                used.add(j)
                anagram.push(strs[j])
        }
        result.push(anagram)
    }
*/