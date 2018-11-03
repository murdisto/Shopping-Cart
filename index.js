/*eslint-env jquery*/
'use strict';
//////////////////////
const STORE = {
  //structuring STORE as an object now as we will need to do it
  //later anyway.
  ITEMS: [//add unique ID for each item in ITEMS?
    {name: 'apples', checked: false},
    {name: 'oranges', checked: false},
    {name: 'milk', checked: true},
    {name: 'bread', checked: false},
  ],

};
//////////////
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
