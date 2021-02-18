// Length Conversion//
// ------------------//
let meter = document.querySelector("#meter");
let inch = document.querySelector("#inch");
let foot = document.querySelector("#foot");


meter.addEventListener('input', updateLength);
inch.addEventListener('input', updateLength);
foot.addEventListener('input', updateLength);

function updateLength(e) {
    if (e.target.name == "meter") {
        inch.value = (e.target.value * 39.3701).toFixed(3);
        foot.value = (e.target.value * 3.28084).toFixed(3);
    } else if (e.target.name == "inch") {
        meter.value = (e.target.value * 0.0254).toFixed(3);
        foott.value = (e.target.value * 0.0833333).toFixed(3);
    } else if (e.target.name == "foot") {
        meter.value = (e.target.value * 0.3048).toFixed(3);
        inch.value = (e.target.value * 12).toFixed(3);
    }
}

// Currency Conversion
// -------------------------------//

// Function for calling api to get the convertion
async function currency(mURL, to){
    const res = await fetch(mURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ee318d77f2msh665af216032256dp1d5958jsn06d27f80f20f",
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
        }
    })
    const data = await res.json();
    let firstValue= data.rates[to].rate_for_amount;
    tocurrency.value = parseFloat(firstValue).toFixed(2);;
}
// Element definition
let fromcurrency = document.querySelector("#fromcurrency");
let fromcurrencysymbol = document.querySelector("#fromcurrencysymbol");
let curbtn = document.querySelector("#convertcurrencybtn");
// Adding eventlisten when convert button is hit
curbtn.addEventListener("click", ()=>{
    a(fromcurrency.value);
})

let tocurrency = document.querySelector("#tocurrency");
let tocurrencysymbol = document.querySelector("#tocurrencysymbol");
// Function to make URL to make a call to api
function a(b){
    const myUrl = new URL("https://currency-converter5.p.rapidapi.com/currency/convert");
    myUrl.searchParams.set("format", "json");
    myUrl.searchParams.append("from", fromcurrencysymbol.value);
    myUrl.searchParams.append("to", tocurrencysymbol.value);
    myUrl.searchParams.append("amount", b.toString());
    currency(myUrl, tocurrencysymbol.value);
}


// Energy Conversion //
// ----------------- //
let joule = document.querySelector("#joule");
let btu = document.querySelector("#btu");
let cal = document.querySelector("#cal");
let kWh = document.querySelector("#kWh");


joule.addEventListener('input', updateEnergy);
btu.addEventListener('input', updateEnergy);
cal.addEventListener('input', updateEnergy);
kWh.addEventListener('input', updateEnergy);

function updateEnergy(e) {
    if (e.target.name == "joule") {
        btu.value = (e.target.value /1055).toFixed(3);
        cal.value = (e.target.value*252 /1055).toFixed(3);
        kWh.value = (e.target.value/3600000).toFixed(6);
    } else if (e.target.name == "btu") {
        joule.value = (e.target.value *1055).toFixed(3);
        cal.value = (e.target.value*252 ).toFixed(3);
        kWh.value = (e.target.value*1000/3410000).toFixed(6);
    }
    else if (e.target.name == "cal") {
        joule.value = (e.target.value *1055/252).toFixed(3);
        btu.value = (e.target.value/252 ).toFixed(3);
        kWh.value = (e.target.value*12/10325000).toFixed(3);
    }
    else if (e.target.name == "kWh") {
        joule.value = (e.target.value *3600000).toFixed(3);
        btu.value = (e.target.value*3410 ).toFixed(3);
        cal.value = (e.target.value*860.42).toFixed(3);
    }
}
