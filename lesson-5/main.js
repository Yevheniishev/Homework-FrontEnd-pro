// --------------- DZ-5 -------------

//  Функции
//  № 1
var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
    ];


function pluck(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}


console.log(pluck(characters, 'name'));
console.log(pluck(characters, 'age'));

//  № 2
 var array = [3, 6, 8, 90, 56];
 var foo = function (x) {
     return x * 2;
 }
 var map = function (fn, arr) {
    var output = [];
     for (var i=0; i < arr.length ; ++i)
         output.push(fn(arr[i]));
     return output;
 }
 console.log(map(foo, array));
 




