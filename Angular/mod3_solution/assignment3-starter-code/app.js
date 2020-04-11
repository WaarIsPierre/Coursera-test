(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: 'A',
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

////////////////////////////////////////////////////////////////////////////////
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm="";

  menu.search = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise
    .then(function (result) {
        menu.found = result;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex,1);
  }

}
////////////////////////////////////////////////////////////////////////////////

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    // var searchTerm = "rice";
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function (result) {
      var foundItem =[];
      for(let i=0; i<result.data['menu_items'].length; i++) {
        if (result.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 && searchTerm.length > 0) {
          console.log(result.data['menu_items'][i]);
          foundItem.push(result.data['menu_items'][i])
        }
      }
      return foundItem;
    })

  };

  service.removeItem = function (itemIndex) {
    foundItem.splice(itemIndex, 1);
  };

}

})();
