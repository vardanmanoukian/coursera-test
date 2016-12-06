(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchList = "";

    $scope.lunchCheck = function () {
      var checkingString = $scope.lunchList;
      if (checkingString.split([',']).length > 3) {
        $scope.message = "Too Much";
      }
      if (checkingString.split([',']).length <= 3) {
        $scope.message = "Enjoy!";
      }
      if (checkingString.length == "") {
        $scope.message = "Please enter data first"
      }
    };

  };

})();
