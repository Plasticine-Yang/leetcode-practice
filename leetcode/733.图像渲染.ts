/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  // 检测元素是否超出边界
  const inArray = (arr: number[][], x: number, y: number) =>
    x >= 0 && x < arr.length && y >= 0 && y < arr[0].length;

  const fill = (
    image: number[][],
    x: number,
    y: number,
    oldColor: number,
    newColor: number
  ): void => {
    // base case 1: 超出边界
    if (!inArray(image, x, y)) return;
    // base case 2: 不是 oldColor 的区域不需要渲染
    if (image[x][y] !== oldColor) return;
    // base case 3: 遇到特殊颜色不进行渲染
    if (image[x][y] === -1) return;

    // 做选择 -- 将颜色标记为特殊值 -1 表示不需要渲染
    // 防止新旧颜色相同时无法触发 base case 2
    image[x][y] = -1;

    // 进入下一层决策树 -- 把四周的颜色都渲染一遍
    fill(image, x, y - 1, oldColor, newColor); // 上
    fill(image, x, y + 1, oldColor, newColor); // 下
    fill(image, x - 1, y, oldColor, newColor); // 左
    fill(image, x + 1, y, oldColor, newColor); // 右

    // 撤销选择 -- 把颜色渲染回目标颜色
    image[x][y] = newColor;
  };

  const oldColor = image[sr][sc];
  fill(image, sr, sc, oldColor, color);

  return image;
}
// @lc code=end
