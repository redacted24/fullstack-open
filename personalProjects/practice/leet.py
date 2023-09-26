class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ans = []
        count = 0
        while count < len(nums):
            inst = target - nums[count]
            if nums.count(inst) != 0:
                ans = [count, nums.index(inst)]
                break
            else:
                count += 1
        return ans
        