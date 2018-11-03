/*eslint-env jquery*/
'use strict';
//////////////////////
function renderShoppingList() {
  console.log('renderShoppingList() fired');
}
function handleNewItemSubmit() {
  console.log('handleNewItemSubmit() fired');
}
function handleItemCheckClick() {
  console.log('handleItemCheckClicked() fired');
}
function handleDeleteItemClick() {
  console.log('handleDeleteItemClick() fired');
}


function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClick();
  handleDeleteItemClick();
}
$(handleShoppingList);
