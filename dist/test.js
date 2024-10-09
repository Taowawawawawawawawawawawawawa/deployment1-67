"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var assert = require("assert");
var weight = 82;
var height = 1.80;
var bmi = (weight / (height * height)).toFixed(2);
assert.strictEqual((0, index_1.BMI)(weight, height), bmi, "Expected : ".concat(bmi, "\nResult : ").concat((0, index_1.BMI)(weight, height)));
