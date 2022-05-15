function bagProblem(weight: number[], value: number[], bagWeight: number) {
  // dp[j] -- 背包容量为 j 时能够获得的最大价值
  const dp: number[] = new Array(bagWeight + 1).fill(0); // 初始化为 0

  for (let i = 0; i < weight.length; i++) {
    for (let j = bagWeight; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  return dp[bagWeight];
}

const res = bagProblem([1, 3, 4], [15, 20, 30], 4);
console.log(res);
