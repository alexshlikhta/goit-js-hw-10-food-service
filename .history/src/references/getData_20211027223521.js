import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { menuList, toolBarSwitcher, pageBody } = refs;

function createMarkUp(data) {
  let markup = template(data);

  menuList.insertAdjacentHTML('beforeend', markup);
}
createMarkUp(data);

function setPageTheme(addTheme, rmvTheme) {
  pageBody.classList.add(addTheme);
  pageBody.classList.remove(rmvTheme);
  localStorage.setItem('theme', addTheme);
  console.log(localStorage);
}

function checkTheme() {
  toolBarSwitcher.checked
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
}
checkTheme();

toolBarSwitcher.addEventListener('change', e => {
  e.target.checked ? setPageTheme(Theme.DARK, Theme.LIGHT) : setPageTheme(Theme.LIGHT, Theme.DARK);
});

console.log(toolBarSwitcher.checked);
