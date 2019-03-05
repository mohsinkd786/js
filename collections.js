//'use strict'
let uMap = new Map()

uMap.set('key1','Hello')
uMap.set('key2','Hi')
uMap.set('key1','Hey')

//console.log(uMap)

for(let [key,value] of uMap){
   // console.log(key,value)
}

//console.log(uMap.get('key1'))

// console.log(uMap.values())
// console.log(uMap.keys())

for(let key of uMap.keys()){
    console.log(`Key : ${key}`)
}
let usrObj1 = {
    id: 1,
    name: 'Hello'
}
let usrObj2 = {
    id: 2,
    name: 'Hi'
}
let usrObj3 = {
    id: 2,
    name: 'Hi'
}

console.log(usrObj2 === usrObj3)

let usrMap = new Map()

usrMap.set(usrObj1,usrObj1.name)
usrMap.set(usrObj2,usrObj2.name)

usrMap.set(usrObj3,usrObj1.name)

// traverse via map entries
for(let [key,value] of usrMap){
    console.log(`Key : ${key.id} ,Value : ${value}`)
}
 // access keys
for(let k of usrMap.keys()){
    console.log(`Key is : ${k.id}`)
}

//console.log(usrMap.get(usrObj1))

const uSet = new Set()

uSet.add('How')
uSet.add('Are')
//uSet.add('You')

for(let s of uSet){
    console.log(`Set Value : ${s}`)
}

console.log(uSet.keys())

const usrSet = new Set()
usrSet.add(usrObj1)
usrSet.add(usrObj1)
usrSet.add(usrObj3)

for(let u of usrSet){
    console.log(`Users are : ${u.name}`)
}

const usRs = new Map()
let mUsr1 = {
    id: 1,
    name: 'Bob',
    email: 'bob@gmail.com'
}
let mUsr2 = {
    id: 2,
    name: 'John',
    email: 'john@email.com',
    salary: 10
}

// console.log(Object.keys(mUsr2))

usRs.set(Object.keys(mUsr1),mUsr1)
usRs.set(Object.keys(mUsr2),mUsr2)

for(let [key,value] of usRs){
    key.forEach(col => {
        let columnName = value[col]
        console.log(`${col} : ${columnName}`)      
    });
}

let srtNums = new Map()
srtNums.set('John',{ name: 'John'})
srtNums.set('Bob',{ name: 'Bob' })
srtNums.set('Zack',{ name: 'Zack'})

srtNums.delete('Zack')

// sort array by value
let srtdMap = new Map(Array.from(srtNums.entries()).sort((a,b)=>{
     if(a[1].name > b[1].name)
        return -1
    else
        return 1
})).forEach((v,k)=>{
    console.log(`${k} ${v.name}`)
})

const weakUsers = new WeakMap()
let oWeak1= {id: 1}
weakUsers.set(oWeak1,'Hey')
weakUsers.set({id: 2},'How r u ')
console.log(weakUsers.get(oWeak1))

weakUsers.delete(oWeak1)
const weakSet = new WeakSet()
weakSet.add(oWeak1)

console.log(weakSet)

// 
const _clsrMessage= (_msg)=>{
    let detailedMsg = `Hey Folks! ,${_msg}`
    return (inMsg)=>{
        console.log(detailedMsg +' '+inMsg)
    }
}
const innerClsrMessage = _clsrMessage('Closure Message')
innerClsrMessage('Inner')

const _calculator= (_first,_operation)=>{
    // outer function
    let _msg = ''
    switch(_operation){
        case 'ADD':
            _msg = 'SUM is'
            return (_next)=>{
                 // add closure
                return ()=>{
                    // inner add closure
                    let _result = _first + _next
                    return `${_msg} ,${_result}`
                }
            }
        case 'DIFF':
            _msg = 'DIFFERENCE is'
            return (_next)=>{
                // add closure
                return ()=>{
                    // inner diff closure
                    let _result = _first - _next
                    return `${_msg} ,${_result}`
                }
        }
        case 'MUL':
            _msg = 'PRODUCT is'
            return (_next)=>{
                // mul closure
                return ()=>{
                    // inner mul closure
                    let _result = _first * _next
                    return `${_msg} ,${_result}`
                }
            }
            
    }
}

const _calcOperator = _calculator(10,'ADD')(3)()

console.log(`${_calcOperator}`)

const _calcOuter = _calculator(11,'MUL')
const _calcInner = _calcOuter(3)
const _calcResult = _calcInner()

console.log(`Calculator : ${_calcResult}`)

