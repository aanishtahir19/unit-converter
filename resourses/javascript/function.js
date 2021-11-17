setTimeout(function(){
    console.clear();
}, 2000)
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
        foot.value = (e.target.value * 0.0833333).toFixed(3);
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


// Moment of Inertia Calculator//
// --------------------------//
let shapeSelecter = document.querySelector("#shape-selecter");
let shapeImage = document.querySelector("#shape-input img");
let inputfields = document.querySelector("#shape-input-fields");
let shapeCalculate = document.querySelector("#shapeCalculate");
let shapeUnit = document.querySelector("#unit-selecter");
let currShape = shapeSelecter.value;

// console.log(currShape);
function shapeInput(val){
    currShape = val;
    if (currShape == "rectangle"){
        shapeImage.src ="./resourses/images/Rectangular.png"
        inputfields.innerHTML=`
        <label for="b">b: </label>
        <input type="number" id="b" name="b"><br>
        <label for="h">h: </label>
        <input type="number" id="h" name="h"><br>
        `;
    }
    else if (currShape == "hollowRectangle"){
        shapeImage.src ="./resourses/images/HollowRectangle.png"
        inputfields.innerHTML = `<label for="b">b: </label>
        <input type="number" id="b" name="b"><br>
        <label for="h">h: </label>
        <input type="number" id="h" name="h"><br>
        <label for="b1">b1: </label>
        <input type="number" id="b1" name="b1"><br>
        <label for="h1">h1: </label>
        <input type="number" id="h1" name="h1"><br>
        `;
    }
    else if (currShape == "circle"){
        shapeImage.src ="./resourses/images/Circular.png"
        inputfields.innerHTML=`<label for="r">r: </label>
        <input type="number" id="r" name="r"><br>`;

    }
    else if (currShape == "hollowCircle"){
        shapeImage.src ="./resourses/images/HollowCircle.png"
        inputfields.innerHTML=`<label for="r2">r2: </label>
        <input type="number" id="r2" name="r2"><br>
        <label for="r1">r1: </label>
        <input type="number" id="r1" name="r1"><br>`;

    }
    else if (currShape == "ibeam"){
        shapeImage.src ="./resourses/images/I_Beam.jpg"
        inputfields.innerHTML=`
        <label for="H">H: </label>
        <input type="number" id="H" name="H"><br>
        <label for="B">B: </label>
        <input type="number" id="B" name="B"><br>
        <label for="h">h: </label>
        <input type="number" id="h" name="h"><br>
        <label for="b">b: </label>
        <input type="number" id="b" name="b"><br>
        `;

    }
}
// Calcuate Values
shapeCalculate.addEventListener('click', function(){
    // Calculating Values for Rectangle
    if (currShape == "rectangle"){
        let b = document.getElementById("b").value;
        let h = document.getElementById("h").value;
        // let area = parseFloat(b)*parseFloat(h);
        let areaUnit = "m2";
        let mIUnit = "m4"
        console.clear();
        let Area = parseFloat(b)*parseFloat(h);
        let I_x = (parseFloat(b)*parseFloat(h)**3)/12;
        let I_y = (parseFloat(h)*parseFloat(b)**3)/12;
        let J = ((parseFloat(b)*parseFloat(h)**3)/12)+((parseFloat(h)*parseFloat(b)**3)/12);
        displayShapeOutput(Area, I_x, I_y, J);
    }
    // Calculating Values for hollow Rectangle
    if (currShape == "hollowRectangle"){
        let b = parseFloat(document.getElementById("b").value);
        let h = parseFloat(document.getElementById("h").value);
        let b1 = parseFloat(document.getElementById("b1").value);
        let h1 = parseFloat(document.getElementById("h1").value);
        
        // let area = parseFloat(b)*parseFloat(h);
        let areaUnit = "m2";
        let mIUnit = "m4"
        console.clear();
        let Area = b*h - (b-2*b1)*(h-2*h1);
        let I_x = ((b*(h**3))-(b1*(h1**3)))/12;
        let I_y = ((h*(b**3))-(h1*(b1**3)))/12;
        let J = I_x+I_y;
        displayShapeOutput(Area, I_x, I_y, J);
    }
    // Calculating Values for Circle
    else if (currShape == "circle"){
        let r = document.getElementById("r").value;
        let areaUnit = "m2";
        let mIUnit = "m4"
        console.clear();
        let Area = Math.PI*(parseFloat(r)**2);
        let I_x = (Math.PI*(parseFloat(r)**4))/4;
        let I_y = (Math.PI*(parseFloat(r)**4))/4;
        let J = (Math.PI*(parseFloat(r)**4))/2;
        displayShapeOutput(Area, I_x, I_y, J);
    }
    // Calculating Values for Hollow Circle
    else if (currShape == "hollowCircle"){
        let r1 = parseFloat(document.getElementById("r1").value);
        let r2 = parseFloat(document.getElementById("r2").value);
        let areaUnit = "m2";
        let mIUnit = "m4"
        console.clear();
        let Area = Math.PI*r2**2-Math.PI*r1**2;
        let I_x = Math.PI*((r2**4)-(r1**4))/4;
        let I_y = Math.PI*((r2**4)-(r1**4))/4;;
        let J = I_x+I_y;
        displayShapeOutput(Area, I_x, I_y, J);
    }
    else if (currShape == "ibeam"){
        let H = parseFloat(document.getElementById("H").value);
        let B = parseFloat(document.getElementById("B").value);
        let h = parseFloat(document.getElementById("h").value);
        let b = parseFloat(document.getElementById("b").value);
        console.clear();
        let Area = 2*B*h + H *B;
        let I_x = (H**3)*b/12 + 2*(((h**3)*B/12)+h*B*((H+h)**2)/4);
        let I_y = (b**3)*H/12 + 2*((B**3)*h)/12;
        let J = I_x + I_y;
        displayShapeOutput(Area, I_x, I_y, J);
    }
})
// Display Outputs
function displayShapeOutput(Area, Ix, Iy, J){
    
    let areaCell = document.querySelector("#areaValue");
    let areaUnitCell = document.querySelector("#areaUnit");
    let IxValue = document.querySelector("#IxValue");
    let IxUnit = document.querySelector("#IxUnit");
    let IyValue = document.querySelector("#IyValue");
    let IyUnit = document.querySelector("#IyUnit");
    let JValue = document.querySelector("#JValue");
    let JUnit = document.querySelector("#JUnit");
    if (shapeUnit.value == "meter"){
        areaUnit="m2";
        mIUnit = "m4"
    }
    else if (shapeUnit.value == "milimeter"){
        areaUnit = "mm2"
        mIUnit = "mm4"
    }
    areaCell.innerHTML = Area.toFixed(2);
    IxValue.innerHTML = Ix.toFixed(2);
    IyValue.innerHTML = Iy.toFixed(2);
    JValue.innerHTML = J.toFixed(2);
    
    areaUnitCell.innerHTML = areaUnit;
    IxUnit.innerHTML = mIUnit;
    IyUnit.innerHTML = mIUnit;
    JUnit.innerHTML = mIUnit;
}