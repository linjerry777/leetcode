/**
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
  let count = 0;
  for (let i = 1; i < nums.length && count <= 1; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return count <= 1;
}