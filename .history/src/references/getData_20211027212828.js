import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const { menuList } = refs;

let markup = template(data);

menuList.insertAdjacentHTML(,markup);
// console.log(data[0]);
console.log(markup);
