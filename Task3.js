var happiness = {
    "love": 1,
    "life": 2,
    "travel": 3,
    "cats": 4,
    "money": 5
};//define object happiness with 5 properties and their priorities

function taskThree() {
sortProperties = Object.keys(happiness).sort(function (a, b) {
    return happiness[b] - happiness[a]
})//sort properties by their priorities from bigger to smaller
console.log(sortProperties); //show new array of sorted properties
};

taskThree();//run function