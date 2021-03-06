// 字面量
let a = '', b = "", c = ''; //




// 函数声明
function sayHello() {
    console.log('Hello, JavaScript');
    console.log('Hello, JavaScript');
} //定义了一个函数字面量
//函数表达式
const sayHello = function () {
    console.log('hello, JavaScript!');
};//匿名函数表达式
console.log(sayHello);
sayHello();
const sayHello = function sayHi() {
    console.log('hello,js')
} //命名的函数表达式


//function 构造函数 不建议使用
const sayHello = new Function("console.log('hello,js')");

//箭头函数 Es6新增
const sayHello = () => { console.log('hello,js') };

sayHello();

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return;
};
console.log(sayHello()); //undefined;

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return c;
};
console.log(sayHello()); //3;

//函数参数

const add = function (a, b) {
    return a + b;
}

let a = add(2, 3);
console.log(a); //5

const add1 = function (a, b) {
    return a + b;
};

let b = add1();
console.log(b); //NaN = not a number, undefined + undefined

let b = 1;
b = Infinity;
b = - Infinity;

let b = 1;
b = b + null;

let b1 = add1(1); //只传一个参数
console.log(b1); //NaN

let b3 = add1(1, 2, 3, 4);
console.log(b3); // 3 

const add2 = function (a, b) {
    let a1 = arguments.length;
    console.log(a1)
    console.log(arguments[5]);
    return a + b;
};

let b4 = add2(1, 2, 2, 2, 3, 4);
console.log(b4);

const add3 = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum;
};
let b5 = add3(1, 2, 4, 5, 6, 7, 8);
console.log(b5);

const add = function (...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
let a1 = add(1, 2, 2);
console.log(a1);

//默认参数
const sayHi = function (studentName = 'js') {
    console.log('hello,${studentName}');
}
sayHi();
sayHi('java')

//箭头函数
const add1 = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
console.log(add1(1, 1, 2));

const add2 = function (a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;

const add3 = () => { return 3; }

const add4 = a => a + 1; //参数只有一个
const add4 = function (a) {
    return a + 1;
}

//callback
function dance() {
    console.log('我在跳舞');

}
function sing(song, callback) {
    console.log('我在唱${song}');
    if ((typeof callback) == 'function') {
        callback();
    }
}
sing('国歌', dance);

//改写成函数表达式
const sing = function () {
    console.log('我在唱${song}');
    if (typeof callback === 'function') {
        callback();
    }
}
sing('国歌', dance);

//改写成箭头函数
const dance = () => { console.log('我在跳舞') }
const sing = (song, callback) => {
    console.log('我在唱${song}')
    if (typeof callback == 'function') {
        callback()
    }
}
sing('国歌', dance)

//用箭头函数作为回调函数
const sing = (song, callback) => {
    console.log('我在唱${song}')
    if (typeof callback == 'function') {
        callback()
    }
}
sing('国歌', () => (console.log('我在跳舞')));

//回调函数的应用
//1.数组排序 Array，sort（）

const oArray = [1, 10, 2, 11, 9, 8];
console.log(oArray.sort());

const num = (a, b) => a - b;
console.log(oArray.sort(num));

//forEach

const colors = ['red', 'green', 'glue'];
colors.forEach(
    (color, index) => console.log('位置${index}处的颜色为${color}')
);

const oArray1 = [1, 2, 3, 4]
oArray1.forEach((color) => console.log('${color}'))


//map
const oArray2 = [1, 2, 3, 4];
const oArray3 = oArray2.map((x) => x + 2);
console.log(oArray3);


//改写：
//先定义一个数组，然后得到一个新数组，
//新数组中每个元素都是旧数组中每个元素的平方，不用map的版本
const a1 = [1, 2, 3]
let a2 = []
for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i] * a1[i]
}
console.log(a2)

//map 版本
leta1 = [1, 2, 3]
let a2 = a1.map((x) => x * x);
console.log(a2);

//reduce
const a1 = [1, 2, 3]
const a2 = a1.reduce(
    (sum, curVa1) => sum + curVa1
)
console.log(a2)
console.log(typeof a2)


const a2 = [1, 2, 3].reduce((sum, curVa1) => sum + curVa1, 0);
console.log(a2); //16

const sentence = 'the quick brown fox jumped over the lazy doy';
const words = sentence.split(" ")
console.log(words)

const lenOFWords = words.reduce(
    (sum, val) => sum + val.length, 0
)
console.log(lenOFWords)

//filter
const a1 = [1, 2, 3, 4, 5, 6, 7]
const a2 = a1.filter((a) => a % 2 == 0);
console.log(a2)

const a = [1,2,3].map





































