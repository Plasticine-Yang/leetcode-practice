/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  // 单调栈
  const stack: number[] = [];
  const res: number[] = new Array(nums.length);
  const n = nums.length;

  // 通过扩大两倍下标的方式模拟循环数组 涉及到下标访问的都需要用模运算
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length !== 0 && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }

    res[i % n] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(nums[i % n]);
  }

  return res;
}
// @lc code=end

const ans = nextGreaterElements([1, 2, 1]);
console.log(ans);

export {};
