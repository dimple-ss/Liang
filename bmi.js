//Mark的身高与体重
let MarkMass=47;
let MarkHeight=1.8;
let BMI1=MarkMass/(MarkHeight*MarkHeight);
console.log("Mark的BMI是："+BMI1);
//John的身高与体重
let JohnMass=48;
let JohnHeight=1.7;
let BMI2=JohnMass/(JohnHeight*JohnHeight);
console.log("John的BMI是："+BMI2);
//比较大小
let BMI=( BMI1 > BMI2 ? "Mark的BMI比John的大" : "John的BMI比Mark的大");
console.log(BMI);
