let toggle1=()=>{
    let form1=document.getElementById("login");
    let form2=document.getElementById("register");
    form1.style.transition="0.5s";
    form2.style.transition="0.5s";
    form1.style.transform="scale(0)";
    // form1.style.display="none";
    form2.style.transform="scale(1)";
}
let toggle2=()=>{
    let form1=document.getElementById("login");
    let form2=document.getElementById("register");
    form1.style.transform="scale(1)";
    form2.style.transform="scale(0)";
}

var user=[
    {username:"hello@xyz.com",
    password:"12345"}
    ];
let display=()=>{
    var user1=document.getElementById("exampleInputEmail1").value;
    var pass1=document.getElementById("exampleInputPassword1").value;
    var alrt=document.getElementById("alertbox");
    var alrt1=document.getElementById("alertbox4");
    // console.log(user1+" "+pass1+" "+user.length);
    var flg=0;
    if(user1.length==0||pass1.length==0){
    alrt.style.display="block";
    alrt1.style.display="none";
    return false;
    }
    if(pass1.length<5){
        alrt.style.display="none";
        alrt1.style.display="block";
        return false;
    }
    for(let i=0;i<user.length;i++){
        var user2=user[i].username;
        var pass2=user[i].password;
        // console.log(user2+" "+pass2);
        if(user1==user2&&pass1==pass2){
            flg=1;
            break;
        }
    }
        // console.log(flg);
        if(flg==1){
            localStorage.setItem("key", user1);
            return true;
        }
        else{
            alrt.style.display="block";
        return false;
        }
    }
let add=()=>{
    var user1=document.getElementById("exampleInputEmail2").value;
    var pass1=document.getElementById("exampleInputPassword3").value;
    var pass2=document.getElementById("exampleInputPassword3").value;
    var alrt1=document.getElementById("alertbox1");
    var alrt2=document.getElementById("alertbox2");
    var alrt3=document.getElementById("alertbox3");
    if(user1.length==0||pass1.length==0||pass2.length==0){
    alrt2.style.display="none";
    alrt1.style.display="block";
    alrt3.style.display="none";
    return false;
    }
    if(pass1!=pass2){
    alrt2.style.display="none";
    alrt1.style.display="block";
    alrt3.style.display="none";
    return false;
    }
    if(pass1.length<5||pass2.length<5){
    alrt2.style.display="none";
    alrt1.style.display="none";
    alrt3.style.display="block";
    return false;
    }
    var obj={
        username:user1,
        password:pass1
    };
    user.push(obj);
    
    alrt2.style.display="block";
    alrt1.style.display="none";
    alrt3.style.display="none";
}

