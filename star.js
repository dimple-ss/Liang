// 上部分*
for (let i = 0; i <4; i++) {   
    let a=''       
    for (let j = 0; j<i; j++) {//打印*
        a=a+"*" 
    }
    console.log(a)
    a=a+'\n'
}
// 下半部分*
for(let i=0;i<4;i++){
    let a=''
    for(let j=4;j>i;j--){
        a=a+'*'
    }
    console.log(a)
    a=a+'\n'
}