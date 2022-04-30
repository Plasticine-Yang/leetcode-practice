/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */

// @lc code=start

/**
 * 滑动窗口
 *
 * 使用哈希表充当篮子 key 是水果种类 value 是篮子中对应类型的水果的个数
 *
 * 窗口缩小时机 -- 窗口内水果种类超过 2 个
 * 窗口增大时机 -- 窗口内水果种类小于等于 2 个
 *
 */
function totalFruit(fruits: number[]): number {
  let left = 0;
  let res = 0;

  const basket = new Basket(); // 篮子

  for (let right = 0; right < fruits.length; right++) {
    const currentFruit = fruits[right];
    // 将水果加入到篮子中
    basket.add(currentFruit);

    // 加入到篮子中后如果水果种类超出 2 个就要开始缩小窗口
    while (basket.size > 2) {
      // 窗口起始处的水果种类对应的数量减 1 表示将其移出篮子
      basket.decrease(fruits[left]);

      // 减到 0 了就说明篮子中已经没了这种水果了
      if (basket.get(fruits[left]) === 0) basket.delete(fruits[left]);

      // 缩小窗口
      left++;
    }

    // 更新 res
    res = Math.max(res, right - left + 1);
  }

  return res;
}

class Basket extends Map<number, number> {
  /**
   * @description 往篮子中放入水果
   * @param fruit 水果种类
   */
  add(fruit: number): void {
    const count = this.get(fruit);

    if (!count) {
      this.set(fruit, 1);
    } else {
      this.set(fruit, count + 1);
    }
  }

  /**
   * @description 将水果种类在篮子中的数量减 1
   * @param fruit 水果种类
   */
  decrease(fruit: number): void {
    const count = this.get(fruit);

    if (count) {
      this.set(fruit, count - 1);
    }
  }
}
// @lc code=end

const res = totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]);
console.log(res);
