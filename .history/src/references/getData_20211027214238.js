import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const { menuList, toolBarSwitcher } = refs;

let markup = template(data);

menuList.insertAdjacentHTML('beforeend', markup);

toolBarSwitcher.addEventListener('change', fun)
