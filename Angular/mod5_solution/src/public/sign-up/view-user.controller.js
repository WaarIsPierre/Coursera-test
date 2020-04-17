(function () {
  "use strict";

  angular.module('public')
  .controller('ViewController', ViewController);

  ViewController.$inject = ['MenuService']
  function ViewController(MenuService) {
    var view = this;

    view.user = MenuService.regUser()
    console.log(view);
  }
})()
