//http://api.openweathermap.org/data/2.5/weather?q=Anapa&APPID=d849f74ae0d8e55dd10666a12adfd084

function getUrl(town){
    let url1 = 'https://api.openweathermap.org/data/2.5/weather?q='

    let url2 = '&APPID=d849f74ae0d8e55dd10666a12adfd084'

    return url1+town+url2
}

let Anapa=document.querySelector('#Anapa')
let Male=document.querySelector('#Male')
let Kharkiv=document.querySelector('#Kharkiv')
let Smolensk=document.querySelector('#Smolensk')
let Bangkok=document.querySelector('#Bangkok')
let KualaLumpur=document.querySelector('#KualaLumpur')
let Cairo=document.querySelector('#Cairo')
let Washington=document.querySelector('#Washington')
let Rio=document.querySelector('#Rio')
let Urengoy=document.querySelector('#Urengoy')

let display=document.querySelector('.right')

Anapa.addEventListener('click',() => {
    let url=getUrl('Anapa')
    getData(url)
})
Male.addEventListener('click',() => {
    let url=getUrl('Male')
    getData(url)
})
Kharkiv.addEventListener('click',() => {
    let url=getUrl('Kharkiv')
    getData(url)
})
Smolensk.addEventListener('click',() => {
    let url=getUrl('Smolensk')
    getData(url)
})
Bangkok.addEventListener('click',() => {
    let url=getUrl('Bangkok')
    getData(url)
})
Singapore.addEventListener('click',() => {
    let url=getUrl('Singapore')
    getData(url)
})
Cairo.addEventListener('click',() => {
    let url=getUrl('Cairo')
    getData(url)
})
Washington.addEventListener('click',() => {
    let url=getUrl('Washington')
    getData(url)
})
Rio.addEventListener('click',() => {
    let url=getUrl('Rio')
    getData(url)
})
Urengoy.addEventListener('click',() => {
    let url=getUrl('Urengoy')
    getData(url)
})



async function getData(url){

    let promise = await fetch(url)
    if (promise.ok){
        let json = await promise.json()


        let photo='';
        if (json.name=='Anapa'){
            photo='<img height="300px" src="http://anapacity.com/content/images/foto-gorod-kurort-anapa.jpg">'
        }
        else if (json.name=='Malé'){
            photo='<img height="300px" src="https://travelgide.ru/wp-content/uploads/2019/07/male-maldivy-vid-sverhu.jpg">'
        }
        else if (json.name=='Kharkiv'){
            photo='<img height="300px" src="https://fainaidea.com/wp-content/uploads/2019/05/1416694.jpg">'
        }
        else if (json.name=='Smolenskaya Oblast'){
            photo='<img height="300px" src="http://gtrksmolensk.ru/media/news/vaprvapfyvap.jpg">'
        }
        else if (json.name=='Bangkok'){
            photo='<img height="300px" src="https://lh3.googleusercontent.com/proxy/IdlzNRgh3-CmVpDYzuA-Fp6FRDyxvI_YAijtoCCSGxyoNnMoCXEAYq6M8TeeiK-8xm_7bEE2ya2tKD-vJV37mdjFbRbLc9Us-iZndKJn5ncHxtYo6QvdLO7IKng">'
        }
        else if (json.name=='Singapore'){
            photo='<img height="300px" src="https://tripmydream.cc/travelhub/travel/blocks/14/6252/block_146252.jpg">'
        }
        else if (json.name=='Cairo'){
            photo='<img height="300px" src="https://turizm.world/wp-content/uploads/2015/03/kairo.jpg">'
        }
        else if (json.name=='Washington'){
            photo='<img height="300px" src="https://www.ustudy.ru/upload/tiny/vashington1.jpg">'
        }
        else if (json.name=='Rio'){
            photo='<img height="300px" src="data:image/jpeg;base64,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">'
        }
        else if (json.name=='Urengoy'){
            photo='<img height="300px" src="https://lh3.googleusercontent.com/proxy/h2zj4NU8uZ1hRzzLi9KGTV-5CuBMMgzYPV8b_DlAzKa2KChPYOwz_tHb-Pn_2tlJOI1UqDhnVLQRBbA37f7ajMifROwlWbpmtVN9K94Kb__eFrDfV-Dyo1xrf0rUEbS4KA3sNlTouRg">'
        }        



        let tem=parseFloat(json.main.temp)-273.15

        let pogoda=json.weather[0].description
        if (pogoda=='clear sky'){
            display.innerHTML=`
            <div>Ясно</div>
            `
        }
        else if (pogoda=='light rain'){
            display.innerHTML=`
            <div>Моросняк</div>
            `
        }
        else if (pogoda=='overcast clouds'){
            display.innerHTML=`
            <div>Облачно</div>
            `
        }
        else if (pogoda=='light snow'){
            display.innerHTML=`
            <div>Снежочек</div>
            `
        }
        else if (pogoda=='broken clouds'){
            display.innerHTML=`
            <div>Облачно с прояснениями</div>
            `
        }
        else if (pogoda=='light intensity drizzle'){
            display.innerHTML=`
            <div>Дождик</div>
            `
        }
        else if (pogoda=='scattered clouds'){
            display.innerHTML=`
            <div>Редкие облака</div>
            `
        }


        display.innerHTML+=`
        <div>Скорость ветра: ${json.wind.speed} м/с</div>
        <div>Температура: ${tem.toFixed(2)}°С</div>
        <div>${photo}</div>

        `
        console.log()
    }
}

