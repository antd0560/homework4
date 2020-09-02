import {Person} from "./Person.js"
class Students extends Person {
    code;
    year;
    score;
    constructor(name, gender, code, year, score) {
        super(name, gender);
        this.code = code;
        this.year = year;
        this.score = score;
    }
}

export{Students};