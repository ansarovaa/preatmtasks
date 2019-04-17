var array = [];

function taskOne() {
  for (i = 0; i < 10; i++) {
    var a = Math.round(Math.random() * 100);
    array.push(a);
  }; //fullfill array with 10 random numbers 
  array.sort(function (a, b) {
    return b - a
  }) //sort array descending
  var i = 3;
  var result = 1;
  while (i > 0)
    result *= array[--i]; //multiple first 3 elements from array
  console.log(array); //show initial array 
  console.log(result); //show multiply of 3 greatest value
};
taskOne(); //call function