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
    ? setPageTheme(e.target.checked, Theme.DARK, Theme.LIGHT)
    : setPageTheme(e.target.checked, Theme.LIGHT, Theme.DARK);
});

function setPageTheme(isChecked, addTheme, rmvTheme) {
  if (e.target.checked) {
    pageBody.classList.remove(rmvTheme);
    pageBody.classList.add(addTheme);
  } else {
    pageBody.classList.add(rmvTheme);
    pageBody.classList.remove(addTheme);
  }
}