let clsrEmps = [
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
const EMPActions ={
    FETCH_ALL: 'FETCH_ALL',
    FETCH_BY_DESIGNATION: 'FETCH_BY_DESIGNATION',
    ADD: 'ADD',
    DEL_BY_ID: 'DEL_BY_ID'
}
//lock the modifications
Object.freeze(EMPActions)

const EmployeeDesignation={
    Programmer: 'Programmer',
    Developer: 'Developer',
    Manager: 'Manager',
    Consultant : 'Consultant'
}
//lock the modifications
Object.freeze(EmployeeDesignation)

const clsrEmp = (_emps,_action)=>{
    switch(_action){
        case EMPActions.FETCH_ALL:
            return ()=>{
                return _emps
            }
        case EMPActions.FETCH_BY_DESIGNATION:
            return (_designation)=>{
                return _emps.filter(e=>{
                    return e.designation == _designation
                })
            }
        case EMPActions.ADD:
            return (_empObj)=>{
                const eExists = _emps.find(e=>{ return e.id == _empObj.id})
                if(eExists)
                    throw new Error('User already exists')
                _emps.push(_empObj)
                return _emps    
            }
        case EMPActions.DEL_BY_ID:
            return (_eId)=>{
                clsrEmps = _emps.filter(e=> {return e.id != _eId})
                return clsrEmps
            }
    }
}

const _clsrEmpCaller = clsrEmp(clsrEmps,EMPActions.FETCH_ALL)
const _clsrInnerEmpCaller = _clsrEmpCaller()
console.log(_clsrInnerEmpCaller)

const _clsrEmpCallerByDesig = clsrEmp(clsrEmps,EMPActions.FETCH_BY_DESIGNATION)
const _clsrInnerEmpCallerByDesig = _clsrEmpCallerByDesig(EmployeeDesignation.Programmer)
console.log(_clsrInnerEmpCallerByDesig)

const _clsrEmpCallerByAdd = clsrEmp(clsrEmps,EMPActions.ADD)
const _clsrInnerEmpCallerByAdd = _clsrEmpCallerByAdd({id: 5,name:'Mohsin',designation:EmployeeDesignation.Consultant})
console.log(_clsrInnerEmpCallerByAdd)

const _clsrEmpCallerDelById = clsrEmp(clsrEmps,EMPActions.DEL_BY_ID)
const _clsrInnerEmpCallerDelById = _clsrEmpCallerDelById(1)
console.log(_clsrInnerEmpCallerDelById)

// Proxy

const _target = {
    txt: 'hello'
}
let _handler = {
    get: (target,key)=>{
        return target[key]
    },
    set: (target,key,value)=>{
        target[key] = value + value
        return true
    }
}
let prxy = new Proxy(_target,_handler)
console.log(prxy.txt)
prxy.txt = 'Hey'
console.log(prxy.txt)


// object
let _actions={
    _operation: 'DIFF'
}
// function 
function _process(_first,_next){
    let _result=0
    switch(this._operation){
        case 'ADD':
            _result = _first + _next
            return `${this._operation} ,${_result}`
        case 'DIFF':
            _result = _first - _next
            return `${this._operation} ,${_result}`
    }
    return 'No operation trigerred'   
}

// binding the object with the function 
let _res = _process.call(_actions,10,2)

console.log(`${_res}`)

_actions._operation = 'ADD'

_res = _process.apply(_actions,[10,2])

console.log(`${_res}`)

let persons = [
    {
        name: 'p1'
    },
    {
        name : 'p2'
    },
    {
        name : 'p3'
    }
]
function parseName(_by){
    // this shall be the persons
    if(this instanceof Array){
        this.forEach(p=>{
            console.log(`${_by} Name :  ${p.name}`)
        })
    }else{
        console.log(`${_by} Name is ${this.name}`)
    }
}
// passing array of persons
parseName.call(persons,'Call')

// passing only a single person
parseName.apply({name: 'Person'},['Apply'])

const _boundParseName = parseName.bind({name: 'Bob'},['Bind'])
setTimeout(()=>{
    console.log('Person has been saved')
    // calling the bound function at a chosen time after an interval
    _boundParseName()
},2000)

/*let _fields={
    _first : 10,
    _next: 4
}
const _operations = [
    [
        'ADD' , '+'
    ],
    [
        'DIFF', '-'
    ]
]
const getOperator = (_action)=>{
    return _operations.find(op=>{ 
        return op[0] == _action
    })[1]
}

function _calcP(_action){
    return _action !=undefined ? parseInt(this._first) + getOperator(_action) + parseInt(this._next):'No Operator Specified'
}

console.log(_calcP.call(_fields,'DIFF'))

*/

const pUser = {
    firstName : 'John',
    lastName : 'The Baptist',
    age : 18
}
/*Object.defineProperty(pUser,'id',{
    value : 1,
    writable: false
})*/
pUser.id = 11

const prxHandler = {
    get: (target,_field)=>{
        if(_field == 'firstName'){
            return target[_field] = 'Field cannot be fetched'
        }
            return target[_field]
    }, // end :get 
    set: (target,key,value)=>{
        /*if(key == 'email'){
            target[key] = value
        }*/
        if(key == 'firstName'){
            if(value.length >= 5 && value.length <= 10 ){
                target[key] = value
            }else{
                throw new Error(`FirstName should be in between 5-10 characters only`)
            }
        }
        if(key == 'lastName'){
            target[key] = value
        }
        if(key == 'age'){
            if(value >= 18)
                target[key] = value
            else
                throw new Error(`User seems to be juvenile, please ensure to be an adult i.e. 18+ `)
        }
    }, // end : set
    defineProperty: (target,_field,descriptor)=>{
        let propArr = Array.from(_field)
        
        if(propArr[0] == '_'){
            throw new Error(`Field cannot begin with _`)
            
        }else{   
            //return false 
            return target[_field] = descriptor.value
        }
    }, // end: define property 
    deleteProperty :(target,_field)=>{
        if(_field == 'firstName'){
            throw new Error('First name cannot be deleted')
        }else{
            // allow field deletion
            delete target[_field]
        }
    }
    // end : delete property 
}


const prxUser = new Proxy(pUser,prxHandler)

console.log(prxUser.firstName)

prxUser.firstName = 'Adams'
prxUser.lastName = 'Charles'
prxUser.age = 19

pUser.id = 5767

//prxUser.email = 'abc@gmail.com'

Object.defineProperty(prxUser,'emailAddress',{
    value: 'ad@gmail.com',
    writable: true
})

//delete prxUser.firstName

console.log(prxUser)

// 
console.log('FirstName :' +Reflect.get(prxUser,'firstName'))

Reflect.set(prxUser,'age',25)
Reflect.deleteProperty(prxUser,'age')

// refresh the proxy object
console.log(prxUser)



