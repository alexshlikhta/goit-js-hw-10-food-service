import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { menuList, toolBarSwitcher, pageBody } = refs;

let markup = template(data);

menuList.insertAdjacentHTML('beforeend', markup);

toolBarSwitcher.addEventListener('change', e => {
  console.log(e.target.checked);
  e.target.checked ? setPageTheme(Theme.LIGHT, Theme.DARK) : setPageTheme(Theme.DARK, Theme.LIGHT);
});

function setPageTheme(addTheme, rmvTheme) {
  pageBody.classList.add(addTheme);
  pageBody.classList.remove(rmvTheme);
}
