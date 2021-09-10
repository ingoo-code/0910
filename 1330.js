const fs = require('fs')
const [a,b] = fs.readFileSync("./dev/stdin").toString().split(" ").map(v=> parseInt(v))

switch(a > b){
    case true:
        console.log(">")
    break;
    case false:
        a == b 
        ? console.log("==")
        : console.log("<")
    break;
}
