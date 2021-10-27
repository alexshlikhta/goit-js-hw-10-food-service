import data from '../menu.json';
import template from '../templates/menuItem.handlebars';

let markup = template(data);

data.map(el => console.log(el[]));
// console.log(markup);
