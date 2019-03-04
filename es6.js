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
/*[
    [
        {
            id: 0,
            name: '',
            salary: 1
        },
        {
            id: 0,
            name: '',
            salary: 2
        },
        {
            id: 0,
            name: '',
            salary: 1
        },
        {
            id: 0,
            name: ''
        }
    ],
    [
        {
            id: 0,
            name: '',
            salary: 1.5,
            address:{
                city: '',
                street: ''
            }
        },
        {
            id: 0,
            name: '',
            salary: 1.5,
            address:{
                city: '',
                street: ''
            }
        }
    ]
]*/

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
