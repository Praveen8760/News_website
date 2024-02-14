const api_key='6d5a5b5ee34fa2b383192475fb89f0d1'

// extra element

const header_date=document.getElementById('date')


// heading carsole elements
const head_img_node=document.getElementById('headline_img')
const headline_node=document.getElementById('headline')
const headline_desc_node=document.getElementById('headline_desc')
const from_node=document.getElementById('from')
const head_view_more=document.getElementById('head_view_more')
const head_hours=document.getElementById('heading_hours')

const world_btn=document.getElementById('world')
const politics_btn=document.getElementById('politics')
const business_btn=document.getElementById('business')
const sport_btn=document.getElementById('sports')
const tech_btn1=document.getElementById('technology')
const tech_btn2=document.getElementById('tech2')
const health_btn=document.getElementById('health')
const latest_btn=document.getElementById('latest')


// main news elements
const main_news=document.getElementById('news_main')
const news_container=document.getElementById('news_card_container')


// api-calls
async function get_gereral_news(){
    let url=`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=15&apikey=${api_key}`
    try{
        let request=await fetch(url)
        let data=await request.json()
        let len=data.articles.length
        console.log(len);
        general_news(data,len)
    }
    catch(err){
        console.log(err);
    }
}

async function get_world_news(){
    let url=`https://gnews.io/api/v4/top-headlines?category=world&lang=en&country=in&max=15&apikey=${api_key}`
    try{
        let request=await fetch(url)
        let data=await request.json()
        let len=data.articles.length
        console.log(len);
        world_news(data,len)
    }
    catch(err){
        console.log(err);
    }
}

async function get_business_news(){
    let url=`https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=15&apikey=${api_key}`
    try{
        let request=await fetch(url)
        let data=await request.json()
        let len=data.articles.length
        console.log(len);
        business_news(data,len)
    }
    catch(err){
        console.log(err);
    }
}

async function get_sports_news(){
    let url=`https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=in&max=15&apikey=${api_key}`
    try{
        let request=await fetch(url)
        let data=await request.json()
        let len=data.articles.length
        console.log(len);
        sports_news(data,len)
    }
    catch(err){
        console.log(err);
    }
}

async function get_tech_news(){
    let url=`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=in&max=15&apikey=${api_key}`
    try{
        let request=await fetch(url)
        let data=await request.json()
        let len=data.articles.length
        console.log(len);
        technology_news(data,len)
    }
    catch(err){
        console.log(err);
    }
}
async function get_health_news(){
    let url=`https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=in&max=15&apikey=${api_key}`
    try{
        let request=await fetch(url)
        let data=await request.json()
        let len=data.articles.length
        console.log(len);
        health_news(data,len)
    }
    catch(err){
        console.log(err);
    }
}


//  data functions
function general_news(data,len){
    head_img_node.src=data.articles[0].image
    headline_node.innerHTML=data.articles[0].title
    headline_desc_node.innerHTML=data.articles[0].description
    from_node.innerHTML=data.articles[0].source.name
    head_view_more.setAttribute('href',data.articles[0].url)
    let date=new Date().getHours()
    let hour=data.articles[0].publishedAt
    hour=hour.slice(11,13);
    head_hours.innerHTML=`${Math.abs(date-hour)} hours ago |`

    for(i=1;i<=len;i++){
        let card=document.createElement('div')
        let card_img=document.createElement('img')
        let card_main=document.createElement('main')
        let title=document.createElement('p')
        let desc=document.createElement('p')
        let footer=document.createElement('footer')
        let footer_desc=document.createElement('h6')

        card.classList='flex flex-col bg-white'
        card_main.classList='px-7 pb-4'
        title.classList='text-head-text mt-3 content-sm head lg:text-quote'
        desc.classList='mt-3 header-font text-head-text lg:text-content_lg'
        footer.classList="mt-5 text-breaking-red head"


        card_img.src=data.articles[i].image
        title.innerHTML=data.articles[i].title
        desc.innerHTML=data.articles[i].description        
        footer_desc.innerHTML=`From:${data.articles[i].source.name}`
        
        // appending
        news_container.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_main)
        card_main.appendChild(title)
        card_main.appendChild(desc)
        card_main.appendChild(footer)
        footer.appendChild(footer_desc)
    }
}

