class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
            let target_map = new Map()
    let window_map = new Map()


    for(let i = 0; i < s1.length; i++){
        const count = target_map.get(s1[i]) || 0
        target_map.set(s1[i], count + 1)
    }

    let start = 0
    for(let end = 0; end < s2.length; end++){
        const count_end = window_map.get(s2[end]) || 0
        window_map.set(s2[end], count_end + 1)
        // if the window bigger than len of s1
        // so shrink from the left
        if(end - start + 1 > s1.length){
            const count_start = window_map.get(s2[start]) || 0
            if(count_start > 1){
                window_map.set(s2[start], count_start - 1)   
            }else{
                window_map.delete(s2[start])
            }
            start = start + 1
        }

        // window size equals to len of s1
        // check match up to the s1 map
        if(end - start + 1 === s1.length){
            let isMatch = true
            if(window_map.size !== target_map.size){
                isMatch = false
            }else{
                for(let [char, count] of target_map){
                    if(window_map.get(char) !== count){
                        isMatch = false
                        break
                    }
                }
            }
            if(isMatch)
                return true
        }
    }
    return false
    }
}
