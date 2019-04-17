function addWithDelay(a, b) { //create function 
    var result = a + b //sum of parameters
    var promise = new Promise( //create new promise 
        function (resolve, reject) {
            if ((a >= 0) && (b >= 0)) { //check if both parameters are positive
                setTimeout(() => {
                    // set timeframe for resolve state
                    resolve(result); //if statement is true set result as resolve
                }, 1000); //set timeout as 1000
            } else if ((a < 0) || (b < 0)) { //check if at least 1 parameter is negative
                var error = new Error('Error! Some parameter is a negative number!"');
                reject(error); // if statement is true set result as resolve
            }

        }
    );
    promise.then(function (fullfilled) {
        console.log(fullfilled); //show value of resolve
    })
    promise.catch(function (error) {
        console.log(error.message); //show value of reject 
    })

};
addWithDelay(5, 7);