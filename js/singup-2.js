let code = document.getElementById('code')
let display = document.getElementById('display')
let ok = false;
let vorod = document.querySelector('.cracc')
vorod.addEventListener('click',()=>{
location.replace('login.html')        })
let phnumber = document.getElementById('phnumber')
let submit = document.getElementById('sumbit-login')
submit.addEventListener('click',()=>{
if(phnumber.value.length ==12)  {
ok =true;
display.style.display='block'

}
if(ok == false){
if (display.style.display!='block' || code.value!="123456" || phnumber.value.length !=12){
swal({
title: 'اوه!نه',
text: 'اطلاعات وارد شده صحیح نمی باشد',
icon: 'error',
timer: 2000,
})
}
}
if(display.style.display=='block' &&code.value=="123456" ){
localStorage.setItem('phnumber',phnumber.value)
swal({
title: 'عملیات موفق',
text: 'ثبت نام با موفقیت انجام شد',
icon: 'success',
timer: 2000,
})

setTimeout(function(){
localStorage.setItem('islogin','1')
location.replace('getusername.html')
},2500)

}




})
