
// API Keys
const QUOTE_API_KEY='NKx5UmaufSYVKGDro4p36w==sFnTZoVcnGUoyD8u'


// element node
const footer_copy_right=document.querySelector('.copyright')
const quote_btn=document.getElementById('quote')
const quote_node=document.getElementById('quote_value')

let quote_api={
    method:'GET',
    headers:{
        'x-api-key':QUOTE_API_KEY
    }
}
let quote_url="https://api.api-ninjas.com/v1/quotes?category=happiness"


async function get_quote(){
    let quote_data=await fetch(quote_url,quote_api)
    .then(res => res.json())
    .then(data => {
        let quote=data;
        console.log(quote);
        quote_node.innerText=quote[0]['quote']
        
    })
    .catch(err=>{
        quote_node.innerText='API Failed !!!';
    })
}
function update_copyright(){
    const data=new Date().getFullYear();
    let text=`copyright &copy | ${data}`
    footer_copy_right.innerHTML=text
}


quote_btn.addEventListener('click',get_quote)
document.addEventListener("DOMContentLoaded",get_quote)
document.addEventListener("DOMContentLoaded",update_copyright)