// (function () {
//   'use strict';
//
//   angular.module('LunchCheck',[])
//   .controller('lunchCheckController',lunchCheckController);
//
//   lunchCheckController.$inject = ['$scope'];
//   function lunchCheckController($scope) {
//     $scope.textBox = "";
//
//     $scope.strSplitView = function () {
//       $scope.strSplit = $scope.textBox.split(",");
//       var array = $scope.strSplit;
//
//       if (array.length <= 3 & array[0]!="") {
//         $scope.message = "Enjoy!";
//       }
//       else if (array.length > 3) {
//         $scope.message = "Too much!"
//       }
//       else if (array.length <= 1) {
//         $scope.message = "Please enter data first";
//       }
//     };
//   }
// }())
!function(){"use strict";function t(t){t.textBox="",t.strSplitView=function(){t.strSplit=t.textBox.split(",");var e=t.strSplit;e.length<=3&""!=e[0]?t.message="Enjoy!":e.length>3?t.message="Too much!":e.length<=1&&(t.message="Please enter data first")}}angular.module("LunchCheck",[]).controller("lunchCheckController",t),t.$inject=["$scope"]}();