function world_news(data,len){
    head_img_node.src=data.articles[0].image
    headline_node.innerHTML=data.articles[0].title
    headline_desc_node.innerHTML=data.articles[0].description
    from_node.innerHTML=data.articles[0].source.name
    head_view_more.setAttribute('href',data.articles[0].url)
    news_container.replaceChildren()
    for(i=1;i<len;i++){
        let card=document.createElement('div')
        let card_img=document.createElement('img')
        let card_main=document.createElement('main')
        let title=document.createElement('p')
        let desc=document.createElement('p')
        let footer=document.createElement('footer')
        let footer_desc=document.createElement('h6')

        card.classList='flex flex-col bg-white'
        card_main.classList='px-7 pb-4'
        title.classList='text-head-text mt-3 content-sm head lg:text-quote'
        desc.classList='mt-3 header-font text-head-text lg:text-content_lg'
        footer.classList="mt-5 text-breaking-red head"


        card_img.src=data.articles[i].image
        title.innerHTML=data.articles[i].title
        desc.innerHTML=data.articles[i].description        
        footer_desc.innerHTML=`From:${data.articles[i].source.name}`

        // appending
        news_container.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_main)
        card_main.appendChild(title)
        card_main.appendChild(desc)
        card_main.appendChild(footer)
        footer.appendChild(footer_desc)

        main_news.appendChild(news_container)
        console.log('sub');
    }
}

function business_news(data,len){
    head_img_node.src=data.articles[0].image
    headline_node.innerHTML=data.articles[0].title
    headline_desc_node.innerHTML=data.articles[0].description
    from_node.innerHTML=data.articles[0].source.name
    head_view_more.setAttribute('href',data.articles[0].url)
    news_container.replaceChildren()
    for(i=1;i<len;i++){
        let card=document.createElement('div')
        let card_img=document.createElement('img')
        let card_main=document.createElement('main')
        let title=document.createElement('p')
        let desc=document.createElement('p')
        let footer=document.createElement('footer')
        let footer_desc=document.createElement('h6')

        card.classList='flex flex-col bg-white'
        card_main.classList='px-7 pb-4'
        title.classList='text-head-text mt-3 content-sm head lg:text-quote'
        desc.classList='mt-3 header-font text-head-text lg:text-content_lg'
        footer.classList="mt-5 text-breaking-red head"


        card_img.src=data.articles[i].image
        title.innerHTML=data.articles[i].title
        desc.innerHTML=data.articles[i].description        
        footer_desc.innerHTML=`From:${data.articles[i].source.name}`

        // appending
        news_container.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_main)
        card_main.appendChild(title)
        card_main.appendChild(desc)
        card_main.appendChild(footer)
        footer.appendChild(footer_desc)

        main_news.appendChild(news_container)
        console.log('sub');
    }
}

function sports_news(data,len){
    head_img_node.src=data.articles[0].image
    headline_node.innerHTML=data.articles[0].title
    headline_desc_node.innerHTML=data.articles[0].description
    from_node.innerHTML=data.articles[0].source.name
    head_view_more.setAttribute('href',data.articles[0].url)
    news_container.replaceChildren()
    for(i=1;i<len;i++){
        let card=document.createElement('div')
        let card_img=document.createElement('img')
        let card_main=document.createElement('main')
        let title=document.createElement('p')
        let desc=document.createElement('p')
        let footer=document.createElement('footer')
        let footer_desc=document.createElement('h6')

        card.classList='flex flex-col bg-white'
        card_main.classList='px-7 pb-4'
        title.classList='text-head-text mt-3 content-sm head lg:text-quote'
        desc.classList='mt-3 header-font text-head-text lg:text-content_lg'
        footer.classList="mt-5 text-breaking-red head"


        card_img.src=data.articles[i].image
        title.innerHTML=data.articles[i].title
        desc.innerHTML=data.articles[i].description        
        footer_desc.innerHTML=`From:${data.articles[i].source.name}`
        
        
        // appending
        news_container.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_main)
        card_main.appendChild(title)
        card_main.appendChild(desc)
        card_main.appendChild(footer)
        footer.appendChild(footer_desc)

        main_news.appendChild(news_container)
        console.log('sub');
    }
}

