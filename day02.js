const isHuman = true;
console.log(typeof typeof a);

let a = 0.1
let b = 0.2
let c = a + b

console.log(c.toPrecision(3))
let d;
console.log(typeof d)
let e = null
console.log(e === undefined)

let a1 = "liangshiying"
let a2 = `jckvnjv`
let a3 = `cdkjv`
const strName4 =
`
<h1>
 <p>$(a1)</p>
 <p>$(a2)</p>
 <p>$(a3)</p>
 </h1>
`
console.log(strName4)


const oStudent = {
    name: `liangshiying`,
    age: 20
}
console.log(`name1` in oStudent)
const strl = [2,3,3,4,5,6]
console.log(3 in strl);

const oArray = new Array()
console.log(oArray instanceof Function)
