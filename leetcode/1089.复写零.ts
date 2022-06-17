/*
 * @lc app=leetcode.cn id=1089 lang=typescript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */

/**
 * @description 双指针
 */
function duplicateZeros(arr: number[]): void {
  const n = arr.length;
  let top = 0;
  let i = -1;

  while (top < n) {
    i++;
    if (arr[i] !== 0) {
      // 非 0 直接入栈
      top++;
    } else {
      // 0 则入栈两个 0
      top += 2;
    }
  }

  // j 从后往前遍历 出栈还原
  let j = n - 1;

  // 当最后一个元素是 0 时，复写 0 后最后一个元素仍然是 0 需要特殊处理
  // [1, 2, 2, 3, 3, 4, 5, 0] --> [1, 2, 2, 3, 3, 4, 5, 0]
  if (top === n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }

  // 出栈复制 -- i 代表栈顶
  while (j >= 0) {
    arr[j] = arr[i];
    j--;

    // 遇到 0 需要存入两个 0
    if (arr[i] === 0) {
      arr[j] = arr[i];
      j--;
    }

    i--;
  }
}
// @lc code=end

const arr = [1, 2, 2, 3, 3, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);

export {};
