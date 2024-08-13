
//if-else
let age=18
if(age>=18)
    console.log('You are Adult !')
else
    console.log('You are Underage !')

//if else-if
let sc=90
if(sc>=90)
    console.log('Grade A')
else if(sc>=80)
    console.log('Grade B')
else if(sc>=70)
    console.log('Grade C')
else
    console.log('Fail')

//ternary operator
let x=20
let a=x<20?10:15
console.log(a)

//Implicit type-casting
let num=5
let str ='this number is '+num
console.log(str)
console.log(typeof(str))

//Explicit type-casting
let n=10
let str1=String(n)
console.log(str1)
console.log(typeof(str1))

let f=true
let str2=String(f)
console.log(str2)

let strbool=f.toString()
console.log(typeof(strbool))

let string='123'
let numb=Number(string)
console.log(numb)
console.log(typeof(numb))

let sF='123.45'
let fNum=parseFloat(sF)
console.log(fNum)
console.log(typeof(fNum))

let arr=[1,2,3,4,5]
let arrS=arr.toString()
console.log(arrS)
console.log(typeof(arrS))

let obj={
    value:10,
    toString:function(){
        return 'object with value'
    },
    valueOf:function(){
        return this.value
    }
}
console.log(obj)
console.log(String(obj))
console.log(Number(obj))

let res='5'*2
console.log(res)
console.log(typeof(res))

let ress='5'+2

console.log(typeof(ress))









