console.log('OBJECTS')

let person={
    name:'John',
    age:20,
    isStudent:false
}
console.log(person)


let persons=new Object()
persons.name='Atharva'
persons.age=22
persons.isStudent=true
console.log(persons)
console.log(persons.name)
console.log(persons['name'])
person.age=35
console.log(person)
delete person.age
console.log(person)

let persone={
    name:'kl',
    age:99,
    greet:function(){
        console.log('Hello My Name Is Atharv')
    }
}
persone.greet()



let pers={
    name:'kl',
    age:99,
    address:{
        street:'Lorem Html Css',
        city:'New York',
        country:'Usa'
    }
}

console.log(pers.address.city)

for(let key in pers){
    console.log(pers[key])
}

console.log(Object.keys(pers))
console.log(Object.values(pers))

console.log(Object.entries(pers))

let addInfo={hobbies:['gaming','hacking']}

let updateP=Object.assign({},pers,addInfo)
console.log(updateP)