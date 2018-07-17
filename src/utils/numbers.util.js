/**
 * A module that consists of a set of functions that convert measurements
 * @module 
 */

/**
 * @function inchesToCm
 * @description Converts inches to centimeters
 * @param {Number} inches - The value of inches to be converted
 * @returns {Number} The centimeter value of the converted inches
 */
export function inchesToCm(inches) {
    const cm = inches * 2.54;
    return cm;
}

/**
 * @function poundsToKilos
 * @description Converts pounds to kilos
 * @param {Number} pounds - The value of pounds to be converted
 * @returns {Number} The kilo value of the converted pounds
*/
export function poundsToKilos(pounds){
    const kilos = pounds * 2.2;
    return kilos; 
}

/**
 * @function restingMetabolicMan
 * @description Converts cm, kilo and age values into a numbers that result in your metabolic rate
 * @param {Number} heightCM - The value of your height in centimeters multiplied by 4.8
 * @param {Number} kilos - The value of your weight in kilos multiplied by 13.4 and added and to 88.4
 * @param {Number} age - Client's age
 * @returns {Number} Coverted cm plus converted kilos minus 5.68 times client's age = The value of a male resting metabolic rate(RMR)
*/
export function restingMetabolicMan(kilos,heightCM,age){
    const RMRman = kilos * 13.4 + 88.4;
    const cmConversion = heightCM * 4.8;
    const ageConversion = age * 5.68;
    return RMRman + cmConversion - ageConversion;
}


   