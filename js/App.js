let akhbar=[
    "امروز مدارس قم بدلیل بارندگی تعطیل شد",
    "با راه اندازی بزرگ راه قم تهران ترافیک ...   ",
"قیمت اجاره خانه از سال گذشته 10درصد افزایش یافت",
"شهردار قم بودجه بیشتری برای  متروپل قم هزینه میکند",
"اقامه نماز جمعه در مصلی با حضور ایت الله خامنه ایی",
"الودگی هوا نسبت به سال گذشته 10درصد افزایش",
"مونوریل های بیشتری در حال احداث است",
"استاندار قم گفت پارک های بیشتری احداث خواهیم کرد",
]
let akhbarindex =0;
let akhbarcotah = "اخبار کوتاه:";
let khabar = document.getElementById('khabar')
setInterval(function(){
    akhbarindex++
    if(akhbarindex == 8){
        akhbarindex=0;
    }
    khabar.innerHTML= akhbarcotah +akhbar[akhbarindex]


},3000)
let sliderpc =[
    "./img/slider1.jpg",
    "./img/slider2.jpg",
    "./img/slider3.jpg",
    "./img/slider4.jpg",
    "./img/slider5.jpg",
    "./img/slider6.jpg",
    "./img/slider8.jpg",
    "./img/slider9.jpg",
    "./img/slider10.jpg",
    "./img/slider11.jpg",
    "./img/slider.jpg",

]
let sliderimg = document.getElementById('sliderimg')
let sliderindex=0;
setInterval(function(){
    sliderindex++
    if(sliderindex == 10){
        sliderindex = 0;
    }
sliderimg.setAttribute('src' , sliderpc[sliderindex])

},3000)
let cracc = document.querySelector('.cracc')
let main = document.querySelector('.main')
let login = document.getElementById('login')
let username = document.getElementById('username')
let password = document.getElementById('password')


let ealanat = document.getElementById('ealanat')
ealanat.addEventListener('click' , ()=>{
    location.replace('notification.html')
})
let home = document.getElementById('home')
home.addEventListener('click' , ()=>{
location.replace('index.html')
})
let profile = document.getElementById('profile')
profile.addEventListener('click',()=>{
    location.replace('profile.html')
})

if(localStorage.getItem('islogin')==null){
    localStorage.setItem('islogin', '0')
}

if(localStorage.getItem('islogin')!='1'){
    location.replace('login.html')
}
let wallet = document.getElementById('wallet')
wallet.addEventListener('click',()=>{
    location.replace('wallet.html')
})