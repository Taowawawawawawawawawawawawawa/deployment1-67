import { BMI } from './index';
import * as assert from 'assert';

class human {
    weight: number = 0;
    height: number = 0;
    bmiMessage: string = "";
    constructor(w: number = 1, h: number = 1) {
        this.weight = w;
        this.height = h;
        if (this.height > 100) {
            this.height /= 100; 
        }
        const bmi = (w / (this.height * this.height)).toFixed(2);
        this.bmiMessage = `Your weight: ${w} kg.\nYour height: ${this.height} m.\nYour BMI: ${bmi}`;
    }

    test = function(w: number, h: number, bmiMessage: string) {
        const result = BMI(w, h);
        assert.strictEqual(result, bmiMessage, `Expected: ${bmiMessage}\nResult: ${result}`);
        assert.throws(() => BMI(w, 0), /Height must be greater than 0/, "Height must be greater than 0 test failed");
        console.log(bmiMessage);
    }
}


let user01 = new human(75, 170);
user01.test(user01.weight, user01.height * 100, user01.bmiMessage); 

let user02 = new human(60, 170);
user02.test(user02.weight, user02.height * 100, user02.bmiMessage);

let user03 = new human(67, 185);
user03.test(user03.weight, user03.height * 100, user03.bmiMessage);

let user04 = new human(90, 165);
user04.test(user04.weight, user04.height * 100, user04.bmiMessage);

console.log('All tests passed');
