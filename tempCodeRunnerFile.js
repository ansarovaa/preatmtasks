var happiness = {
    love: 1,
    life: 2,
    art: 3,
    travel: 4,
    work: 5
};
function sortProperties() {
    var arr1 = [];
    for (var value in happiness) {
        arr1.push([value, happiness[value]]);

}
};
console.log(arr1);
