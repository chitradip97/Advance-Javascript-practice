// Given an array of temperatures in Fahrenheit, use the map function to convert each temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.

const fahrenheitTemps = [32, 68, 95, 104];

let celsius=fahrenheitTemps.map((val)=>{
    return (val-32)*(5/9);
})
console.log(celsius);