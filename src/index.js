"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMI = BMI;
function BMI(weight, height) {
    if (weight <= 0)
        throw new Error("Weight must be greater than 0");
    if (height <= 0)
        throw new Error("Height must be greater than 0");
    return (weight / (height * height)).toFixed(2);
}
const weight = 80;
const height = 1.80;
console.log(`Your weight: ${weight} kg.\nYour height: ${height} m.\nYour BMI: ${BMI(weight, height)}`);
