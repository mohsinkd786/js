//'use strict'
const msg = 'Hello'
let a = 1
let b = 2
console.log(`Message :  ${a + b}`)
//msg = 'Hi'
console.log(msg)

// arrow function
const test = () =>{
    console.log('Testing')
}
// call the function
test()

// param based arrow function
const message = (msg)=>{
    console.log(msg)
} 

// call the function & pass the param
message('Hello World')

// simple array
const numbers = [10,2,3,4]

// using for in loop
for(let i in numbers){
    console.log(numbers[i])
}
// using for of loop
for(let num of numbers){
    console.log(num)
}
// for each
numbers.forEach((u,index)=>{
    console.log(`For Each : ${index}`,u)
})

numbers.forEach(u=>console.log('One Liner: ',u))

numbers.sort((i,j)=>{return j-i}).forEach(u=>console.log(u))

let users = [
    {
        id: 1,
        name: 'Bob Marley',
        city: 'Bengaluru'
    },
    {
        id: 2,
        name: 'Bob Adams',
        city: 'London'
    },
    {
        id: 3,
        name: 'Adam',
        city: 'London'
    }
]

users.sort((usr1,usr2)=>{
    if(usr1.name < usr2.name){
        return 1
    }else{
        return -1
    }
}).forEach(u=>console.log(u))

//console.log(usr.firstName)

const msgs = ['Hello','Hey','Welcome','Hi']
msgs.sort().forEach(m=>console.log(m))

const usr = {
    firstName : 'Hello',
    lastName: 'World',
    address: 'Bengaluru'    
}
usr.lastName = 'Sample'
console.log(usr)

//Object.freeze(usr)
//Object.seal(usr)

usr.lastName = 'Test'
Object.assign(usr,{ age: 10 })
console.log('Usr Re Created')

console.log(usr)
// define single property
Object.defineProperty(usr,'street',{
    value: 'Blr',
    writable: false
})

// will throw error only in strict mode
// else the execute flow will continue
usr.street = 'Del'

// define multiple properties
Object.defineProperties(usr,{
    location:{
        value: 'Wipro Avenue',
        writable: true
    },
    userName: {
        value: 'admin'
    }
})
console.log(usr)

/*let add ={
    name: '',
    email: '',
    address: {
        city : '',
        street: '',
        country: ''
    }
}*/
// returns us a sub array
let cityBasedUsers = users.filter(u=>{
    return u.city == 'London'
})
console.log(cityBasedUsers)

let cityBasedUser = users.find(u=>{
    return u.city == 'London'
})
console.log(cityBasedUser)
console.log(users)

let newUsers = users.map((u)=>{
    return  [{
         user : u.name +', '+ u.city 
        }]
})
console.log(newUsers[0][0].user)
console.log('FLAT MAP ')

newUsers = users.flatMap((u)=>{
    return  [{ user : u.name +', '+ u.city }]
})
console.log(newUsers[1])

//newUsers.forEach(u=>console.log(u))
