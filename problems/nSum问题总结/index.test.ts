import { twoSum as twoSum1 } from './01_2Sum返回value_一对结果即可';
import { twoSum as twoSum2 } from './02_2Sum返回value_返回所有结果';
import { threeSum } from './03_3Sum返回value_返回所有结果';
import { nSum } from './04_nSum返回value_返回所有结果';

// 单元测试
describe('01_2Sum返回value_一对结果即可', () => {
  test('正常情况', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expectedRes = [2, 7];

    const res = twoSum1(nums, target);

    expect(res).toEqual(expectedRes);
  });
  test('nums乱序', () => {
    const nums = [11, 2, 7, 15];
    const target = 9;
    const expectedRes = [2, 7];

    const res = twoSum1(nums, target);

    expect(res).toEqual(expectedRes);
  });
});

describe('02_2Sum返回value_返回所有结果', () => {
  test('正常情况', () => {
    const nums = [1, 1, 1, 2, 2, 3, 3];
    const target = 4;
    const expectedRes = [
      [1, 3],
      [2, 2],
    ];

    const res = twoSum2(nums, target);

    expect(res).toEqual(expectedRes);
  });
});

describe('03_3Sum返回value_返回所有结果', () => {
  test('正常情况', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const target = 0;
    const expectedRes = [
      [-1, 2, -1],
      [0, 1, -1],
    ];

    const res = threeSum(nums, target);

    expect(res).toEqual(expectedRes);
  });
});

describe('04_nSum返回value_返回所有结果', () => {
  test('2Sum', () => {
    const nums = [1, 1, 1, 2, 2, 3, 3];
    const target = 4;
    const expectedRes = [
      [1, 3],
      [2, 2],
    ];

    const res = nSum(nums, 2, target);

    expect(res).toEqual(expectedRes);
  });
  test('3Sum', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const target = 0;
    const expectedRes = [
      [-1, 2, -1],
      [0, 1, -1],
    ];

    const res = nSum(nums, 3, target);

    expect(res).toEqual(expectedRes);
  });
  test('4Sum', () => {
    const nums = [1, 0, -1, 0, -2, 2];
    const target = 0;
    const expectedRes = [
      [1, 2, -1, -2],
      [0, 2, 0, -2],
      [0, 1, 0, -1],
    ];

    const res = nSum(nums, 4, target);

    expect(res).toEqual(expectedRes);
  });
});
