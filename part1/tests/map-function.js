const t = [1, 3, 4]
let m1 = t.map(value => "<li>" + value + "<li/>")
m1 = m1.toString()
m1 = m1.replaceAll(",","\n")
console.log(m1)
