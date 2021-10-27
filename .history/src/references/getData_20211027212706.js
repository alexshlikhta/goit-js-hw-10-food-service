import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from ''

let markup = template(data);

// console.log(data[0]);
console.log(markup);
