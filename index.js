//定义一个空数组
let nums = [];
//给数组的前五项赋值
nums=[1,2,3,4,5];
//给数组的第七项赋值一个字符串
nums[6] = "string";

//为数组的第6项赋值
nums[5] = ['a','b','c'];


//逗号表达式
let x = 1, y = 2;


//输出数组的六项
console.log(nums[5]);





//let i = 0;

console.log("-----------------------");
//写一个循环，输出数组的每项
for(let i = 0; i < nums.length; i++){
  console.log(nums[i]);
  if(typeof nums[i] === 'object'){
    console.log('nums[' + i + ']是数组');
    //console.log(i);
    //console.log(nums[i].length);
    for(let j = 0;j < nums[i].length; j++){
      console.log(nums[i][j]);
    }
  }
}

//console.log("-----------------------");

// while(i < nums.length){
//   console.log("nums[" + i + "] = " + nums[i]);
//   i++;
// }

console.log('-----函数-------')


function hello(){
  console.log("hi");
}
hello();

function hellov2() {
  return "hello";
};
console.log(hellov2());



//写一个函数，有两个参数，返回两个参数相加的值
function clever (x,y){
  return x + y;
};

console.log(clever(9,10));



//写一个函数，返回两个参数中较大的一个
function max(x,y){
  if(x > y){
    return x;
  } else {
    return y;
  }
};

console.log(max(9,10));


console.log("---------------------------")

let a = 1;
let b = 7;

let c = 5;
let d = 9;


function add (x, y){
  return x + y;
};


let max1 = max(a, b);
let max2 = max(c, d);

console.log(add(max1, max2));






console.log('--------------------');
let array = [1,2,3,4,5];

function arrSum(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    //all = array[i]+array[i+1];
    sum = sum + array[i];
  }
  return sum;
};
console.log(arrSum(array));


function average (array){
  return arrSum(array)/array.length;
};

console.log(average(array));

