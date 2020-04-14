(function () {
  'use strict'

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http','ApiBasePath','$q'];
  function MenuDataService($http, ApiBasePath, $q) {
    var service = this;

    service.getAllCategories = function () {
      var deferred = $q.defer();

      console.log('Running');
      return $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json"),
          })
      .then(function (result) {
        deferred.resolve(result)
        return deferred.promise
      })

    };

    service.getItemsForCategory = function (categoryShortName) {
    console.log(categoryShortName);

      var deferred = $q.defer();
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
      })
      .then(function (result) {
        deferred.resolve(result)
        return deferred.promise
      })
    };
  }
})();
