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
const validate =()=>{
    //console.log('Validate Called');
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const errorMessage = document.getElementById('error-message');
    if(user.value == ''){
        errorMessage.innerHTML = 'Username cannot be left blank';
        user.focus();
    }else if(pass.value == ''){
        errorMessage.innerHTML = 'Password cannot be left blank';
        pass.focus();
    }else{
        //errorMessage.innerHTML = '';
    }
    if(!isNaN(user.value)){
        errorMessage.innerHTML = 'Invalid Username, please choose a valid one';
        user.value = ''; // clear the textbox
        user.focus();    
    }else{
        //errorMessage.innerHTML = '';
    }
}
// square(10);
// save();
//