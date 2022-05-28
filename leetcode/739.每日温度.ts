/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // 单调栈 -- index 表示温度在数组中的下标 temperature 表示温度
  const stack: { index: number; temperature: number }[] = [];
  const res: number[] = new Array(temperatures.length);

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length !== 0 &&
      stack[stack.length - 1].temperature <= temperatures[i]
    ) {
      stack.pop();
    }

    // 更新元素时存放的是下标之差
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1].index - i;
    stack.push({ index: i, temperature: temperatures[i] });
  }

  return res;
}
// @lc code=end

const ans = dailyTemperatures([30, 60, 90]);
console.log(ans);

export {};
