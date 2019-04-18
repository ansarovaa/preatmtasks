function addWithDelay() { //create function 
    const reducer = (accumulator, currentValue) => accumulator + currentValue; //prepare sum of accumulator and currentValue for sum evaluating
    var arr1 = Array.from(arguments); //create array from function's arguments

    function isPositive(arguments) { //function to check if arguments are supported by condition
        return arguments >= 0;
    }
    var promise = new Promise( //create new promise 
        function (resolve, reject) {
            if (arr1.every(isPositive) == true) { //check if each element of arr1 is true according to isPositive function
                setTimeout(() => {
                    // set timeframe for resolve state
                    resolve(arr1.reduce(reducer)); //if statement is true set reducer as resolve
                }, 1000); //set timeout as 1000
            } else { //check if isPositive function is false
                var error = new Error('Error! Some parameter is a negative number!"');
                reject(error); // if statement is false, show reject
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

addWithDelay(22, 33, 2, 4, 0); //add your numbers