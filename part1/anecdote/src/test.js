const arr = [1, 2, 3, 999, 5, 6, 9]
let maxValue = 0

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
        maxValue = arr[i]
    }
}

console.log(maxValue)