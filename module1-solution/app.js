(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.messageColor = "";
    $scope.messageBorder = "";

    $scope.lunchCheck = function () {
      var checkingString = $scope.lunchList;
      if (checkingString.split([',']).length > 3) {
        $scope.message = "Too Much";
        $scope.messageColor = "green";
        $scope.messageBorder = "2px solid green";
      }
      if (checkingString.split([',']).length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageColor = "green";
        $scope.messageBorder = "2px solid green";

      }
      if (checkingString.length == "") {
        $scope.message = "Please enter data first"
        $scope.messageColor = "red";
        $scope.messageBorder = "2px solid red";
      }
    };

  };

})();
