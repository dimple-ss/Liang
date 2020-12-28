// 创建对象
// 通过object创建函数
let myObject = new Object();
myObject.name = 'liangshiying';
myObject.age = 20;

console.log(myObject);
// 通过对象字面量创建对象
const oStudent = {};
oStudent.name = 'liang';
oStudent.age = 20;
const oStudent1 = {
    name: 'liang',
    age: 20
};
console.log(oStudent1.name);

console.log(typeof oStudent1);  //object
typeof null;

// arrsy
const a1 = new Array();

const a2 =[];
console.log(typeof a2);   //object
console.log(a2[0]);

a2[0] = 'a';
a2[1] = 2;
a2[5] = true;
console.log(a2);

console.log(typeof a2);
console.log(a2 instanceof Array);



const a3 = [1,2,3,'abc',true,undefined,null,a2,oStudent];


const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
delete avengers[2];
console.log(avengers);

const number1 = [1,2,3,4]
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log('a=${a},b=${b},c=${c}');

const [a,b,c,d] = [1,2,3,4];
console.log('a=${a},b=${b},c=${c}');

const [a,b] = ['liangshiying',true,1,2,2,1];
console.log('a=${a}, b=${b}')



const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);
avengers.length = 0;
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
avengers.pop();
console.log(avengers)
avengers.push('liangshiying');
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
console.log(avengers.shift());
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
avengers.unshift('liangshiying');
console.log(avengers);


const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];
const ah = avengers.concat(heroes);
console.log(avengers,heroes,ah);

const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];
const ah =[...avengers, ...heroes];
console.log(ah);

const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
const av1 = avengers.join();
const av2 = avengers.join('&');
console.log(av1);
console.log(av2);


const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
 const av3 = avengers.slice(1,3)
 console.log(avengers)
 console.log(av3)

 const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
 const av4 = avengers.splice(1,2,'liang','shishi');
 console.log(av4);
 console.log(avengers)

const number1 = [1,2,23,10,3,45,2];
const a = number1.sort();
console.log(number1);
console.log(a);


const str = ['a','b','c','1']
str.reverse();
console.log(str);

const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
const a = avengers.indexOf('美国队长');
console.log(a);


const avengers = ['美国队长','钢铁侠','雷声','绿巨人'];
const b = avengers.includes('美国队长');
console.log(b)


// 多维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0])
console.log(ma[0][1])

const summer = ['jun','jul','aug'];
const winter = ['dec','jan','feb'];
const nested = [sumer,winter];
console.log(nested);

const flat = [...summer, ...winter];
console.log(flat);

// set
const oSet = new Set();
oSet.add(1)
oSet.add(2)
oSet.add(3).add(4).add(5)
oSet.add(5)
console.log(oSet);

const list1 = new Set([1,2,3,4,5,6])
console.log(list1);

const list2 = new Set('hello')
console.log(list2);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size)


list4.size = 2
console.log(list4)


const list4 = new Set().add('the').add('quick').add('brown').add('fox');
a = list5.has('brown')
console.log(a)

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const b = list5.delete('fox');
console.log(b)
console.log(list5)

list5.clear();

const list6 = new Set().add('the').add('quick').add('brown').add('fox');
const a = Array.from(list6);
console.log(a);

const list6 = new Set().add('the').add('quick').add('brown').add('fox');
const a = [...list6];
console.log(a);

const oArray1 = [1,2,3,41,51,2,15]
const oSet1 = new Set(oArray1);
console.log(oSet1);
const oArray2 = [...oSet1];
console.log(oArray2);

// weakset

let student = {
    name: 'liang',
    age: 20
};
const strong = new Set();
strong.add(student);
student = null;
console.log([...strong][0]);



const weak = new WeakSet();
// weak.Set(1);
Weak.add(student);
console.log([...weak][0]);


// map
const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
console.log(oMap);
console.log(oMap.size);
const a = oMap.get(5)
console.log(a)


oMap.set('name', 'liangshiying');
const b = oMap.get('name')
console.log(oMap)
console.log(b)
console.log(oMap.has('name'));
const c = oMap.delete('name');
oMap.clear();
console.clear(oMap);


const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,'II').set(3,'III').set(4,'IV');
const oArray = [...oMap];
console.clear(oArray);

