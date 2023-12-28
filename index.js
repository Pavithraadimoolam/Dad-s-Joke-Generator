const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "tQOZKmeTtLiW1nkUUeCyOQ==TSgZXSbHvPDdgpx0";

const options = {
    method:"GET",
    headers: {
        "X-Api-Key" : apikey
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        
    

    jokeEl.innerText="Updating....";
    btnEl.disabled= true;
    btnEl.innerText="Loading...";
   const response=await fetch(apiURL,options);
   const data = await response.json();
   btnEl.disabled= false;
   btnEl.innerText="Tell me a joke";


   jokeEl.innerText=data[0].joke
} catch (error) {
        jokeEl.innerText="An error "
        console.log(error);
        btnEl.disabled= true;
        btnEl.innerText="Tell me a joke";
}
}

btnEl.addEventListener("click",getJoke)
