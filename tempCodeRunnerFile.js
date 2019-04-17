var happiness = {
    "love": 1,
    "life": 2,
    "travel": 3,
    "cats": 4,
    "money": 5
};

function taskThree() {
sortProperties = Object.keys(happiness).sort(function (a, b) {
    return happiness[b] - happiness[a]
})
console.log(sortProperties); 
};

taskThree();