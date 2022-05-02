/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start

class Counter<K = any> extends Map<K, number> {
  count(key: K) {
    if (this.has(key)) {
      this.set(key, this.get(key)! + 1);
    } else {
      this.set(key, 1);
    }
  }

  decrease(key: K) {
    if (this.has(key)) {
      this.set(key, this.get(key)! - 1);
    }
  }
}

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let res = 0;
  const window = new Counter();

  while (right < s.length) {
    const c = s[right];
    right++;

    window.count(c);

    // 出现重复字符的时候就收缩窗口
    while (window.get(c)! > 1) {
      // 出现重复字符 -- 缩小窗口
      const d = s[left];
      left++;
      window.decrease(d);
    }

    // 要在窗口收缩完后才更新 res 这样才能保证窗口内没有重复字符
    res = Math.max(res, right - left);
  }

  return res === 0 ? s.length : res;
}
// @lc code=end

const res = lengthOfLongestSubstring('aab');
console.log(res);
