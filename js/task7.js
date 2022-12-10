const n = 100;

console.log(GetSumTo(n))

function GetSumTo(x) {
    var sum = 0;
    for (var i = 1; i <= x; i++) {
        sum = sum + i;
    }
    return sum;
}

