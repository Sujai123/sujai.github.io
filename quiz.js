let a=[0,0,0,0,0,0,0,0,0,0];
let p=[0,0,0,0,0,0,0,0,0,0];
// sessionStorage.clickcount=-1;
let q1=document.getElementsByName("exampleRadios1");
var progress=document.getElementById("progress");
// console.log(q1);
for(let i=0;i<q1.length;i++){
    q1[i].addEventListener("click",()=>{
        a[0]=(Number)(q1[i].value);
        p[0]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a1);
    })
}
// console.log(a1);
let q2=document.getElementsByName("exampleRadios2");
// console.log(q2);
for(let i=0;i<q1.length;i++){
    q2[i].addEventListener("click",()=>{
        a[1]=(Number)(q2[i].value);
        p[1]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a2);
    })
}
// console.log(a2);
let q3=document.getElementsByName("exampleRadios3");
// console.log(q3);
for(let i=0;i<q3.length;i++){
    q3[i].addEventListener("click",()=>{
        a[2]=(Number)(q3[i].value);
        p[2]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a3);
    })
}
// console.log(a3);
let q4=document.getElementsByName("exampleRadios4");
// console.log(q4);
for(let i=0;i<q4.length;i++){
    q4[i].addEventListener("click",()=>{
        a[3]=(Number)(q4[i].value);
        p[3]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a4);
    })
}
// console.log(a4);
let q5=document.getElementsByName("exampleRadios5");
// console.log(q5);
for(let i=0;i<q5.length;i++){
    q5[i].addEventListener("click",()=>{
        a[4]=(Number)(q5[i].value);
        p[4]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a5);
    })
}
// console.log(a5);
let q6=document.getElementsByName("exampleRadios6");
// console.log(q6);
for(let i=0;i<q6.length;i++){
    q6[i].addEventListener("click",()=>{
        a[5]=(Number)(q6[i].value);
        p[5]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a6);
    })
}
// console.log(a6);
let q7=document.getElementsByName("exampleRadios7");
// console.log(q7);
for(let i=0;i<q7.length;i++){
    q7[i].addEventListener("click",()=>{
        a[6]=(Number)(q7[i].value);
        p[6]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a7);
    })
}
// console.log(a7);
let q8=document.getElementsByName("exampleRadios8");
// console.log(q8);
for(let i=0;i<q8.length;i++){
    q8[i].addEventListener("click",()=>{
        a[7]=(Number)(q8[i].value);
        p[7]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a8);
    })
}
// console.log(a8);
let q9=document.getElementsByName("exampleRadios9");
// console.log(q9);
for(let i=0;i<q9.length;i++){
    q9[i].addEventListener("click",()=>{
        a[8]=(Number)(q9[i].value);
        p[8]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a9);
    })
}
// console.log(a9);
let q10=document.getElementsByName("exampleRadios10");
// console.log(q10);
for(let i=0;i<q10.length;i++){
    q10[i].addEventListener("click",()=>{
        a[9]=(Number)(q10[i].value);
        p[9]=1;
        var percent=calculate();
        // console.log(percent);
        progress.style.width=percent+"%";
        // console.log(a10);
    })
}
// console.log(a10);
let res=0;
let sum=()=>{
for(let i=0;i<a.length;i++){
    res+=(Number)(a[i]);
}
let start=document.getElementById("start");
start.style.display="none";
let result=document.getElementById("result");
result.innerHTML="<strong>Test Attempted </strong><br>Result : "+res;
result.style.display="block";
sessionStorage.clickcount = res;
clearInterval(temp);
// console.log(res);
}

let test=document.getElementsByClassName("testno").length;
let displaytest=document.getElementById("displayTest");
displaytest.innerHTML=test;

let calculate=()=>{
    var count=0;
    for(let i=0;i<p.length;i++){
        if(p[i]==1)
        count++;
    }
    return count*10;
}

if(sessionStorage.clickcount >= '0'){
    let start=document.getElementById("start");
    start.style.display="none";
    let result=document.getElementById("result");
    result.innerHTML="<strong>Test Attempted </strong><br>Result : "+sessionStorage.clickcount;
    result.style.display="block";
}
let temp;
let counter=300;
let flg=0;
let time=()=>{
    if(flg==0){
    temp=setInterval(() => {
        // console.log(counter--);
        format(counter);
        if(counter<0){
        clearInterval(temp);
        sum();
        location.reload();
        }
    }, 1000);
    flg=1;
}
}
let mm=5,ss=0;
let format=(counter)=>{
    // while(ss<0){
        ss--;
    if(ss<0){
        mm--;
        ss=59;
        // counter-=60;
    }
    // }
    let text="";
    if(mm<9)
    text+=0;
    text+=mm;
    text+=":";
    if(ss<9)
    text+=0;
    text+=ss+" left";
    let time=document.getElementById("time");
    time.innerHTML=text;
}
