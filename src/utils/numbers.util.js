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
 * @param {Number} pounds - The value of your height in centimeters, weight in kilos and age to be converted added and subtracted
 * @returns {Number} The value of your resting metabolic rate(RMR)
*/

export function restingMetabolicMan(kilos,heightCM,age){
    const RMRman = kilos * 13.4 + 88.4;
    const cmConversion = heightCM * 4.8;
    const ageConversion = age * 5.68;
    return RMRman + cmConversion - ageConversion;
  }
   