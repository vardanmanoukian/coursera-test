(function () {
'use strict';

angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.searchTerm = "";

  narrow.findItems = function(searchTerm) {
    var foundItems = [];

    var promise = MenuSearchService.getMatchedMenuItems();

      promise.then(function (response) {
        if (searchTerm != "") {
        searchTerm = searchTerm.toLowerCase();
        for (var i = 0; i < response.data.menu_items.length; i++) {
          if (response.data.menu_items[i].description.indexOf(searchTerm) !== -1) {
            foundItems.push(response.data.menu_items[i]);
          }
        }
      }
      narrow.found = foundItems;
      })
      .catch(function (error) {
        console.log(error);
      })


  };


  narrow.removeItem = function (itemIndex) {
    console.log(itemIndex);
    narrow.found.splice(itemIndex, 1);
  };


}

MenuSearchService.$inject = ['$http'];
function MenuSearchService ($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      });

      return response;
  }

}

function FoundItems() {
  var ddo = {
    templateUrl: 'menuItems.html',
    scope: {
      found: '<',
      search: '<',
      onRemove: '&'
    }
  }
  return ddo;
}


}) ();
