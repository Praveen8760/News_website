const icon_node=document.getElementById('sidebar')
const body_node=document.getElementById('body')
const navbar_node=document.getElementById('nav')
const nav_icon=document.getElementById('nav_icon')
const conent_node=document.querySelector('.content')
const content_item=document.querySelector('.content-item')
const close_icon=document.querySelector('#close-btn')

const world_btn=document.getElementById('world')
const politics_btn=document.getElementById('politics')
const business_btn=document.getElementById('business')
const sport_btn=document.getElementById('sports')
const tech_btn1=document.getElementById('technology')



icon_node.addEventListener('click',()=>{
    body_node.classList.toggle('blur')
    navbar_node.classList.toggle('side')
    navbar_node.classList.toggle('flex-col')
    navbar_node.classList.replace('justify-between','justify-start')
    nav_icon.classList.toggle('hidden')
    conent_node.classList.toggle('hidden')
    content_item.classList.toggle('flex-col')
    content_item.classList.toggle('gap-2')
    content_item.style.fontSize='18px'
    close_icon.classList.toggle('hidden')
})

function close(){
    body_node.classList.toggle('blur')
    navbar_node.classList.toggle('side')
    navbar_node.classList.toggle('flex-col')
    navbar_node.classList.replace('justify-between','justify-start')
    nav_icon.classList.toggle('hidden')
    conent_node.classList.toggle('hidden')
    content_item.classList.toggle('flex-col')
    content_item.classList.toggle('gap-2')
    close_icon.classList.toggle('hidden')
}

close_icon.addEventListener('click',close)

world_btn.addEventListener('click',()=>{
    setTimeout(close,500)
})
politics_btn.addEventListener('click',()=>{
    setTimeout(close,500)
})
business_btn.addEventListener('click',()=>{
    setTimeout(close,500)
})
sport_btn.addEventListener('click',()=>{
    setTimeout(close,500)
})

tech_btn1.addEventListener('click',()=>{
    setTimeout(close,500)
})