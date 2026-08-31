class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    
        const store = new Map()
        for( let i = 0; i < nums.length; i++) {
            var currNums = nums[i]
            var currVal = store.get(currNums)
            if(currVal > 0){
                store.set(currNums, currVal + 1)
            } else{
                store.set(currNums, 1)
            }
        }
    console.log(store)
    const returnK = [...store.keys()].sort((a,b)=> store.get(b) - store.get(a)).slice(0,k)
    return returnK
    }
}
