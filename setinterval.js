console.log('first');
let secods = 0;
const timeId=setInterval(()=>{
    secods++;
    console.log(secods)
 if(secods>10){
    clearInterval(timeId);
 }
},2000);
// setTimeout(()=>{
//     console.log('tumi more jiboner babona ')
// },5000);
console.log('las item last iteam');