const displayMessage=()=>{
    //console.log('Hello world');
    document.write('Hello world');
    // instantiate the class
    const sampleObj = new Sample();
    // call the method
    sampleObj.showMessage();
}
class Sample{
    showMessage(){
        console.log('Sample showMessage() called');
    }
}