import data from '../menu.json';
import template from '../templates/menuItem.handlebars';
import refs from '../references/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { menuList, toolBarSwitcher } = refs;

let markup = template(data);

menuList.insertAdjacentHTML('beforeend', markup);

toolBarSwitcher.addEventListener('change', e => {
  console.log(e.target.checked);

  e.target.checked ?  : localStorage.setItem('theme', 'dark');
});

function setPageTheme(theme)
{
    localStorage.setItem('theme', 'light')
    console.log(theme);
}
