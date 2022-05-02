/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
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
    } else {
      this.set(key, -1);
    }
  }
}

function isAnagram(s: string, t: string): boolean {
  // 长度不相等时 不可能是字母异位词
  if (s.length !== t.length) return false;

  const counter = new Counter();

  // 统计 s 的字符出现次数
  for (let i = 0; i < s.length; i++) {
    counter.count(s[i]);
  }

  // 抵消 s 的字符出现次数
  for (let i = 0; i < t.length; i++) {
    counter.decrease(t[i]);
  }

  // 只要存在一个不为 0 的 --> 就说明不是字母异位词
  for (const count of counter.values()) {
    if (count !== 0) return false;
  }

  return true;
}
// @lc code=end
const res = isAnagram('rat', 'car');
console.log(res);
