/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  // 编码到分组的映射
  // strs 中的每个字符串的编码结果作为 key，value 是具有相同 key 的字符串组成的数组
  const codeToGroup = new Map<string, string[]>();

  // 对 strs 中的每个字符串进行编码
  for (const str of strs) {
    // 编码得到的 code 作为 key
    const code = encode(str);

    // 把 code 相同的 str 放到一起
    if (!codeToGroup.has(code)) {
      codeToGroup.set(code, [str]);
    } else {
      codeToGroup.get(code)?.push(str);
    }
  }

  // 生成结果
  const res: string[][] = [];
  for (const group of codeToGroup.values()) {
    res.push(group);
  }

  return res;
}

/**
 * @description 根据每个字符的出现次数进行编码
 * @param str 字符串
 */
function encode(str: string): string {
  // 存放每个字符出现次数的哈希表 -- 用数组实现
  const code = new Array<number>(26).fill(0);

  for (const char of str) {
    // 获取字符对应的数字编码值
    const codeIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // 给 char 计数 -- key 为 codeIndex
    code[codeIndex]++;
  }

  return code.toString();
}
// @lc code=end

const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(res);
