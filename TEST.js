function text(){
    document.getElementById("ui").value = 12345;
}

function valid() {
    let flag = true;

    let id = document.getElementById("fid").value;

    let name = document.getElementById("fn").value;
    let rname = /[0-9]/;

    let pass = document.getElementById("fp").value;

    let dd = document.getElementById("dd").value;

    let pin = document.getElementById("fpin").value;
    let rpin = /[a-z A-Z .!@#$%^&*]/;

    let email = document.getElementById("fe").value;
    let remail = /([a-z A-Z 0-9 -_]+)@([a-z A-Z]+).([a-z A-Z])/;

    let  ckb1= document.getElementById("ckb1").checked;
    let  ckb2= document.getElementById("ckb2").checked;
   
    if (id.length < 5 || id.length > 12) {
        document.getElementById("idlb").innerHTML="*5 < length < 12*";
        document.getElementById("fid").style.border = "2px solid red";
        flag = false;
    }
    else {
        document.getElementById("idlb").innerHTML="";
        document.getElementById("fid").style.border = "none";
    }

    if(rname.test(name)){
        document.getElementById("nlb").innerHTML="*Digits Are NOT Allowed";
        document.getElementById("fn").style.border="2px solid red";
        flag = false;
    }
    else if(name.length <= 1){
        document.getElementById("nlb").innerHTML="*Length Of NAME >= 2";
        document.getElementById("fn").style.border="2px solid red";
        flag = false;
    }
    else{
        document.getElementById("nlb"),innerHTML="";
        document.getElementById("fn").style.border="none";
    }
   
    if (pass.length < 7 || pass.length > 12) {
        document.getElementById("plb").innerHTML="*5 < length < 12*";
        document.getElementById("fp").style.border = "2px solid red";
        flag = false;
    }
    else {
        document.getElementById("plb").innerHTML="";
        document.getElementById("fp").style.border = "none";
    }

    if(dd == "select"){
        document.getElementById("ddlb").innerHTML="*Must Select Country";
        document.getElementById("dd").style.border = "2px solid red";
        flag = false;
    }
    else{
        document.getElementById("ddlb").innerHTML="";
        document.getElementById("dd").style.border = "none";
    }

    if(rpin.test(pin)){
        document.getElementById("pinlb").innerHTML="*Only NUMBERS are Allowed";
        document.getElementById("fp").style.border = "2px solid red";
        flag = false;
    }
    else if(pin.length != 6){
        document.getElementById("pinlb").innerHTML="*PIN Length > 6";
        document.getElementById("fp").style.border = "2px solid red";
        flag = false;
    }
    else{
        document.getElementById("pinlb").innerHTML="";
        document.getElementById("fp").style.border = "none";
    }

    if(!remail.test(email)){
        document.getElementById("elb").innerHTML="*Ivalid EMAIL";
        document.getElementById("fe").style.border = "2px solid red";
        flag = false;
    }
    else{
        document.getElementById("elb").innerHTML="";
        document.getElementById("fe").style.border = "none";
    }

    if(ckb1 == 0 && ckb2 == 0){
        document.getElementById("ckblb").innerHTML="*Required Field";
    }
    else{
        document.getElementById("ckblb").innerHTML="";
    }

    return flag;
}