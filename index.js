const menuItems = ['Home', 'About', 'Contact'];
const menu = createMenu(menuItems);
document.getElementById('menuContainer').innerHTML = menu;

function createMenu(menuItems) {
  let menuHTML = '<ul>';
  for (let i = 0; i < menuItems.length; i++) {
    menuHTML += '<li>' + menuItems[i] + '</li>';
  }
  menuHTML += '</ul>';
  return menuHTML;
}
