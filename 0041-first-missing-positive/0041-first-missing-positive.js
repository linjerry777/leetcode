/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  const n = nums.length;
  // 将正整数 k 放到下标为 k-1 的位置上
  for (let i = 0; i < n; i++) {
      
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  // 找到第一个不在正确位置上的正整数
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  // 如果数组中所有正整数都在正确位置上，则缺失的第一个正整数为数组长度加一
  return n + 1;
}