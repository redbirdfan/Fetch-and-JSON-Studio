window.addEventListener("load", function (){
    fetch("https://handlers.eduction.launchcode.org/static/astronauts.json").then(function(response) {
    return response.json()
        

}).then(function(json) {
        let astronaut;
        console.log(json)

    
     })
});
