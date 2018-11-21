  var arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);

// min and max

var max = arr[0];
var min = max;
  
for (var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i]; 
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(max);
console.log(min);

// Сумма и среднеее

 var sum = 0;
 for (var i = 0; i < arr.length; i++){
   sum += arr[i];

}

console.log(sum);


var result = sum / arr.length;
var sum = 0;
for (var i = 0; i < arr.length; i++){
   sum += arr[i];

}

console.log(result);