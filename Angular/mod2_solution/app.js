(function () {
  'use strict';

  angular.module('ShopApp', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);


  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    var list = this;

    list.toBuy = ShoppingListService.makeList();

    list.move2Bought = function (itemIndex) {
        ShoppingListService.move2Bought(itemIndex);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService) {
    var list = this;

      list.bought = ShoppingListService.addBought();
  };

  function ShoppingListService () {
    var service = this;
    var toBuy = [];
    var bought = [];
    var msg = [];

    service.makeList = function () {
        toBuy = [
            {
              name: "Guatamala Coffee",
              quantity: "2 bags"
            },

            {
              name: "Ethiopia Coffee",
              quantity: "1 bag"
            },
            {
              name: "House Blend",
              quantity: "3 bags"
            },
            {
              name: "Grinder",
              quantity: "1 new"
            },
            {
              name: "La Marzocco Espresso Machine",
              quantity: "1 new"
            }];
            return toBuy;
            service.empMsg = "Nothing Bought Yet";
    };

    service.move2Bought = function (itemIndex) {
        bought.push(toBuy[itemIndex]);
        toBuy.splice(itemIndex, 1);
    };

    service.addBought = function () {
        return bought;
    };
  };

})();
