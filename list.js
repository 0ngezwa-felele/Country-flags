const textArea = document.querySelector(".textArea");
var countryName =  document.querySelector(".countryName");
const flag =  document.querySelector(".flag");



var ul = document.getElementById("country")

const countries = [{ countryName: "Argentina", flag: "🇦🇷" },

{ countryName: "Brazil", flag: "🇧🇷" },

{ countryName: "Chile", flag: "🇨🇱" },

{ countryName: "Zambia", flag: "🇿🇲" },

{ countryName: "Uganda", flag: "🇺🇬" },

{ countryName: "Malawi", flag: "🇲🇼" },

{ countryName: "Rwanda", flag: "🇷🇼" },

{ countryName: "Ireland", flag: "🇮🇪" },

{ countryName: "Switzerland", flag: "🇨🇭" }];


const display = () => countries.map(function (e, index) {
   
    var list = document.createElement('li');
    list.innerText = e.countryName +'    '+e.flag 

    if (countries.includes(countries)){
        countries.push(countries);
    } 

    ul.append(list)
    console.log(countries[index])
    
    
})

display()


var btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    // var char 

    console.log(countryName.value, flag.value);
    var allCountries = { countryName: countryName.value, flag: flag.value}
    
    countries.push(allCountries)
    if (!countries.includes(countryName.value)) {
    }
     if(countryName != undefined){
         countryName = countryName.value
     }


    ul.innerText = ' '
    display()
    console.log(countries);
})






























// 
// 
// // const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
// 



// 









