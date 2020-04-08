(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('lunchCheckController',lunchCheckController);

  lunchCheckController.$inject = ['$scope'];
  function lunchCheckController($scope) {
    $scope.textBox = "";

    $scope.strSplitView = function () {
      $scope.strSplit = $scope.textBox.split(",");
      var array = $scope.strSplit;

      if (array.length <= 3 & array[0]!="") {
        $scope.message = "Enjoy!";
      }
      else if (array.length > 3) {
        $scope.message = "Too much!"
      }
      else if (array.length <= 1) {
        $scope.message = "Please enter data first";
      }
    };
  }
}())
