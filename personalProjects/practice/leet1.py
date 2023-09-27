class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ans = []
        count = 0
        while count < len(nums):
            inst = target - nums[count]
            if nums.count(inst) != 0:
                ans.extend(nums[count])
                break
            count += 1
        print('program done', ans)
