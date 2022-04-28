/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
  // 两个指针从尾开始遍历字符串
  let i = s.length - 1;
  let j = t.length - 1;

  // 统计退格数
  let sSkip = 0;
  let tSkip = 0;

  while (i >= 0 || j >= 0) {
    // 遍历 s -- 找到第一个有效的字符（即被退格符抵消后剩下的字符）
    while (i >= 0) {
      if (s[i] === '#') {
        // 统计退格符数量
        sSkip++;
        i--;
      } else if (sSkip > 0) {
        // skip 存在，说明当前的字符是无效的，因为被退格了
        sSkip--;
        i--;
      } else {
        // 找到了
        break;
      }
    }

    // 遍历 j -- 找到第一个有效的字符（即被退格符抵消后剩下的字符）
    while (j >= 0) {
      if (t[j] === '#') {
        // 统计退格符数量
        tSkip++;
        j--;
      } else if (tSkip > 0) {
        // skip 存在，说明当前的字符是无效的，因为被退格了
        tSkip--;
        j--;
      } else {
        // 找到了
        break;
      }
    }

    // 比较一下找到的有效字符是否相等
    if (i >= 0 && j >= 0) {
      // 找到了但是它们不相等 -- false
      if (s[i] !== t[j]) return false;
    } else if (i >= 0 || j >= 0) {
      // 两个字符串最终的长度不相等 -- false
      return false;
    }

    // 找到了且它们相等 -- 继续一起往前遍历
    i--;
    j--;
  }

  // 能通过 while 循环说明最终 s 和 t 是相等的
  return true;
}
// @lc code=end
