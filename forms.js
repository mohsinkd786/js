// function
// param less
function save(){
    alert('Saved Succesfully');
    console.log('Save function called');
}
// ecma 
// arrow functions
const submit = ()=>{
    //console.log('Submit function');
    alert('Submit');
}
// parameterized function
// square function
const square = (a)=>{
    const square = a * a;
    console.log(square);
}
const saveUserDetails =()=>{
   // const userObj = document.getElementById('user');
    const userName = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    console.log(`User : ${userName} , Password : ${password} `);
    
}
// square(10);
// save();
//