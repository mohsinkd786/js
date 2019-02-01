class User{
    // no argument constructor
    /*constructor(){
        console.log('Param less constructor');
    }*/

    // paramerized constructor
    constructor(title,body){
        this.title = title;
        this.body = body;
    }
    // get the generated message
    getMessage(){
        return {
            title : this.title,
            body: this.body
        }
    }
    getUser(){
        console.log('getUser() : User class');
    }
    static getTitleAndMessage(){
        return this.title + " "+ this.body;
    }
}

// inheritance
class Employee extends User {
    // private members
    //#userID;
    constructor(title,body){
        // call parent class constructor i.e. User class constructor
        super(title,body);
    }
    getEmployee(){
        //this.getUser();
        console.log('Employee');
    }
    getUser(){
        console.log('getUser() : Employee class');
        // refer to parent instance / class
        super.getUser();
    }
}

const inherit = ()=>{
    const emp = new Employee('Employee','Friday is a tough day');
    // parent class member access via child i.e Employee extend User
    console.log(emp.getMessage());
    
    // child class : i.e. Employee
    emp.getEmployee();
    emp.getUser();
}
//
const verify = ()=>{
    //const userObj = new User();
    const userObj1 = new User('User','User seems to be confused');
    console.log(JSON.stringify(userObj1.getMessage()));
    // static method call
    console.log(User.getTitleAndMessage());

    // JSON Conversions
    const customMessage = `{"title":"Custom","body":"This is a custom built JSON"}`;
    console.log(customMessage);
    // convert into JSON
    const customMessageObj = JSON.parse(customMessage);
    console.log(customMessageObj);
}