class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let target_map = new Map()
        let window_map = new Map()
        
        // first loop to count the s1
        for(let i = 0; i < s1.length; i++){
            const count = target_map.get(s1[i]) || 0
            target_map.set(s1[i], count + 1)
        }

        let start = 0
        for(let end = 0; end < s2.length; end++){
            const count_end = window_map.get(s2[end]) || 0
            window_map.set(s2[end], count_end + 1)
            // if the window size was bigger then the s1 len
            if(end - start + 1 > s1.length){
            // move the window
                const count_start = window_map.get(s2[start]) || 0
                if(count_start > 1){
                    window_map.set(s2[start], count_start - 1 ) // count_start decremented not into 0
                }else{
                    window_map.delete(s2[start]) // delete if the count_start decrement value gonna be 0
                }
                start = start + 1
            }
            
            // if the window size was the same as the s1 len 
            if(end -  start + 1 === s1.length){
                // compare each key value pair from target_map and window map
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
                if(isMatch){
                    return true
                }
            }
        }
        return false
    
    }
}
