class Solution(object):
    def climbStairs(self, n):
        dp= [1,1]
        x= 1
        for _ in range(n):
            dp.append(dp[x-1]+ dp[x])
            x += 1
        return dp[n]
            
        """
        :type n: int
        :rtype: int
        """
