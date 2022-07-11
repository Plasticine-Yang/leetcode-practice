/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * 小顶堆实现，首先将数组中所有元素放入小顶堆中
 * 堆中元素个数超出 k 个时，将堆顶元素移除
 * 由于堆中始终保持着 k 个元素，则意味着移除了 n - k 个最小的元素
 * 所以剩下的堆中堆顶就是第 k 个最大的元素
 *
 * 类似地，如果要求第 k 个最小元素，就可以用大顶堆来实现
 */
// function findKthLargest(nums: number[], k: number): number {
//   const n = nums.length;
//   // 用小顶堆求解
//   const minHeap = new MinHeap(n);

//   for (const num of nums) {
//     // 数组中所有元素都要过一次小顶堆
//     minHeap.insert(num);
//     if (num === 5) {
//       const a = 1;
//     }
//     if (minHeap.size() > k) {
//       // 堆中元素个数超出 k 个的时候将堆顶元素移除
//       minHeap.delMin();
//     }
//   }

//   return minHeap.getHeapTop();
// }

// class MinHeap {
//   private data: number[];
//   private _size: number;

//   constructor(capacity: number) {
//     // 索引 0 处的值不需要
//     this.data = new Array(capacity + 1);
//     this._size = 0;
//   }

//   /**
//    * @description 寻找 x 的父节点
//    */
//   private parent(x: number): number {
//     // 索引除 2 就是父节点的索引
//     return Math.floor(x / 2);
//   }

//   /**
//    * @description 寻找 x 的左子节点
//    */
//   private leftChild(x: number): number {
//     return x * 2;
//   }

//   /**
//    * @description 寻找 x 的右子节点
//    */
//   private rightChild(x: number): number {
//     return x * 2 + 1;
//   }

//   private exchange(p: number, q: number) {
//     const temp = this.data[p];
//     this.data[p] = this.data[q];
//     this.data[q] = temp;
//   }

//   private less(p: number, q: number) {
//     if (this.data[p] !== undefined && this.data[q] !== undefined) {
//       return this.data[p] < this.data[q];
//     }

//     return false;
//   }

//   public size() {
//     return this._size;
//   }

//   /**
//    * @description 上浮第 k 个元素
//    */
//   private swim(k: number): void {
//     // 上浮到堆顶则不能继续上浮 -- k === 1
//     while (k > 1) {
//       const parent = this.parent(k);
//       // 比父节点大时不能再上浮 -- k > this.parent(k)
//       if (this.less(parent, k)) break;

//       // 比父节点小则上浮
//       this.exchange(k, parent);
//       k = parent;
//     }
//   }

//   /**
//    * @description 下沉第 k 个元素
//    */
//   private sink(k: number): void {
//     // 下沉到堆底就不能下沉了
//     while (this.leftChild(k) <= this._size) {
//       // 先假设左孩子比较小
//       let min = this.leftChild(k);
//       if (this.less(this.rightChild(k), min)) {
//         // 如果右孩子更小则更新 min
//         min = this.rightChild(k);
//       }

//       // 如果结点 k 已经比两个孩子都小的话就没必要下沉了
//       if (this.less(k, min)) break;

//       // 否则的话破坏了小顶堆的结构 需要交换 k 和 min 的位置进行下沉
//       this.exchange(k, min);
//       k = min;
//     }
//   }

//   /**
//    * @description 插入元素 插入后会保持小顶堆的特性
//    * @param e 插入的元素
//    */
//   public insert(e: number): void {
//     // 先插入到堆底
//     this.data[++this._size] = e;
//     // 然后让其上浮到正确位置
//     this.swim(this._size);
//   }

//   /**
//    * @description 移除堆顶元素 -- 对小顶堆而言就是最小的元素
//    */
//   public delMin() {
//     // 堆顶元素就是最小元素
//     const min = this.data[1];
//     // 由于底层使用的是数组结构，为了避免移动元素，把这个元素换到堆底的最后再删除
//     this.exchange(1, this._size);
//     delete this.data[this._size];
//     this._size--;
//     // 让堆顶元素下沉到合适位置
//     this.sink(1);

//     return min;
//   }

//   /**
//    * @description 获取堆顶元素
//    */
//   public getHeapTop() {
//     return this.data[1];
//   }
// }

/**
 * 快速选择算法解法 -- 快速排序 + 洗牌算法
 */
function findKthLargest(nums: number[], k: number): number {
  const swap = (arr: number[], p: number, q: number) => {
    const temp = arr[p];
    arr[p] = arr[q];
    arr[q] = temp;
  };

  /**
   * 洗牌算法 -- 将数组打乱
   * @param arr 数组
   */
  const shuffle = (arr: number[]) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      // 随机选取一个 [i, n-1] 下标
      const randomIdx = Math.floor((n - i) * Math.random()) + i;
      swap(arr, i, randomIdx);
    }
  };

  /**
   * 快速排序分区 -- 对 arr[lo...hi] 进行切分
   * 切分完之后 arr[lo...p] 的元素比 pivot 小 arr[p+1...hi] 的元素比 pivot 大
   * @param arr 数组
   * @param lo 左边界
   * @param hi 有边界
   * @returns pivot 元素的下标
   */
  const partition = (arr: number[], lo: number, hi: number) => {
    // 以第一个元素作为 pivot 基准元素
    const pivot = arr[lo];
    // 双指针
    let i = lo + 1;
    let j = hi;

    // i > j 的时候结束外循环 保证覆盖 [lo, hi] 区间
    while (i <= j) {
      // while 结束时恰好 arr[i] > pivot
      while (i < hi && arr[i] <= pivot) i++;
      // while 结束时恰好 arr[j] <= pivot
      while (j > lo && arr[j] > pivot) j--;
      // 两个 while 走完之后 [lo, i) <= pivot && (j, hi] > pivot

      // 两个指针相遇 -- 跳出循环，把 pivot 元素放到指针相遇处
      if (i >= j) break;

      // 没有相遇则交换两个指针的元素
      swap(arr, i, j);
    }
    // 将 pivot 放到合适位置，让 pivot 左边元素比 pivot 小，右边元素比 pivot 大
    // 也就是让 pivot 的下标和双指针相遇处的下标交换即可
    swap(arr, lo, j);

    return j;
  };

  // 先调用洗牌算法打乱数组 -- 避免出现快排二叉树退化为链表的特殊情况
  shuffle(nums);
  let lo = 0;
  let hi = nums.length - 1;
  // 转化为求升序排序后排名第 k 的元素
  k = nums.length - k;
  while (lo <= hi) {
    // 在 [lo...hi] 中找一个分界点
    // 找到分界点的同时 nums[p] 已经被放到正确的位置上
    const p = partition(nums, lo, hi);
    if (p < k) {
      // k 在 p 的右边 -- 即 k 在 [p+1...hi] 中
      lo = p + 1;
    } else if (p > k) {
      // k 在 p 的左边 -- 即 k 在 [lo...p-1] 中
      hi = p - 1;
    } else {
      // 找到升序排序后排名第 k 的元素
      return nums[p];
    }
  }

  return -1;
}
// @lc code=end

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

const ans = findKthLargest(nums, k);
console.log(ans);

export {};
