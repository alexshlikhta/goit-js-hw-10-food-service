import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const { menuList } = refs;

let markup = template(data);

menuList.insertAdjacentHTML('beforeend', markup);
console.log(markup);
