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

const clsrEmp = (_emps,_action)=>{
    switch(_action){
        case 'FETCH_ALL':
            return ()=>{
                return _emps
            }
        case 'FETCH_BY_DESIGNATION':
            return (_designation)=>{
                return emps.filter(e=>{
                    return e.designation == _designation
                })
            }
    }
}

const _clsrEmpCaller = clsrEmp(clsrEmps,'FETCH_ALL')
const _clsrInnerEmpCaller = _clsrEmpCaller()
console.log(_clsrInnerEmpCaller)

const _clsrEmpCallerByDesig = clsrEmp(clsrEmps,'FETCH_BY_DESIGNATION')
const _clsrInnerEmpCallerByDesig = _clsrEmpCallerByDesig('Programmer')
console.log(_clsrInnerEmpCallerByDesig)

