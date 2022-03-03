// const btn = document.querySelector(".btn");
const textArea = document.querySelector(".textArea");
// const countryName = document.getElementsByClassName(".countryName");
const displayField = document.getElementsByClassName(".country");


var ul = document.getElementById("country")
const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];

const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];

const display = ()=> countries.map(function (e, index) {
    var li = document.createElement('li');
    li.innerText = e + '     ' + flags[index];
    ul.append(li)
})
display()
var btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    // var char 
    
    countries.push(textArea.value)
    if (!countries.includes()) {
    }
    
    
    // if(textArea !== ""){
        
        // }
        ul.innerHTML = ''
    display()
    console.log(countries);
})






























// 
// 
// // const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
// 



// 









