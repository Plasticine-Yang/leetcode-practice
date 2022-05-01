/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start

/**
 * @description 计数器 -- 使用 Map 实现
 */
class Counter<K = any> extends Map<K, number> {
  /**
   * @description 给 key 计数 key 存在时自增 1，不存在时则为 1
   * @param key key
   */
  count(key: K) {
    if (this.has(key)) {
      this.set(key, this.get(key)! + 1);
    } else {
      this.set(key, 1);
    }
  }
}

/**
 * 滑动窗口
 *
 * need 统计 t 中字符出现的次数
 * window 统计窗口中包含 t 的字符的出现次数
 * e.g t --> abc  窗口中的字符串 --> asdfghj
 * need === { a: 1, b: 1, c: 1 }
 * window === { a: 1, b: 0, c: 0 }
 *
 * valid 代表有效字符的个数
 * e.g t --> abc 窗口中的字符串 --> asdfghj
 * valid === 1 --> 因为当前窗口中只有 a 符合要求
 */
function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0; // 最终结果字符串在 s 中的起始下标
  let len = Number.MAX_SAFE_INTEGER; // 最终结果字符串的长度
  const window = new Counter<string>();
  const need = new Counter<string>();

  // 初始化 need
  for (const char of t) {
    need.count(char);
  }

  // 滑动窗口
  while (right < s.length) {
    const c = s[right]; // c 是即将进入窗口的字符
    // 增大窗口 -- 寻找可行解
    right++;
    // 进行窗口内数据的更新 -- 更新 window 哈希表
    if (need.has(c)) {
      // 如果 c 是 need 中需要的 则将其加入到 window 中 (已有则将出现次数加 1)
      window.count(c);
      // 判断增加后 c 在 window 中出现的次数是否满足 need 中对应的需求 是的话则让 valid++
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    // =============== 在这里进行 debug ===============

    // 判断左侧窗口是否需要收缩
    while (valid === need.size) {
      // 寻找最优解
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      const d = s[left]; // d 是即将移出窗口的字符
      // 收缩窗口 -- 在收缩之前寻找最优解
      left++;

      // 进行窗口内数据的更新 -- 更新 window 哈希表
      if (need.has(d)) {
        // 如果 d 是 need 中需要的 则将其在 window 中的出现次数减 1

        // 如果 d 在窗口中出现的次数和在 need 中需要的次数一样 那么 valid 应该减 1
        // 因为移出窗口后 d 在 window 中出现的次数会减 1 这就导致原本满足 valid 的变为了不满足
        if (window.get(d) === need.get(d)) {
          valid--;
        }

        // d 在 window 中的出现次数减 1
        window.set(d, window.get(d)! - 1); // 用 ! 断言存在是因为右侧窗口遍历的时候肯定已经将 d 添加到窗口了
      }
    }
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.slice(start, start + len);
}
// @lc code=end

const res = minWindow('ADOBECODEBANC', 'ABC');
// const res = minWindow('a', 'aa');
console.log(res);
