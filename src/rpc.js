const {
  AddItemRequest,
  CreateShoppingListRequest,
  DeleteShoppingListRequest,
  Item,
  ListItemsRequest,
  ListShoppingListsRequest,
  RemoveItemRequest,
  SetItemCheckedRequest,
  ShoppingList
} = require("./generated/shopping_list_pb.js");

/**
 * Call RPC to add an item to a shopping list.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {ShoppingList} shoppingList The shopping list.
 * @param {string} name The name of the item.
 * @param {string} description The description of the item.
 */
function addItem(client, shoppingList, name, description) {
  const item = new Item();
  item.setName(name);
  item.setDescription(description);

  const request = new AddItemRequest();
  request.setShoppingListId(shoppingList.getId());
  request.setItem(item);

  return client.addItem(request, {});
}

/**
 * Call RPC to create a shopping list.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {string} name The name of the shopping list.
 * @param {string} description The description of the shopping list.
 */
function createShoppingList(client, name, description) {
  const shoppingList = new ShoppingList();
  shoppingList.setName(name);
  shoppingList.setDescription(description);

  const request = new CreateShoppingListRequest();
  request.setShoppingList(shoppingList);

  return client.createShoppingList(request, {});
}

/**
 * Call RPC to delete a shopping list.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {ShoppingList} shoppingList The shopping list to delete.
 */
function deleteShoppingList(client, shoppingList) {
  const request = new DeleteShoppingListRequest();
  request.setShoppingListId(shoppingList.getId());

  return client.deleteShoppingList(request, {});
}

/**
 * Call RPC to list items in a shopping list.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {ShoppingList} shoppingList The shopping list.
 * @param {string} filter Match only items that pass the filter.
 */
function listItems(client, shoppingList, filter) {
  const request = new ListItemsRequest();
  request.setShoppingListId(shoppingList.getId());
  request.setFilter(filter);

  return client.listItems(request, {});
}

/**
 * Call RPC to list shopping lists.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {string} filter Match only shopping lists that pass the filter.
 */
function listShoppingLists(client, filter) {
  const request = new ListShoppingListsRequest();
  request.setFilter(filter);

  return client.listShoppingLists(request, {});
}

/**
 * Call RPC to remove an item from a shopping list.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {ShoppingList} shoppingList The shopping list.
 * @param {Item} item The item to remove.
 */
function removeItem(client, shoppingList, item) {
  const request = new RemoveItemRequest();
  request.setShoppingListId(shoppingList.getId());
  request.setItemId(item.getId());

  return client.removeItem(request, {});
}

/**
 * Call RPC to set whether an item is checked.
 * @param {ShoppingListServicePromiseClient} client The shopping list service client.
 * @param {ShoppingList} shoppingList The shopping list.
 * @param {Item} item The item.
 * @param {boolean} checked Whether the item is checked.
 */
function setItemChecked(client, shoppingList, item, checked) {
  const request = new SetItemCheckedRequest();
  request.setShoppingListId(shoppingList.getId());
  request.setItemId(item.getId());
  request.setChecked(checked);

  return client.setItemChecked(request, {});
}

export {
  addItem,
  createShoppingList,
  deleteShoppingList,
  listItems,
  listShoppingLists,
  removeItem,
  setItemChecked
};
