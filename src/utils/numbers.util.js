/**
 * A module that consists of a set of functions that convert measurements
 * @module 
 */

 /**
 * @function manOrWoman
 * @description Specifies weather the client is male or female
 * @param {String} gender - is the client male or female 
 * @returns {Boolean} The gender of the current client as boolean, true meanin man and false meaning woman
 */
export function manOrWoman(gender) {
    const person = gender;
    if(person === "M"){
        return true;
    }else if(person === "F"){
        return false;
    }
}

/**
 * @function inchesToCm
 * @description Converts inches to centimeters
 * @param {Number} inches - The value of inches to be converted
 * @returns {Number} The centimeter value of the converted inches
 */
export function inchesToCm(inches) {
    const cm = inches * 2.54;
    return cm.toFixed(2);
}

/**
 * @function poundsToKilos
 * @description Converts pounds to kilos
 * @param {Number} pounds - The value of pounds to be converted
 * @returns {Number} The kilo value of the converted pounds
*/
export function poundsToKilos(pounds){
    const kilos = pounds * 2.2;
    return kilos.toFixed(2); 
}

/**
 * @function restingMetabolicMan
 * @description Converts cm, kilo and age values into a numbers that result in your metabolic rate
 * @param {Number} heightCM - The value of your height in centimeters multiplied by 4.8
 * @param {Number} kilos - The value of your weight in kilos multiplied by 13.4 and added and to 88.4
 * @param {Number} age - Client's age
 * @returns {Number} Coverted cm plus converted kilos minus 5.68 times client's age = The value of a male resting metabolic rate(RMR)
*/
export function restingMetabolicMan(kilos,heightCM,age, gender){
    const RMRman = kilos * 13.4 + 88.4;
    const cmConversion = heightCM * 4.8;
    const ageConversion = age * 5.68;
    if(gender === true){
    return (RMRman + cmConversion) - ageConversion;
    }
}

/**
 * @function restingMetabolicWoman
 * @description Converts cm, kilo and age values into a numbers that result in your metabolic rate
 * @param {Number} heightCM - The value of your height in centimeters multiplied by 9.25
 * @param {Number} kilos - The value of your weight in kilos multiplied by 9.25 and added and to 447.6
 * @param {Number} age - Client's age
 * @returns {Number} Coverted cm plus converted kilos minus 4.33 times client's age = The value of a male resting metabolic rate(RMR)
*/
export function restingMetabolicWoman(kilos,heightCM,age, gender){
    const RMRman = kilos * 9.25 + 447.6;
    const cmConversion = heightCM * 3.1;
    const ageConversion = age * 4.33;
    if(gender === false){
    return (RMRman + cmConversion) - ageConversion;
    }
}



   