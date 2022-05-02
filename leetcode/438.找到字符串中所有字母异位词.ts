/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
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

function findAnagrams(s: string, p: string): number[] {
  let left = 0;
  let right = 0;
  let valid = 0;
  const res: number[] = [];
  const window = new Counter();
  const need = new Counter();

  // 初始化 need
  for (const char of p) {
    need.count(char);
  }

  while (right < s.length) {
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.count(c);

      if (window.get(c) === need.get(c)) valid++;
    }

    while (right - left >= p.length) {
      if (valid === need.size) {
        res.push(left);
      }

      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.decrease(d);
      }
    }
  }

  return res;
}
// @lc code=end

const res = findAnagrams('cbaebabacd', 'abc');
console.log(res);
