import fruits from './fruits';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`i'd like one ${fruit}, plz`);
console.log(`here you go ${fruit}`);
console.log(`can i have one more?`);

let remaining = remove(fruit, fruits);

console.log(`sorry we are out, we have ${remaining.length}left`);