/**
 * A module that consists of a set of functions that convert measurements
 * @module 
 */

 /**
 * @function restingMetabolic
 * @description Specifies weather the client is male or female
 * @param {String} gender - is the client male or female 
 * @returns {Boolean} The gender of the current client as boolean, true meanin man and false meaning woman
 */
export function restingMetabolic(trainee) {
    if(trainee.gender === "M"){
        return restingMetabolicMan(trainee).toFixed(2);
    }else if(trainee.gender === "F"){
        return restingMetabolicWoman(trainee).toFixed(2);
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
    const kilos = pounds / 2.2;
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
export function restingMetabolicMan(trainee){
    const RMRman = 88.4 + poundsToKilos(trainee.weight) * 13.4;
    const cmConversion = inchesToCm(trainee.height) * 4.8;
    const ageConversion = trainee.age * 5.68;
    return RMRman + cmConversion - ageConversion;
}

/**
 * @function restingMetabolicWoman
 * @description Converts cm, kilo and age values into a numbers that result in your metabolic rate
 * @param {Number} heightCM - The value of your height in centimeters multiplied by 9.25
 * @param {Number} kilos - The value of your weight in kilos multiplied by 9.25 and added and to 447.6
 * @param {Number} age - Client's age
 * @returns {Number} Coverted cm plus converted kilos minus 4.33 times client's age = The value of a male resting metabolic rate(RMR)
*/
export function restingMetabolicWoman(trainee){
    const RMRwoman = 447.6 + poundsToKilos(trainee.weight) * 9.25;
    const cmConversion = inchesToCm(trainee.height) * 3.1;
    const ageConversion = trainee.age * 4.33;
    return RMRwoman + cmConversion - ageConversion;
}

/**
 * @function workoutPercentEffective
 * @description Takes your goal and actual resullts to caculate the trainees percent effective
 * @param {Number} Goal - Your client's goal results in terms of repitition, time and or strength
 * @param {Number} Actual - The client's actual results in terms of repitition, time and or strength 
 * @returns {Number} Divides the clients actual results by the the goals giving me the clients percent effective relative to the goal
*/
export function workoutPercentEffective(trainee){
    const goal = trainee.goal.max;
    const actualResults = trainee.goal.best;
    const results = actualResults / goal;
    return results.toFixed(2) + '%';
}


   