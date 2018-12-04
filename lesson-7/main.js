

var man = {
  name: 'Bob',
  age: 40,
  email: 'tiger@ukr.net',
  password: 12345
};


var cutted = function(obj, names) {
  var resObj = {...obj};
  names.forEach(function(name) {
  delete resObj[name];
  })
return resObj;
}
var man2 = cutted(man, ['email', 'password']);

console.log(man);
console.log(man2);

