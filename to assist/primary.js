// ------------> отфильтровать массив на уникальные значения

// ------------> найти максимальное число в массиве
let arr = [1,2,3,4,5,6,7]
let max = arr[0]

for (let x = 1 ; x < arr.length; x++) {
    if(max < arr[x]) max = arr[x]
}
// ------------> 
let newObj = { name: "Susana", age: 24 }
function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          result += objName + "." + i + " = " + obj[i] + "\n";
      }
    }
    return result;
  }
  showProps(newObj, 'keys')
// ------------> 
// ------------> 
// ------------> 
// ------------> 