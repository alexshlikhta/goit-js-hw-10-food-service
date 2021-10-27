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
  e.target.checked
    ? setPageTheme(e.target.checked, Theme.LIGHT, Theme.LIGHT)
    : setPageTheme(e.target.checked, Theme.DARK, Theme.LIGHT);
});

function setPageTheme(isChecked, addTheme, rmvTheme) {
  if (isChecked) {
    pageBody.classList.add(rmvTheme);
    pageBody.classList.remove(addTheme);
  } else {
    pageBody.classList.add(addTheme);
    pageBody.classList.remove(rmvTheme);
  }
}
