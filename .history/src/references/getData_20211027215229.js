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
  e.target.checked ? setPageTheme(Theme.DARK) : setPageTheme(Theme.LIGHT);
});

function setPageTheme(cheched, theme) {
    console.log(theme);
    if ( theme === '' ) {
        
    }
  // e.target.checked ? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
}
