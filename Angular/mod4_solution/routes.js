(function () {
  'use strict'

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url:'/',
      templateUrl: 'templates/home.template.html'
    })

    .state('categories',{
      url: '/categories',
      templateUrl: 'templates/main-categories.template.html',
      controller: 'CategoriesController as categoriesCntrl',
      resolve: {
        category: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
          .then(function (result) {

            var categories = [];
            for (var i in result.data) {
              var  name = result.data[i];
              categories.push(name)
            }
            return categories
          })

        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'templates/main-items.template.html',
      controller: 'ItemsController as itemsCntrl',
      params: {
        categoryShortName: null,
        categoryName: null,
      },
      resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
          .then(function (result) {
            var items = [];
            for (var i in result.data.menu_items) {
              var  name = result.data.menu_items[i];
              items.push(name)
            };
            console.log(items);
            return result
          });
        }]
      }
    })
  };

})();
