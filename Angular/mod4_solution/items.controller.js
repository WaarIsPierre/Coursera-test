(function () {
  'use strict'

  angular.module('MenuApp')
.controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'items','$stateParams'];
  function ItemsController(MenuDataService, items, $stateParams) {
    var itemsCntrl = this;
    itemsCntrl.items = items.data.menu_items;
    itemsCntrl.categoryName = items.data.category.name;

  }
})();
