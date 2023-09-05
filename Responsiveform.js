function validate()
{ let contact= document.getElementById('name');
let contactdetails=document.getElementById('phone');
let avalidemail=document.getElementById('email');
let avalidpassword=document.getElementById('password');


if(document.getElementById('name').value.trim()=='')
{contact=false
document.getElementById('nameerror').innerHTML="&#x2717  Please enter your name ";
document.getElementById('nameerror').style.color='red'}
else{
    contact=true
    document.getElementById('nameerror').innerHTML='&#x2713'
    document.getElementById('nameerror').style.color='green'
}
if(document.getElementById('phone').value.trim()=='' )
{contactdetails=false
document.getElementById('numbererror').innerHTML='&#x2717 Please enter a phone number'
document.getElementById('numbererror').style.color='red'}
else{
    contactdetails=true 
    document.getElementById('numbererror').innerHTML='&#x2713'
    document.getElementById('numbererror').style.color='green'
}
if(document.getElementById('email').value.trim()=='')
{avalidemail=false
document.getElementById('emailerror').innerHTML='&#x2717 Please enter your mailid'
document.getElementById('emailerror').style.color='red'}


else{
    avalidemail=true
    document.getElementById('emailerror').innerHTML='&#x2713'
    document.getElementById('emailerror').style.color='green'
}
if(document.getElementById('password').value.trim()=='' )
{avalidpassword=false
document.getElementById('passworderror').innerHTML='&#x2717 Enter your password'
document.getElementById('passworderror').style.color='red'}

else{
    avalidpassword=true
    document.getElementById('passworderror').innerHTML='&#x2713'
    document.getElementById('passworderror').style.color='green'
}
if(contact==false||  contactdetails==false||avalidemail==false ||avalidpassword==false){
    return false;
}
else{
    return true
}
}








/* if (name.value =="" )
{alert('Please enter your name')
}

const contact= document.getElementById("phone");
const mailid= document.getElementById("email");
const passsword=document.getElementById("password");
const checkbox=document.getElementsByClassName("check");

else if( contact !=Number, contact.length<10)
{alert("please enter a valid phone number")}

else if(mailid.value =="")
{alert("please type your mail id")
return false}

else if(passsword.value=="")
{alert("please enter a password")
return false}

else if(passsword.length<6)
{alert("Password should be atleast 6 characters long")
 return false}

else if (checkbox.checked == document.getElementById())
{alert("Thankyou for accepting terms and condition");}
else{alert("please accept terms and conditions to proceed");} */



