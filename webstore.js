// save data in html 5 stores
const saveData = ()=>{
    console.log(`Save data`);
    // permanent store
    // localStorage
    // session store 
    // sessionStorage
    localStorage.setItem('msg','Hello world');
}
// save data in session  store
const saveSessionData = () =>{
    sessionStorage.setItem('sessionMsg','Session Hello World');
}

// get data from session data
const getSessionData = () =>{
    const sessionBox = document.getElementById('session-store-data');
    // set the session store data in textbox
    sessionBox.value = sessionStorage.getItem('sessionMsg');
}

const getWebStoreData = ()=>{
    // get data from local storage
    const msg = localStorage.getItem('msg');
    // get the text box
    const data = document.getElementById('local-store-data');
    // set the web store data into the textbox
    data.value = msg;
}

// delete the msg from web store
const deleteWebStoreData = ()=>{
    const data = document.getElementById('local-store-data');
    data.value ='';
    // delete the msg from local storage
    localStorage.removeItem('msg'); 
}
// just resetting the fields
const resetField= ()=>{
    const data = document.getElementById('local-store-data');
    data.value ='';
}