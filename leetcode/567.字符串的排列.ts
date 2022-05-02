/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start

class Counter<K = any> extends Map<K, number> {
  count(key: K) {
    if (this.has(key)) this.set(key, this.get(key)! + 1);
    else this.set(key, 1);
  }

  decrease(key: K) {
    if (this.has(key)) {
      this.set(key, this.get(key)! - 1);
    }
  }
}

function checkInclusion(s1: string, s2: string): boolean {
  let left = 0;
  let right = 0;
  let valid = 0;
  const window = new Counter();
  const need = new Counter();

  // 初始化 need -- 使用 s1
  for (const char of s1) {
    need.count(char);
  }

  while (right < s2.length) {
    const c = s2[right];
    right++;

    if (need.has(c)) {
      window.count(c);

      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    // 缩小窗口的时机 -- 窗口长度 >= s1.length -- 包括等于的情况是为了判断结果
    // 这样才能保证窗口内不包含 s1 以外的其他字符
    while (right - left >= s1.length) {
      if (valid === need.size) {
        return true;
      }

      const d = s2[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.decrease(d);
      }
    }
  }

  return false;
}
// @lc code=end
