import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const { menuList, toolBarSwitcher, pageBody } = refs;

let markup = template(data);

menuList.insertAdjacentHTML('beforeend', markup);