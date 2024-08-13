console.log('hi') //console.log() is used for output

//blocking variable
let a=5
{
    let a=6
    console.log(a)
}
console.log(a)

var b=10
var b=10
{
    var b=11
    var b=11
    console.log(b)
}
console.log(b)



a='name'
console.log(a[-2]) //undefined as array  is 0 based indexing
let bike=['honda','bmw','kawasaki','tvs']
console.log(bike)
let b1=bike[1]
let s='strings'
console.log(b1)
console.log(typeof(b1)) //typeof tells the data type of variable
console.log(typeof(bike)) //array is object data type
console.log(bike.length) //length of the object(i.e. Array)
console.log(s.length) 
bike.push('mercedes') //push element to the end of the array
console.log(bike)
bike.unshift('royal enfield') //push element to the start of the array
console.log(bike)
bike.pop() //removes the element from the last of the array(object)
console.log(bike)
bike.shift()
console.log(bike) //removes the element from the start of the array
bike[1]='swift' //replacement of element
console.log(bike)

let car=['a class','s class','hector','MG']
let vehicles=bike.concat(car)
console.log(vehicles)

let slice=vehicles.slice(0,6) //get the particular range of elements from the array
console.log(slice)
console.log(bike)
bike.splice(1,1,'kl','lk')
console.log(bike)
console.log(bike.indexOf('tvs'))


//Foreach in js
let names=['atharv','kartik','kavya','kavs']
names.forEach(names=>console.log(names))


//Mapping in js
let length=names.map(names=>names.length)
console.log(length)


//normal for loop in js
for(let i=0;i<bike.length;i++)
{
    console.log(bike[i])
}

//shorthand for
for(let n of names)
{
    console.log(n)
}

//filter used to filter out elements from array based on condition
let vk=names.filter(names=>names.length>5)
console.log(vk)

let jk=bike.reduce((sum,n)=>sum+n.length,0)
console.log(jk)


//2D Array

let matrix=[
    [1,2,3],[4,5,6],[7,8,9]
]
console.log(matrix[0][2])


//(...) spread operator -> expands the elements inside the array
let arr1=[1,2,3]
let arr2=[...arr1,4,5,6]
console.log(arr2)

//(...) rest operator -> collects the elements inside the function
function sum(...num){
    return num.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5,6))

//destruct of array
let[x,y,z,r]=names
console.log(x)
console.log(y)
console.log(z)


//array membership ->Tells that the given element has a membership in the array or not
console.log(names.includes('kavya'))

//sorting arrays
console.log(names)
names.sort()
console.log(names)


let arr=[90,50,30,10,45,69]
arr.sort()
let max=Math.max(...arr)
let min=Math.min(...arr)
console.log(min)
console.log(max)




