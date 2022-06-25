/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) !== t.indexOf(t.charAt(i))) return false;
  }

  return true;
}
// @lc code=end

const ans = isIsomorphic('egg', 'add');
console.log(ans);

export {};
