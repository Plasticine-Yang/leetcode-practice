/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  let trackSum = 0;

  const backtrack = (start: number) => {
    // base case 1 -- 达到目标和
    if (trackSum === target) {
      res.push([...track]);
      return;
    }

    // base case 2 -- 超过目标和
    if (trackSum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // 剪枝 -- 值相同的树枝只遍历一条
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      trackSum += candidates[i];
      track.push(candidates[i]);

      backtrack(i + 1);

      trackSum -= candidates[i];
      track.pop();
    }
  };

  // 先排序让相同元素靠在一起
  candidates.sort((a, b) => a - b);
  backtrack(0);

  return res;
}
// @lc code=end

const ans = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(ans);

export {};
