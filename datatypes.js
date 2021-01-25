var ob1 = "this is a sample";
console.log(typeof ob1);

var ob2 = "44";
console.log(typeof ob2);

var ob3 = 445;
console.log(typeof ob3);

var ob4;
console.log(typeof ob4);

var ob5 = null;
console.log(typeof ob5);

var ob6 = {
    "name": "Aviyansh Mann",
    "age": 13
};
console.log(typeof ob6);
console.log(ob6);

var arr = [10,20,30,40];
console.log(arr)
console.log(arr.length);

console.log(arr[2]);
arr.push(66);
console.log(arr)
arr.pop();
console.log(arr);

var arr2 = [[10,20],[30,40,50],["Apple","Mango", 45.5],88];
console.log(arr2);

console.log(arr2[2][1]);
console.log(arr2[0][1]);
arr2.push([6,7,8]);
console.log(arr2);