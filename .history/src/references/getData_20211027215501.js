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
  e.target.checked ? setPageTheme(e, Theme.DARK) : setPageTheme(e, Theme.LIGHT);
});

function setPageTheme(e, theme) {
    if (e.target.checked) {
      pageBody.classList.add(theme)
      pageBody.classList.add(theme)
    } else {
      pageBody.classList.add(theme)
  }
}
