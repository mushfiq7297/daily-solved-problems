function getSecondLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
        console.log(i,largest,secondLargest)
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

console.log(getSecondLargest([5, 2, 7, 1]));