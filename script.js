function fetchText() {
    //B) creating fetch request
    //alert("testing");
    fetch('text.json')
        //C) resolving response code
        .then((res) => {
            //D) checking status code
            console.log(res.status, res.statusText);
            console.log("Verifying response line 8");
            return res.json();
        })
        //E) processing returned json data
        .then((data) => {
            console.log(data);
            console.log("Verifying response line 13");
        })
        //handling error
        .catch((err) => {
            console.log(err);
            console.log("Verifying response line 20");
        });
    //alert("testing");
}