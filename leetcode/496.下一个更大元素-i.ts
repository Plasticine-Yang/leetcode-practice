/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  // 计算出 nums2 的下一个更大元素数组
  const greater = nextGreaterElementWrapper(nums2);
  // 建立映射
  const greaterMap = new Map<number, number>();
  for (let i = 0; i < greater.length; i++) {
    greaterMap.set(nums2[i], greater[i]);
  }

  // 遍历 nums1 到 greaterMap 中查询
  const res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    res.push(greaterMap.get(num)!);
  }

  return res;
}

/**
 * @description 计算 nums 的下一个更大元素数组
 * @param nums 数组
 */
function nextGreaterElementWrapper(nums: number[]): number[] {
  // 单调栈
  const stack: number[] = [];
  const res: number[] = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    // 栈非空 且 当前遍历的元素比栈顶元素高
    while (stack.length !== 0 && stack[stack.length - 1] <= nums[i]) {
      // 矮子出去 没必要留在栈里面
      stack.pop();
    }
    // 矮子们全都走了之后如果没有人比我高那就是我最高
    // 否则就是我第一个看到的人（也就是栈顶元素）比我高
    res[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return res;
}
// @lc code=end

const ans = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
console.log(ans);

export {};
