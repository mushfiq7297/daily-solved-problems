for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        nums[i] *= 2; // Double even numbers
    } else {
        nums[i] *= 3; // Triple odd numbers
    }
}
return nums; // 