"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const assert = __importStar(require("assert"));
class human {
    constructor(w = 1, h = 1) {
        this.weight = 0;
        this.height = 0;
        this.bmiMessage = "";
        this.test = function (w, h, bmiMessage) {
            const result = (0, index_1.BMI)(w, h);
            assert.strictEqual(result, bmiMessage, `Expected: ${bmiMessage}\nResult: ${result}`);
            assert.throws(() => (0, index_1.BMI)(w, 0), /Height must be greater than 0/, "Height must be greater than 0 test failed");
            console.log(bmiMessage);
        };
        this.weight = w;
        this.height = h;
        if (this.height > 100) {
            this.height /= 100;
        }
        const bmi = (w / (this.height * this.height)).toFixed(2);
        this.bmiMessage = `Your weight: ${w} kg.\nYour height: ${this.height} m.\nYour BMI: ${bmi}`;
    }
}
let user01 = new human(-75, 170);
user01.test(user01.weight, user01.height * 100, user01.bmiMessage);
let user02 = new human(60, 170);
user02.test(user02.weight, user02.height * 100, user02.bmiMessage);
let user03 = new human(67, 185);
user03.test(user03.weight, user03.height * 100, user03.bmiMessage);
let user04 = new human(90, 165);
user04.test(user04.weight, user04.height * 100, user04.bmiMessage);
console.log('All tests passed');
