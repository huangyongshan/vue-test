import { sum } from "@/tools/sum";

test("sum的功能测试", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  expect(sum(0.1, 0.2)).not.toBe(0.3);
});
