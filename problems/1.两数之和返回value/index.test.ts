import { twoSum } from "./1.两数之和返回value";

// 单元测试
describe("两数之和返回值", () => {
  test("正常情况", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expectedRes = [2, 7];

    const res = twoSum(nums, target);

    expect(res).toEqual(expectedRes);
  });
  test("nums乱序", () => {
    const nums = [11, 2, 7, 15];
    const target = 9;
    const expectedRes = [2, 7];

    const res = twoSum(nums, target);

    expect(res).toEqual(expectedRes);
  });
});
