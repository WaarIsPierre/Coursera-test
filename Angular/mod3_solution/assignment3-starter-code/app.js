(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

////////////////////////////////////////////////////////////////////////////////
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var found = this;
  found.searchTerm=""

  found.search = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise
    .then(function (result) {
      var foundItem = result.data.menu_items

      for (var i = 0; i < foundItem.length; i++) {
        var item = foundItem[i];
        var desc = item['description'];
        var searchTerm = found.searchTerm.toLowerCase();
        console.log(searchTerm);
        if (desc.toLowerCase().indexOf(searchTerm) !== -1) {
          console.log(desc);
        } else {
          foundItem.splice(i,1);
        }
      }

      console.log(foundItem.length);
      found.menu = foundItem;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  found.removeItem = function(itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  }

}
////////////////////////////////////////////////////////////////////////////////

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      // params: {
      //   category: searchTerm
      // }

    });

  };

  service.removeItem = function (itemIndex) {
    foundItem.splice(itemIndex, 1);
  };

}

})();
