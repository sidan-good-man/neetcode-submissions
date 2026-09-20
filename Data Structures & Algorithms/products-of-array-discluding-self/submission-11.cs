public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int n = nums.Length;
        int[] leftArr = new int[n];
        int[] rightArr = new int[n];
        int[] result = new int[n];
        int runningLeft = 1;
        int runningRight = 1;

        // first loop
        for(int i = 0; i < n; i++){
            // backwards index
            int rIdx = n - i - 1;

            //leftArr
            leftArr[i] = runningLeft;
            runningLeft *= nums[i];

            //rightArr
            rightArr[rIdx] = runningRight;
            runningRight *= nums[rIdx];
        }

        for(int j = 0; j < n; j++){
            int resNum = leftArr[j] * rightArr[j];
            result[j] = resNum; 
        }
        return result;
    }
}
