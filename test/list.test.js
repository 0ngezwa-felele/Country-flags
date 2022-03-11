const 
describe('country-flag tests', function () {
    it('should be able to display thelist of countries and their flags', ()=> {
        


        assert.equal([{ countryName: "Argentina", flag: "🇦🇷" },

        { countryName: "Brazil", flag: "🇧🇷" },
        
        { countryName: "Chile", flag: "🇨🇱" },
        
        { countryName: "Zambia", flag: "🇿🇲" },
        
        { countryName: "Uganda", flag: "🇺🇬" },
        
        { countryName: "Malawi", flag: "🇲🇼" },
        
        { countryName: "Rwanda", flag: "🇷🇼" },
        
        { countryName: "Ireland", flag: "🇮🇪" },
        
        { countryName: "Switzerland", flag: "🇨🇭" }], display());
    });


  
    })