'use strict';

const evenNumbers = [2,4,6,8,10,12];
const employeeObj = {
    id: 1,
    firstName : 'Mike',
    lastName: 'Ross',
    salary: 1000000,
    address:{
        city: 'London',
        country: 'United Kingdom',
        zip: 65221
    }
};
const employees = [
    {
        id: 1,
        name: 'Mike',
        salary: 10000,
        address:{
            city: 'London',
            country: 'UK'
        }
    },
    {
        id: 2,
        name: 'John',
        salary: 55000,
        address:{
            city: 'Manchester',
            country: 'UK'
        }
    },
    {
        id: 3,
        name: 'Harvey',
        salary: 250000,
        address:{
            city: 'New york',
            country: 'US'
        }
    },
    {
        id: 4,
        name: 'Roger',
        salary: 55000,
        address:{
            city: 'New york',
            country: 'US'
        }
    }
];


const traverseEvenNumbers= ()=>{
    // first element of the array
    console.log(`First element : ${evenNumbers[0]}`);
    // for in loop
    for(let even in evenNumbers){
        console.log(`Even : ${even}`);
    }
}
// get employee 
const fetchEmployee=()=>{
    console.log(employeeObj);
}
// get employee salary
const fetchEmployeeSalary = () =>{
    console.log(`Salary is : ${employeeObj.salary}`);
}

// get all employees
const fetchAllEmployees =() =>{
    /* for(let emp in employees){
        console.log(emp);
    }*/
    // using for each method
    employees.forEach(employObj=>{
        console.log(employObj);
    });
}

const fetchEmployeesByCity = ()=>{

    //let _city = 'Manchester';
    let _city = document.getElementById('city').value;
    console.log(`CIty : ${_city}`);
    // find all those matching the same city
    const filteredEmployees = employees.filter(emp =>{
        return emp.address.city == _city
    });
    /*let filterEmps=[];
    for(emp in employees){
        if(emp.address.city == _city){
            filterEmps.push(emp);
        }
    }*/

    if(filteredEmployees!= null){
        // traverse on the filtered employee details
        filteredEmployees.forEach(emp=>{
            console.log(emp);
        });
    }else{
        console.log('No Employees found');
    }    
}

const fetchEmployeeById = ()=>{
    const _id = parseInt(document.getElementById('id').value);
    console.log(_id);
    const employee = employees.find(e=>{
        return e.id == _id
    });
    if(employee!=undefined){
         console.log(employee);
    }else{
        console.log(`Unable to locate the employee`);
    }
}

const sortArray = ()=>{
    const arr = [12,25,3,5];
    // custom comparator
    const sorted = arr.sort((i,j)=>{
        return j - i;
    });
    sorted.forEach(elemnt=>{
        console.log(elemnt);
    });
}
