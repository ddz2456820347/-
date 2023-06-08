/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */
var findDuplicate = function (nums) {
	const map = new Map()
	for (const item of nums) {
		map.set(item, map.has(item) ? map.has(item) + 1 : 1)
	}
	for (const [key, value] of map) {
		if (value === 1) {
			return key
		}
	}
};
console.log(findDuplicate([1, 1, 3, 3, 4, 2, 2]));
