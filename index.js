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
  function generateShoppingListItemsString(shoppingList) {
    console.log('Generating ALL shopping list elements');
    function generateItemElement(item, itemIndex) {
      console.log('Generating shopping list element');
      return `
        <li class="js-item-index-element" data-item-index="${itemIndex}">
          <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle js-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete js-item-delete">
                <span class="button-label">delete</span>
            </button>
          </div>
        </li>`;
    }
    const items = shoppingList.map((item, index) => generateItemElement(item, index));
    //console.log(items.join(''));
    return items; //seems that this works without making the array a string
  }
  const shoppingListItemsString = generateShoppingListItemsString(STORE.ITEMS);
  $('.js-shopping-list').html(shoppingListItemsString);
}
function handleNewItemSubmit() {
  console.log('handleNewItemSubmit() fired');

  function addItemToList(itemName) {
    console.log(`Adding ${itemName} to shopping list.`);
    STORE.ITEMS.push({name: itemName, checked: false});
  }

  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();
    const newItemSubmission = $('.js-shopping-list-entry').val();
    console.log(`User submitted '${newItemSubmission}'`);
    $('.js-shopping-list-entry').val('');
    addItemToList(newItemSubmission); //where can I see the new array?
    renderShoppingList();
  });
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
