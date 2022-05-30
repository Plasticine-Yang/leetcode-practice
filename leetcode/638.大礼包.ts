/*
 * @lc app=leetcode.cn id=638 lang=typescript
 *
 * [638] 大礼包
 */

// @lc code=start
function shoppingOffers(
  price: number[],
  special: number[][],
  needs: number[]
): number {
  const n = price.length;
  // 既是 dp 表 又是 缓存
  const memo = new Map<number[], number>();

  // 排除不符合要求的大礼包
  const filterdSpecial: number[][] = [];
  for (const sp of special) {
    let totalCount = 0; // 大礼包中的商品总数
    let totalPrice = 0; // 原价购买大礼包中商品的价格

    for (let i = 0; i < n; i++) {
      totalCount += sp[i];
      totalPrice += sp[i] * price[i];
    }
    // 大礼包不能为空 && 大礼包的价格要低于原价购买商品的价格
    if (totalCount > 0 && totalPrice > sp[n]) {
      filterdSpecial.push(sp);
    }
  }

  /**
   * @description 计算满足 curNeeds 购物清单的最低价格
   * @param curNeeds needs 表
   */
  const dfs = (curNeeds: number[]): number => {
    if (!memo.has(curNeeds)) {
      let minPrice = 0;
      // 初始化 minPrice 为 原价购买清单中的商品所需的价格
      for (let i = 0; i < n; i++) {
        minPrice += curNeeds[i] * price[i];
      }
      // 状态转移方程
      for (const sp of filterdSpecial) {
        const nextNeeds: number[] = [];
        // 不能购买超出商品清单指定数量的大礼包
        for (let i = 0; i < n; i++) {
          if (sp[i] > curNeeds[i]) break;
          nextNeeds.push(curNeeds[i] - sp[i]);
        }
        // 大礼包可以购买
        if (nextNeeds.length === n) {
          minPrice = Math.min(minPrice, dfs(nextNeeds) + sp[n]);
        }
      }
      memo.set(curNeeds, minPrice);
    }

    return memo.get(curNeeds)!;
  };

  return dfs(needs);
}
// @lc code=end

const ans = shoppingOffers(
  [2, 5],
  [
    [3, 0, 5],
    [1, 2, 10],
  ],
  [3, 2]
);
console.log(ans);

export {};
