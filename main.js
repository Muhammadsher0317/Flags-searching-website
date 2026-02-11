let allcountrty=[]
let api="https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
const getapi= async (links)=>{
let req= await fetch(links)
let data= await req.json()
allcountrty=data
writedata(allcountrty)
}
getapi(api)

let mode = localStorage.getItem("mode")?localStorage.getItem("mode")
:"Light"

const body=document.querySelector("body");
const maincards=document.querySelector(".maincards");
const switchbackround=document.querySelector(".switchbackround")
const inputs=document.querySelector(".inputs")
const writedata=(exactdata)=>{
   let htmls=""
exactdata.forEach((items)=>{
    htmls+=`
    <div class="mainrow">
                <img src="${items.flags.png}" alt="${items.flags.alt}">
                  
                  <div class="nameslar">
                    <h1 class="countryname">${items.name.common}</h1>
                    <h3 class="population">Population: <span class="populationsoni">${items.population}</span>   </h3>
                  <h3 class="Region">Region: <span class="exactlocation">${items.region}</span> </h3>
                  <h3 class="capital">Capital: <span class="centralarea">${items.capital}</span> </h3>
                  </div>
            </div>
    `
})
maincards.innerHTML=htmls
}
switchbackround.addEventListener("click",()=>{
if(mode=="light"){
    mode="dark"
}else{
    mode="light"
}
switchmode(mode)
localStorage.setItem("mode", mode)
})
const switchmode=(darkmode)=>{
        if(darkmode=="dark"){
        body.classList.add("active")
        switchbackround.textContent="Dark"
    }
        else{
            body.classList.remove("active")
            switchbackround.textContent="Light"
        }
}
switchmode(mode)
inputs.addEventListener("input",(e)=>{
let value = e.target.value.toLowerCase().trim()
let filtered=allcountrty.filter((country)=>{
    return country.name.common.toLowerCase().includes(value)
})
writedata(filtered)
})