function technology_news(data,len){
    head_img_node.src=data.articles[0].image
    headline_node.innerHTML=data.articles[0].title
    headline_desc_node.innerHTML=data.articles[0].description
    from_node.innerHTML=data.articles[0].source.name
    head_view_more.setAttribute('href',data.articles[0].url)
    news_container.replaceChildren()
    for(i=1;i<len;i++){
        let card=document.createElement('div')
        let card_img=document.createElement('img')
        let card_main=document.createElement('main')
        let title=document.createElement('p')
        let desc=document.createElement('p')
        let footer=document.createElement('footer')
        let footer_desc=document.createElement('h6')

        card.classList='flex flex-col bg-white'
        card_main.classList='px-7 pb-4'
        title.classList='text-head-text mt-3 content-sm head lg:text-quote'
        desc.classList='mt-3 header-font text-head-text lg:text-content_lg'
        footer.classList="mt-5 text-breaking-red head"


        card_img.src=data.articles[i].image
        title.innerHTML=data.articles[i].title
        desc.innerHTML=data.articles[i].description        
        footer_desc.innerHTML=`From:${data.articles[i].source.name}`

        // appending
        news_container.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_main)
        card_main.appendChild(title)
        card_main.appendChild(desc)
        card_main.appendChild(footer)
        footer.appendChild(footer_desc)

        main_news.appendChild(news_container)
        console.log('sub');
    }
}

function health_news(data,len){
    head_img_node.src=data.articles[0].image
    headline_node.innerHTML=data.articles[0].title
    headline_desc_node.innerHTML=data.articles[0].description
    from_node.innerHTML=data.articles[0].source.name
    head_view_more.setAttribute('href',data.articles[0].url)
    for(i=1;i<=len;i++){
        let card=document.createElement('div')
        let card_img=document.createElement('img')
        let card_main=document.createElement('main')
        let title=document.createElement('p')
        let desc=document.createElement('p')
        let footer=document.createElement('footer')
        let footer_desc=document.createElement('h6')

        card.classList='flex flex-col bg-white'
        card_main.classList='px-7 pb-4'
        title.classList='text-head-text mt-3 content-sm head lg:text-quote'
        desc.classList='mt-3 header-font text-head-text lg:text-content_lg'
        footer.classList="mt-5 text-breaking-red head"


        card_img.src=data.articles[i].image
        title.innerHTML=data.articles[i].title
        desc.innerHTML=data.articles[i].description        
        footer_desc.innerHTML=`From:${data.articles[i].source.name}`

        // appending
        news_container.appendChild(card)
        card.appendChild(card_img)
        card.appendChild(card_main)
        card_main.appendChild(title)
        card_main.appendChild(desc)
        card_main.appendChild(footer)
        footer.appendChild(footer_desc)
    }
}



// date function
let current_data;
document.addEventListener('DOMContentLoaded',()=>{
    let date_obj=new Date();
    let date=date_obj.getDate()
    let month=date_obj.getMonth()+1
    let year=date_obj.getFullYear();
    current_hour=date_obj.getHours();
    if(month<10){
        current_data=`${year}-0${month}-${date}`
    }
    else{
        current_data=`${year}-${month}-${date}`
    }
    let head_date=`${date}-${month}-${year}`
    header_date.innerHTML=head_date
})



world_btn.addEventListener('click',get_world_news)
business_btn.addEventListener('click',get_business_news)
sport_btn.addEventListener('click',get_sports_news)
tech_btn1.addEventListener('click',get_tech_news)
tech_btn2.addEventListener('click',get_tech_news)
health_btn.addEventListener('click',get_health_news)
latest_btn.addEventListener('click',get_gereral_news)

document.addEventListener('DOMContentLoaded',get_gereral_news)


