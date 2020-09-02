import{Students} from "./Students.js";
import{Teachers} from "./Teachers.js";
import{Classes} from "./Classes.js";


let st1 = new Students('nguyen van a', 'male', 1, '2010-2013', 10);
let st2 = new Students('nguyen van b', 'male', 2, '2010-2013', 5);
let st3 = new Students('nguyen thi c', 'female', 3, '2010-2013', 8);
let st4 = new Students('nguyen van a', 'male', 4, '2010-2013', 6);

let tc1 = new Teachers('tran e', 'male', 'professor');


let class1 = new Classes(11111, 'philosophy',tc1 );

class1.addStudent(st1);
class1.addStudent(st2);
class1.addStudent(st3);
class1.addStudent(st4);

console.log(class1);


console.log(class1.findStudent('nguyen van a'));
console.log(class1.findScore(6));
