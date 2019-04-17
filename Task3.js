var happiness = { 
    "love": 1,
    "travel": 2, 
    "work": 3, 
    "sport": 4,
    "health": 5  
};                                                //object happiness with 5 properties (priorities) is defined
function taskThree(happiness) {                   //function is defined
    var arr1 = [];                                //array is created
    var prop1;                                    //variable prop1 is defined
    for (prop1 in happiness) {                    //check each property from happiness object
        if (happiness.hasOwnProperty(prop1)) {    //check if object happiness contains property
            arr1.push({
                'property': prop1,                //if contains add properties and values to array arr1
                'priority': happiness[prop1]
            });
        }
    }
    arr1.sort(function(a, b) {                   //function to sort by values
        return b.priority - a.priority;
    });
    return arr1;                                 // returns array
}
                
console.log(taskThree(happiness));               //show result of function
