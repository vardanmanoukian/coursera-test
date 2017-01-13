(function () {
'use strict';

angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var narrow = this;

  narrow.searchTerm = '';
  
  var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

  promise.then(function (response) {
    narrow.found = response.data;
    console.log(narrow.found);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  narrow.removeItem = function (itemIndex) {
    narrow.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
      var response = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
        params: {
           description: searchTerm
        }
      });

      return response;
  }

}

function FoundItems() {
  var ddo = {
    scope: {
      foundItems: '<',
      onRemove: '&'
    }
  }
}


}) ();
