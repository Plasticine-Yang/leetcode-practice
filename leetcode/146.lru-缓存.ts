/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/** 双向链表结点 */
class DNode {
  // 结点存储的数据为 key - value
  public key: number;
  public value: number;
  // 指向前驱和后继
  public prev: DNode | null;
  public next: DNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/** 双向链表 */
class DoubleLinkedList {
  // 虚拟头尾结点
  private head: DNode;
  private tail: DNode;

  public size: number = 0;

  constructor() {
    // 初始化虚拟头尾结点
    this.head = new DNode(-1, -1);
    this.tail = new DNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @description 在双向链表末尾插入结点
   * @param node 待添加的结点
   */
  public addLast(node: DNode): void {
    // 将 node 插入到最后
    node.prev = this.tail.prev;
    node.next = this.tail;
    // 将 tail 的指针修正
    this.tail.prev!.next = node;
    this.tail.prev = node;
    this.size++;
  }

  /**
   * @description 将结点从双向链表中移除
   * @param node 待移除的结点
   */
  public remove(node: DNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this.size--;
  }

  /**
   * @description 移除双向链表的第一个结点
   */
  public removeFirst(): DNode | null {
    if (this.head.next === this.tail) {
      // 双向链表为空则没法移除
      return null;
    }

    const first = this.head.next;
    this.remove(first!);

    return first;
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<number, DNode>;
  private cache: DoubleLinkedList;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.cache = new DoubleLinkedList();
  }

  private makeRecently(key: number): void {
    // 从哈希表中获取到双向链表结点
    const node = this.map.get(key);
    if (node) {
      // 将其从链表中删除
      this.cache.remove(node);
      // 再将其插入到尾部 表示最近使用过
      this.cache.addLast(node);
    }
  }

  /**
   * @description 删除 key 的时候统一从哈希表和双向链表中删除
   * @param key 待删除的 key
   */
  private deleteKey(key: number): void {
    const node = this.map.get(key);
    if (node) {
      this.map.delete(key);
      this.cache.remove(node);
    }
  }

  /**
   * @description 添加元素并让其成为最近使用过的
   */
  private addRecently(key: number, value: number): void {
    const node = new DNode(key, value);
    this.cache.addLast(node);
    this.map.set(key, node);
  }

  /**
   * @description 移除最近最久未使用的结点 要在 map 和链表中都移除
   */
  private removeLeastRecently(): void {
    const node = this.cache.removeFirst();
    node && this.map.delete(node.key);
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node) {
      this.makeRecently(key);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);
    if (node) {
      // 删除旧数据
      this.deleteKey(key);
      // 新插入的数据作为最近使用过的
      this.addRecently(key, value);
    } else {
      // 新增的元素 要注意是否超出容量
      if (this.cache.size >= this.capacity) {
        this.removeLeastRecently();
      }

      // 把元素添加 作为最近使用过的键值对
      this.addRecently(key, value);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
