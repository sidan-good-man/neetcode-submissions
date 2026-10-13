class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let buy = 0
        for(let i = 0; i < prices.length; i++ ){
            // check the price so we can buy on current day
            if(prices[i] < prices[buy]){
                buy = i
            } else{
                // else we calculate the profit
                let currProfit = prices[i] - prices[buy]
                maxProfit = Math.max(currProfit, maxProfit)
            }
        }
        return maxProfit
    }
}
