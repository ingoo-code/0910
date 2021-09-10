const fs = require('fs')
const [a,b] = fs.readFileSync("./dev/stdin").toString().split(" ") 


function reversNumber(a){
    let tmp = ""
    for (let i = (a.length-1); i >= 0; i--) {
        tmp += a[i]
    }
    return parseInt(tmp)
}

function result(a,b){
    switch(a > b){
        case true:
            return a
        case false:
            return b
    }
}

console.log(result(reversNumber(a),reversNumber(b)))