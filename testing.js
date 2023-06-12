let toggle=document.querySelector('.headertoggle i')

toggle.addEventListener('click',function(){
    console.log(document.querySelector('.headerlinks').classList.toggle('active'))
    toggle.classList.toggle('active')
})


let username=document.querySelector('.username').value
let email=document.querySelector('.email').value
let massage=document.querySelector('.massage').value

function handlerMassage(){
    if(username==''||email==''||massage==''){
        alert('please isi inputan')
    }
    else{
        alert('sukses')
    }
}