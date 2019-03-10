import _ from 'lodash';
let name = require ('./name');
require("../styles/main.scss");

import {sum, difference} from './operations.js';
document.write("Sum of 2 and 3 is "+sum(2, 3));
document.write("Difference of 5 and 5 is "+difference(5, 2));

function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', name.name], ' ');
    return element;
}

document.body.appendChild(component());