/**
 * @description 01 背包问题
 */
function bagProblem(
  weight: number[],
  value: number[],
  bagWeight: number
): number {
  // dp[i][j] -- 背包容量为 j 时 任取 0~i 物品放进背包的最大容量

  // 有几个物品
  const thingsCount = weight.length,
    // dp 初始化 -- 全部初始化为 0，这样就包括了 j == 0 时的初始化情况
    dp: number[][] = Array.from({ length: thingsCount }).map(() =>
      new Array(bagWeight + 1).fill(0)
    );

  for (let j = weight[0]; j <= bagWeight; j++) {
    dp[0][j] = value[0];
  }

  // 遍历顺序 -- 先遍历物品 再遍历重量
  for (let i = 1; i < thingsCount; i++) {
    for (let j = 1; j <= bagWeight; j++) {
      if (weight[i] > j) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
  }

  return dp[thingsCount - 1][bagWeight];
}

const res = bagProblem([1, 3, 4], [15, 20, 30], 4);
console.log(res);
