(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'ApiPath']
  function SignUpController(MenuService, ApiPath) {
    var reg = this;
    var temp;

    reg.submit = function () {
      reg.user.basePath = ApiPath;

      temp = MenuService.dishCheck(reg.user.favorite_dish)
        .then(function (response) {
          var temp = response;
          reg.user.item = temp;

          if (temp != undefined ) {
            reg.completed = true;
            MenuService.registerUser(reg.user)
          }
          else {
            reg.completed = false;
          }

          return response
        });
    }

  }
})()
