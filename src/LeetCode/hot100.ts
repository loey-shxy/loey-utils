/**
 * @description 两数之和
 * @param nums 
 * @param target 
 * @returns
 */
const twoSum = (nums: number[], target: number): number[] => {
  let map = new Map()
  for (let i = 0; ;i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

/**
 * @description 字母异位词分组
 * @param strs 
 * @returns
 */
const groupAnagrams = (strs: string[]): string[][] => {
  let map = new Map()
  strs.forEach(item => {
    const key = item.split('').sort().join('')
    if (map.has(key)) {
      map.set(key, [...map.get(key), item])
    }

    map.set(key, [])
  })

  return [...map.values()]
}

/**
 * @description 找出数组中数字连续最长序列的长度
 * @param nums 
 * @returns 
 */
const longestConsecutive = (nums: number[]): number => {
  if (!nums.length) return 0

  let set: Set<number> = new Set()
  for (const i of nums) {
    set.add(i)
  }

  let longestStreak = 0
  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = 1
      let currentIndex = 1

      while (set.has(currentNum + 1)) {
        currentNum++
        currentIndex++
      }

      longestStreak = Math.max(longestStreak, currentIndex)
    }
  }
  return longestStreak
}

/**
 * @description 移动零
 * 将数组中所有0移动到数组末尾，同时保持非零元素的相对顺序
 * 原地对数组进行操作
 * @param nums
 */
const moveZeroes = (nums: number[]) => {
  const len = nums.length
  let i = 0, j = 0 // 左指针i左边的数字不含0，i和j之间全是0
  while (j < len) {
    if (nums[j] !== 0) {
      if (i !== j) {
        // 右指针遇到不是0时，与左指针交换
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
      i++
    }
    j++
  }
}

/**
 * @description 盛最多水的容器（双指针）
 * @param height 
 * @returns 
 */
const maxArea = (height: number[]): number => {
  const len = height.length
  let left = 0, right = len - 1, area = 0

  while (left < right) {
    const temp = Math.min(height[left], height[right]) * (right - left)
    area = Math.max(area, temp)
    if (height[left] < height[right]) left++
    else right--
  }
  return area
}

/**
 * @description 三数之和等于0 （双指针解法）
 * @param nums 原始数组
 * @returns 和等于0的集合
 */
const threeSum = (nums: number[]): number[][] => {
  let result: number[][] = []
  const len = nums.length
  if (nums.length < 3) return result
  // 先对数组进行排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break  // 如果当前值大于0，则和肯定大于0
    if (i > 0 && nums[i] === nums[i - 1]) continue // 如果相邻两个数相等，则结果会重复
    let left = i + 1, right = len - 1
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++ // 去重
        while (left < right && nums[right] === nums[right - 1]) right-- // 去重
        left++
        right--
      }
      else if (sum < 0) left++
      else if (sum > 0) right--
    }
  }

  return result
}

/**
 * @description 无重复最长子串长度
 * @param s 
 * @returns 
 */
const lengthOfLongestSubstring = (s: string): number => {
  if (!s.length) return 0
  const set = new Set()
  const len = s.length
  let l = 0, r = 0, maxlength = 0
  for (r; r < len; r++) {
    // 当前元素不在set中，就加入set，然后更新最大长度，r++继续下一轮循环
    if (!set.has(s[r])) {
      set.add(s[r])
      maxlength = Math.max(maxlength, set.size)
    } else {
      // set 中有重复元素，不断让l++，并删除窗口之外的元素，直到滑动到窗口内没有重复的元素
      while(set.has(s[r])) {
        set.delete(s[l])
        l++
      }
      set.add(s[r])
    }
  }
  return maxlength
}

/**
 * 是否存在重复元素
 * @param nums 
 * @param k 
 * @returns 
 */
const containsNearbyDuplicate = (nums: number[] | string[], k: number) => {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
}