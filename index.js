/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const unitConversionSection = document.getElementById("unit-conversion-section")
const measurementInput = document.getElementById("measurement-input")
const errorMessage = document.getElementById("error-message")

convertBtn.addEventListener("click", function(){
    const value = Number(measurementInput.value)

    if(value >= 0){
        errorMessage.innerHTML = ""
        const length = conversion(value, 3.281)
        const volume = conversion(value, 0.264)
        const mass = conversion(value, 2.204)
        unitConversionSection.innerHTML = 
        `
            <div class="unit-converter-container" id="length-container">
                <h2>Length (Meter/Feet)</h2>
                <p>${value} meters = ${length.metricToImperical} feet | ${value} feet = ${length.impericalToMetric} meters</p>
            </div>
            <div class="unit-converter-container" id="volume-container">
                <h2>Volume (Liters/Gallons)</h2>
                <p>${value} liters = ${volume.metricToImperical} gallons | ${value} gallons = ${volume.impericalToMetric} liters</p>
            </div>
            <div class="unit-converter-container" id="mass-container">
                <h2>Mass (Kilograms/Pounds)</h2>
                <p>${value} kilos = ${mass.metricToImperical} pounds | ${value} pounds = ${mass.impericalToMetric} kilos</p>
            </div>
        `
    }

    else{
        errorMessage.innerHTML = `<p>Please enter a positive number.</p>`
    }
})

/* Function to convert units from metric to imperical or imperical to metric. */
function conversion(value, impericalPerMetric){
    let measurement = {
        metricToImperical: null,
        impericalToMetric: null
    }

    if(value || value===0){
        measurement.metricToImperical = (value*impericalPerMetric)
        measurement.impericalToMetric = value/impericalPerMetric
    }

    measurement.metricToImperical = measurement.metricToImperical.toFixed(3)
    measurement.impericalToMetric = measurement.impericalToMetric.toFixed(3)
    return measurement
}