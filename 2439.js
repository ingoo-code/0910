const fs = require("fs")
const number = parseInt(fs.readFileSync("./dev/stdin"))

let result = ""
for (let i = 1; i <= number; i++) {
    let lpad = " ".repeat(( (number) - i))
    result += lpad+"*".repeat(i)+( i != number ? "\n" : "")
} 
console.log(result)