class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // we use 2 map, 1 to store s1 chars and 2 to store s2 chars and also be the sliding widow
        let s1_map = new Map()
        let s2_map = new Map()

        // we use 2 loop, 1. for count the s1 into their map.
        // second to be the main sliding window algorithm

        for(let i = 0; i < s1.length; i++){
            const count = s1_map.get(s1[i]) || 0
            s1_map.set(s1[i], count + 1)
        }

        // define the start and end pointer
        // here start var on the outside of the loop and the end is the iteration on the loop
        let start = 0
        for(let end = 0; end < s2.length; end++){
            // track the count of end and start for the s2_map on s2 chars
            // its behave FILO, first in last out so the first is the end and last was the start
            // we count the end pointer
            const count_end = s2_map.get(s2[end]) || 0
            s2_map.set(s2[end], count_end + 1)

            // here we have to check when the window size (end - start + 1) greater or equal to the s1.len
            if(end - start + 1 > s1.length){
                // here the last out on the FILO so the start pointer was decrement or delete the char on the map
                // also we count the start only the case catch this if block
                // here check if the current char count was more then 1 or not
                const count_start = s2_map.get(s2[start]) || 0
                if(count_start > 1){
                    // if more we just decrement it by one
                    s2_map.set(s2[start], count_start - 1)
                } else{
                    // else cause 1 - 1 was 0 we dont want to store 0 on the count so we delete the record of that char
                    s2_map.delete(s2[start])
                }
                // move the start inward
                start = start + 1
            }

            if(end - start + 1 === s1.length){
                // here if the len was match so we can compare it to the s1 map
                let isMatch = true
                for(let [char, count] of s1_map){
                    if(s2_map.get(char) !== count){
                        isMatch = false
                        console.log(s2_map)
                        break
                    }
                }
                if(isMatch){
                    return true
                }
            }
            
        }
        console.log(s2_map)
        return false
    }
}
