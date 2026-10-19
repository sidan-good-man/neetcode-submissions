public class Solution {
    public int MaxProfit(int[] prices) {
        int buy = 0;
        int maxProfit = 0;
        for(int i = 0; i < prices.Length; i++){
            if(prices[i] < prices[buy]){
                buy = i;
            } else{
                int currProfit = prices[i] - prices[buy];
                maxProfit = Math.Max(currProfit, maxProfit);
            }
        }
        return maxProfit;
    }
}
