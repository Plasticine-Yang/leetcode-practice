/*
 * @lc app=leetcode.cn id=115 lang=typescript
 *
 * [115] 不同的子序列
 */

// let memo: number[][];

// function numDistinct(s: string, t: string): number {
//   // 初始化备忘录
//   memo = Array.from({ length: s.length }).map(() =>
//     new Array(t.length).fill(-1)
//   );
//   return dp(s, 0, t, 0);
// }

// /**
//  * @description s[i...] 中 t[j...] 出现的次数为 dp(s, i, t, j)
//  * @param s s
//  * @param i 遍历 s 的指针
//  * @param t t
//  * @param j 遍历 t 的指针
//  */
// function dp(s: string, i: number, t: string, j: number): number {
//   // base case 1
//   if (j === t.length) {
//     // t 已经匹配完成
//     return 1;
//   }
//   // base case 2
//   if (s.length - i < t.length - j) {
//     // s 的剩余长度比 t 还少时肯定不会匹配
//     return 0;
//   }

//   // 站在 t 的角度
//   // 查询备忘录防止冗余计算
//   if (memo[i][j] !== -1) {
//     return memo[i][j];
//   }

//   let res = 0;
//   for (let k = i; k < s.length; k++) {
//     if (s.charAt(k) === t.charAt(j)) {
//       // 状态转移
//       res += dp(s, k + 1, t, j + 1);
//     }
//   }

//   // 存入备忘录
//   memo[i][j] = res;
//   return res;
// }
// @lc code=start
let memo: number[][];

function numDistinct(s: string, t: string): number {
  // 初始化备忘录
  memo = Array.from({ length: s.length }).map(() =>
    new Array(t.length).fill(-1)
  );

  return dp(s, 0, t, 0);
}

function dp(s: string, i: number, t: string, j: number): number {
  // base case 1
  if (j === t.length) return 1;

  // base case 2
  if (s.length - i < t.length - j) return 0;

  // 查询备忘录
  if (memo[i][j] !== -1) return memo[i][j];

  // 站在 s 的角度
  let res = 0;
  if (s.charAt(i) !== t.charAt(j)) {
    res += dp(s, i + 1, t, j);
  } else {
    res += dp(s, i + 1, t, j + 1) + dp(s, i + 1, t, j);
  }

  memo[i][j] = res;
  return res;
}

// @lc code=end
const res = numDistinct(
  'adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc',
  'bcddceeeebecbc'
);
console.log(res);
