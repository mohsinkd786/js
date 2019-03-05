//'use strict'
let textData = [
            [
                "Hello",
                "HI"
            ],
            [
                "Hello",
                "How"
            ],
            [
                "Whats",
                "up"
            ]
        ]
/*textData.map(m=>{
    m.forEach(innerM=>{
        console.log(innerM)
    })
})
*/
textData = textData.flatMap(m=>{return m})
textData.forEach(m=>console.log(m))

let nums = [35,4,5,8]
console.log('Slice')
let newNums = nums.slice(0,2)
console.log(newNums)

console.log('Splice')
newNums = nums.splice(0,2,[16,6,8,9])

console.log(nums.flatMap(n=>{return n}))

const usrObj = {
    id: 0,
    name: 'Xyz',
    address: {
        street: 'abc'
    }
}
console.log(Object.keys(usrObj))
console.log(Object.values(usrObj))

let usrs=[
    {
        name: 'Abc',
        city: 'Blr'
    },{
        name : 'Xyz',
        city: 'Del'
    },
    {
        name : 'Cdf',
        city: 'Del'
    }
]

let groupByCity = usrs.reduceRight((accumulator,user)=>{
    let key = user['city'] 
    if(!accumulator[key]){
            accumulator[key]=[];
        }
    accumulator[key].push(user)
    return accumulator
},{})
console.log(groupByCity)


const evenNos = [2,4,6,8,10]

let result = evenNos.reduce((accumulator,num)=>{
    return accumulator + num
})
console.log(`Sum is : ${result}`)

const welcomeMsgs = ['Hello','Hi','Hey']

let welcomeMsgsAcc = welcomeMsgs.reduceRight((acc,m)=>{
    return acc + m
})
console.log(welcomeMsgsAcc)

let emps = [
        {
            id: 1,
            name: 'John',
            designation: 'Programmer'
        },
        {
            id: 2,
            name: 'Bob',
            designation: 'Programmer'
        },
        {
            id: 3,
            name: 'Adams',
            designation: 'Developer'
        },
        {
            id: 4,
            name: 'Ram',
            designation: 'Manager'
        }
]

let groupedEmps = emps.reduce((acc,emp)=>{
    let groupBy = emp['designation']

    if(!acc[groupBy]){
        acc[groupBy] = []
    }
    acc[groupBy].push(emp)
    return acc
},{})

console.log(groupedEmps)

let uUser = {
    uId: 1,
    uName: 'Mohsin'
}
Object.create(uUser)

console.log(uUser)

var uUsrs =
    {
        email :'email@gmail.com'
    }

const render = ()=>{
    console.log('Render ',this.uUsrs.email)
}
render()

let oddNums = [1,3,5,7]
oddNums= oddNums.fill([11,13],0,2).flatMap(n=>{return n})

console.log(oddNums)

// classes / objects

class A{
    id
    name
    constructor(_id,_name){
        this.id = _id
        this.name = _name
    }
    sayHello(){
        console.log(`sayHello() ${this.name}`)
        this.name =this.name + ' World'
    }
    getHello(){
        return 'getHello() '.concat(this.name);
    }
    static add(i,j){
        return this.compute(i,j)
    }
    static compute(i,j){
        return i * j
    }
    /*sorted(aa){
        return sorted array
    }*/
}

class B extends A{
    constructor(name){
        // call super class constructor
        // decide whether to pass variables or not
        super()
        // make this available for super class
        this.name = name
    }
    getHello(){
        console.log(`B says Hello & A says ${super.getHello()}`)
    }
}

console.log(A.add(12,2))

// create instance
let aObj = new A(1,'Hello how r u')
aObj.sayHello()

let _msg = aObj.getHello()
console.log(_msg)

let bObj = new B('Hello')
bObj.getHello()

console.log('Test ')

// ECMA Class declaration
const Employee = class {
    firstName
    lastName
    constructor(fName,lName){
        this.firstName = fName
        this.lastName = lName
    }
    getEmployee(){
        return { user: this.firstName+' '+this.lastName }
    }
}

const empU= new Employee('John','Wick')
console.log(empU.getEmployee())

class ArithError extends Error{
    constructor(name,message){
        super(name,message)
    }
}
// Error class
class C {
    calculate(i,j){
        try {
            if(j==0 || j==1){
                if(j==0)
                    throw new ArithError('Division / Zero')
                else
                    throw new Error('Error Occured')    
            }
            console.log(i/j)
        } catch (error) {
            if(error instanceof ArithError)
                console.error(error) 
            else
                console.log(error)    
        }
    }
}
class CustomError extends Error{
    constructor(name,message){
        super(name,message)
    }
}
// 
bObj = new A(3,'A Again')
console.log(bObj.getHello())

let cObj = new C()
cObj.calculate(10,1)

// 
const testAsync =async ()=>{
   return fetch('https://jsonplaceholder.typicode.com/posts')
}
const callerTest =()=>{ 
    testAsync()
    .then(res => res.json())
    .then((data)=>{
        let posts = []
        posts = data.slice(0,10)
        console.log(posts)
    })
    .catch(err=>{
        console.error(err)
    })
}
callerTest()

console.log('test async() completed ')

let uDetails = function(city, state) {
    return this.name + " " + this.email + "," + city + "," + state;
}

let _usr = {
    name : "Mohsin",
    email : "mohsinkd786@gmail.com",
}
console.log(uDetails.call(_usr, "Srinagar", "J & K"))
console.log(uDetails.apply(_usr, ["Srinagar", "J & K"]))

boundDetails =  uDetails.bind(_usr)

console.log(boundDetails(["Srinagar", "J & K"]))

// functional programming
// pure functions
// high order functions
// Symbol

// closure
const outer=(msg)=>{
    return (innerMsg)=>{
        return msg + ' '+innerMsg
    }
}

const _outerC = outer('Hello')
console.log(_outerC('World'))

// 
const _calc = (first,action)=>{
    switch(action){
        case 'ADD':
            return (next)=>{
                return first + next
            }
        case 'DIFF':
            return (next)=>{
                return first - next
            }
    }
}

// cal calc
const _add = _calc(10,'DIFF')
console.log(_add(2))

