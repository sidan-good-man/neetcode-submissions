class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let buy = 0
        let sell = 0
        let currProfit = 0
        for(let i = 0; i < prices.length; i++ ){
             if(prices[buy] > prices[i]){
                    buy = i
                }
                
                if(prices[i] > prices[buy]){
                    sell = i
                }
                
                // avoid backtracking the sell index
                if(sell > buy){
                    currProfit = prices[sell] - prices[buy]
                }
                
                // update the maxProfit
                if(maxProfit < currProfit){
                    maxProfit = currProfit
                }
        }
        return maxProfit
    }
}
