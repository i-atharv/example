console.log('hi')
console.warn("Warnings")
console.error("This is error")

// boolean
a=50
b=300
console.log('this is a typeof')
c='string'
console.log(typeof(c))
num=35.5
console.log(typeof(num))
console.log('this is a number')
if (a>b){
    console.log("A is greater than B")
}
else if(b>a){
    console.log('B is greater than A')
}
else{
    console.log("Both are equal")
}
// const x=function(){

// }

// const b=()=>{

// }

// function h(){

// }
console.log(typeof(x))
// Blocking and non-blocking variable types
var ab=10
var ab=20
{
    var ab=20
    console.log(ab)
}
console.log(ab)
let xy=10
{
    let xy=20
    console.log(xy)
}
console.log(xy)

