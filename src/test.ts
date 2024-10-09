import { BMI } from './index';
import * as assert from 'assert';

class human{
    weight:number=0;
    height:number=0;
    bmi:string="";
    constructor(w:number=1,h:number=1){
        this.weight=w;
        this.height=h;
        if(this.height>100){
            this.bmi=(w / ((h/100) * (h/100))).toFixed(2);
        }else{
            this.bmi=(w / (h * h)).toFixed(2);
        }
        
    }

    test = function(w:number,h:number,bmi:string){
        assert.strictEqual(BMI(w, h), bmi, `Expected : ${bmi}\nResult : ${BMI(w, h)}`);
        assert.throws(() => BMI(w, 0), /Height must be greater than 0/, "Height must be greater than 0 test failed");
        console.log('tests passed');
    }
}

let user01 = new human(75,170);
user01.test(user01.weight,user01.weight,user01.bmi);

let user02 = new human(60,170);
user02.test(user02.weight,user02.weight,user02.bmi);

let user03 = new human(67,185);
user03.test(user03.weight,user03.weight,user03.bmi);

let user04 = new human(90,165);
user04.test(user04.weight,user04.weight,user04.bmi);

console.log('All tests passed');