(function () {
  'use strict'

  angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'category'];
  function CategoriesController(MenuDataService, category) {
    var categoriesCntrl = this;
    
    console.log('Controller Works');
    categoriesCntrl.categories = category;

  }
})();
