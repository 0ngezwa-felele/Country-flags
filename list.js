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


const sortedList = [];

sortedList.push(countries);
console.log(sortedList);
localStorage.setItem('session', JSON.stringify(countries));
console.log(countries)





//displaying the list of countries
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

//adding another country
var btn = document.getElementById("btn")
btn.addEventListener("click",()=> {

    console.log(countryName.value, flag.value);
    var allCountries = { countryName: countryName.value, flag: flag.value}
    
    // countries.push(allCountries)
    if (!countries.includes(countryName.value)) {
        countries.push(allCountries)
    }
     if(countryName != undefined){
         countryName = countryName.value
     }


    ul.innerText = ' '
    display()
    console.log(countries);
})
// sorting list alphabetically
// const sortArray =(a, z) =>{
//     if (a.countryName < z.countryName) {return -1;}
//     if (a.flag > z.flag) {return 1;}
// }
//     countries.sort(sortArray)
//     ul.innerHTML = ''
//     display()
//     console.log(countries);


// var sorted = countries.sort(SortArray);
// console.log(sorted);

//ascending order
var btn2 = document.getElementById("ascBTN")
btn2.addEventListener("click",()=> {
    const ascArray =(a, z) =>{
        if (a.countryName < z.countryName) {return -1;}
        if (a.flag > z.flag) {return 1;}
      
    }
    countries.sort(ascArray)
    ul.innerHTML = ''
    display()
    console.log(countries);
})
//descending order
var btn3 = document.getElementById("descBTN")
btn3.addEventListener("click", ()=> {
    const descArray =(a, z) =>{
        if (a.countryName < z.countryName) {return 1;}
        if (a.flag > z.flag) {return -1;}
      
    }

    countries.sort(descArray)
    ul.innerHTML = ''
    display()
    console.log(countries);
})
