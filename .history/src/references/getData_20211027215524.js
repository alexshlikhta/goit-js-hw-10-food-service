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
  e.target.checked ? setPageTheme(e, Theme.DARK, Theme.LIGHT) : setPageTheme(e, Theme.LIGHT);
});

function setPageTheme(e, addTheme, rmvTheme) {
    if (e.target.checked) {
      pageBody.classList.add(addTheme)
      pageBody.classList.add(theme)
    } else {
      pageBody.classList.add(theme)
  }
}
