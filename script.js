const arr = [1,2,3,4,4,5,5,6,6,7,7,8,8,9,10]
let OnlyUnique = []

function getUniqueSet(arr) {
    return [...new Set(arr)];
}

function getUniqueFilter(arr) {
    return arr.filter((el, i) => arr.indexOf(el) == i);
}

function getUniqueWithArr(arr) {
arr.forEach(el => {
        if(OnlyUnique.indexOf(el) == -1) OnlyUnique.push(el);
    });
    return OnlyUnique;
}



console.log(getUniqueFilter(arr))
console.log(getUniqueWithArr(arr))
console.log(getUniqueSet(arr))

