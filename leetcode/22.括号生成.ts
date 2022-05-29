/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// /**
//  * @description 暴力法
//  */
// function generateParenthesis(n: number): string[] {
//   const ans: string[] = [];
//   generate([]);

//   return ans;

//   function generate(item: string[]) {
//     if (item.length === 2 * n) {
//       if (isValid(item)) {
//         ans.push(item.join(''));
//       }
//     } else {
//       // 生成左括号
//       item.push('(');
//       generate(item);
//       item.pop();

//       // 生成右括号
//       item.push(')');
//       generate(item);
//       item.pop();
//     }
//   }

//   /**
//    * @description 检查生成的括号组合是否有效
//    * @param item 生成的一项括号组合
//    */
//   function isValid(item: string[]): boolean {
//     let balance = 0;
//     for (const bracket of item) {
//       if (bracket === '(') balance++;
//       else balance--;

//       if (balance < 0) return false;
//     }

//     return balance === 0;
//   }
// }

// @lc code=start
/**
 * @description 回溯
 */
function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const track: string[] = [];

  backtrack(0, 0);

  return res;

  function backtrack(left: number, right: number) {
    if (track.length === 2 * n) {
      // track 已经达到了需要的长度 加入到结果数组中
      res.push(track.join(''));
      return;
    }

    if (left < n) {
      track.push('(');
      backtrack(left + 1, right);
      track.pop();
    }
    if (right < left) {
      track.push(')');
      backtrack(left, right + 1);
      track.pop();
    }
  }
}
// @lc code=end

const res = generateParenthesis(3);
console.log(res);

export {};
