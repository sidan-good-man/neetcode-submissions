class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let result = []
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        // console.log(map.size)
        let flip = new Map()
            for(const[key, val] of map){
                if(!flip.has(val)){
                    flip.set(val,[])
                }
                let count = flip.get(val)
                count.push(key)
            }
            if(flip.size <= 1) {
                return flip.values().next().value
            }
            let maxKeys = Math.max(...flip.keys())
            for(let j = maxKeys; j >= 1; j--){
                let a = flip.get(j)
                console.log(a)
                if(a !== undefined){
                    for( let y = 0; result.length < k && y < a.length; y++){
                        result.push(a[y])
                    }
                }
            }

            return result
        }
}
/*
    loop 1 {
        count first the array on the map
    }

    if(map.size <= 1) return [nums[0]]
    let currCount = 0
    let mostCountKey = 0
    else: loop i until n:
        currCount = map.get(i)
        nextCount = map.get(i+1)
        if()

    result.push(mostCountKey)
    return result


*/