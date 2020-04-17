(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config)
    .then(function (response) {
      console.log(response);
      return response.data;
    });
  };

  service.dishCheck = function (dish) {
  var config = {};

  if (dish) {
    config.params = {'short_name': dish};
  }

  return $http.get(ApiPath+'/menu_items.json',config)
  .then(function (response) {
    // console.log(response.data.menu_items[]);
    for (var i = 0; i < response.data.menu_items.length; i++) {
      if (response.data.menu_items[i].short_name === dish) {
        var my_dish = response.data.menu_items[i];
      };
    }
    return my_dish
  })
  }

  service.registerUser = function (userData) {
    service.user = userData;
    console.log(service.user);
    return true;
  }

  service.regUser = function (user) {
    return service.user
  };
}

})();
