public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        
        Dictionary<int, int > map = new Dictionary<int, int>();
        // Step 1: Count the frequency of each number
        for(int i = 0; i < nums.Length; i++){
            var currNums = nums[i];
            int currVal = map.GetValueOrDefault(currNums);
            if(currVal > 0){
                map[currNums] = currVal +  1;
            } else{
                map.Add(currNums, 1);
            }
        }
        
        // Step 2: Sort the numbers by frequency
        List<int> keys = new List<int>(map.Keys);
        keys.Sort((a,b) => map[b] - map[a]);

        // Step 3: Return the top k numbers as an int[]
        int [] topK = keys.GetRange(0, k).ToArray();
        return topK;

    }
}
