const reload = () =>{
    // ajax object
    const ajax = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    ajax.onreadystatechange = function() {
        console.log('calling');
        if (this.readyState == 4 && this.status == 200) {
          console.log(this);
            document.getElementById("content").innerHTML =
          this.responseText;
        }
      };
    // specify the type of method & server location
    // ajax.open('GET','url','timeout');
    ajax.open('GET',url,true);
    ajax.setRequestHeader('content-type','application/json');
    // execute the request
    ajax.send();
}