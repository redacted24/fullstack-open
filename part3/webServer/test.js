arr = [1, 2, 3, 4, 5]
e = [...arr.map(n => n*2)]
console.log(arr)
console.log(...arr.map(n => n*2))
console.log(e)