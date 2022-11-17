let akhbar=[
    "امروز مدارس قم بدلیل بارندگی تعطیل شد",
    "با راه اندازی بزرگ راه قم تهران ترافیک 2 درصد افزایش یافت",
"قیمت اجاره خانه از سال گذشته 10درصد افزایش یافت",
"شهردار قم بودجه بیشتری برای  متروپل قم هزینه میکند",
"اقامه نماز جمعه در مصلی با حضور ایت الله خامنه ایی",
"الودگی هوا نسبت به سال گذشته 10درصد افزایش یافته است",
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
    "slider1.jpg",
    "slider2.jpg",
    "slider3.jpg",
    "slider4.jpg",
    "slider5.jpg",
    "slider6.jpg",
    "slider7.jpg",
    "slider8.jpg",
    "slider9.jpg",
    "slider10.jpg",
    "slider11.jpg",
    "slider.jpg",

]
let sliderimg = document.getElementById('sliderimg')
let sliderindex=0;
setInterval(function(){
    sliderindex++
    if(sliderindex == 12){
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
