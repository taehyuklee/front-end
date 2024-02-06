import number1 from './a-1.js'
import number2 from './b-1.js'

var number = number1 + number2;
console.log('a.js > number:', number);

//위와 같은 소스를 내보낼때는 export를 이용해서 내보낼수 있다.

export default number;