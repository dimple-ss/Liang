function mean(a,b,c){
    return (a+b+c)/3
}
let a=mean(1,2,3)
console.log(a)
//(1)
function mean1(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    return sum/arguments.length
}
let a=mean1(1,2,3,4)
console.log(a);

//(2)
function mean2(num){
    const sum=num.reduce((sum,curVal)=>sum+curVal)/num.length;
    return sum;
}
let a=mean2[1,2,3,4]
console.log(a)

//(3)
const arr=[2,5,47,56,20];
const arr1=arr.map(
    (x)=>{
        if(x%2==0){
            return x;
        }
    }
);
const arr2=[];
arr1.forEach(
    item=>{
        if(item){
            arr2.push(item)
        }
    }
)
function mean3(num){
    const sum=num.reduce((sum,curVal)=>sum+curVal)/num.length;
    return sum;
}
let a =mean3(arr2);
console.log(a)