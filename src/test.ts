import { BMI } from './index';
import * as assert from 'assert';

const weight = 80;
const height = 181;
const bmi = (weight / (height * height)).toFixed(2);

assert.strictEqual(BMI(weight, height), bmi, `Expected : ${bmi}\nResult : ${BMI(weight, height)}`);

assert.throws(() => BMI(weight, 0), /Height must be greater than 0/, "Height must be greater than 0 test failed");

console.log('All tests passed!');