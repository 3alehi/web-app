let username = document.getElementById('userid')
let passworduser = document.getElementById('passworduser')
let gname = document.getElementById('nameid')

let informationuser=[
]
let sumbit = document.getElementById('sumbit1')
sumbit.addEventListener('click',()=>{
    let user1={username:username.value,password:passworduser.value,name:gname.value}
    informationuser.push(user1)

    
    console.log(informationuser);
    if(localStorage.getItem('name') != null){
      localStorage.clear()
   }
 if(localStorage.getItem('name') == null){
    localStorage.setItem('name',user1.username)
    localStorage.setItem('fname',user1.name)
    localStorage.setItem("password" , user1.password)
 }
location.replace('index.html')
})
