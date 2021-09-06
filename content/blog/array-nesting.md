---
title: Array Nesting
date: "2021-09-01"
---

This post is part of leetcode solutions series in Javascript.  
Leetcode question: [Array Nesting](https://leetcode.com/problems/array-nesting/)

## Question:
You are given an integer array nums of length n where nums is a permutation of the numbers in the range [0, n - 1].

You should build a set `s[k] = {nums[k], nums[nums[k]], nums[nums[nums[k]]], ... }` subjected to the following rule:

The first element in `s[k]` starts with the selection of the element nums[k] of index = k.
The next element in `s[k]` should be `nums[nums[k]]`, and then `nums[nums[nums[k]]]`, and so on.
We stop adding right before a duplicate element occurs in `s[k]`.
Return the longest length of a set `s[k]`.

Example 1:
```js
Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
```
Example 2:
```js
Input: nums = [0,1,2]
Output: 1
``` 

Constraints:

- 1 <= nums.length <= 105
- 0 <= nums[i] < nums.length
- All the values of nums are unique.

Solution:

Time Complexity: O(n)   
Space Complexity: O(n)

```js
var arrayNesting = function(nums) {
  // For each element in nums repeatedly find nums[element] untill we find the cycle 
  // i.e. starting point equals the nums[element] after traversing
  
  // Keep updating the length of the path, the longest one is the answer
  // Note: We don't start with the element if it is already there in the visited
  // Why? Because it was already there in some path earlier and thus starting the path from this particular element again will 
  // definitely give smaller path than it was already seen in
  
  const visited = new Set();
  let max = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    if(!visited.has(i)) {
      let count = 0;
      
      // start from current i if not visited
      let start = nums[i]; 
      
      // repeat until the cycle is found
      do {
        visited.add(start, true);
        start = nums[start];
        count++;
      } while(start !== nums[i]);
      
      // update the max length path
      max = Math.max(max, count);
    }
  }
  return max;
};
```
Related Topics:
Array, DFS
