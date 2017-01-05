(function () {
  'use script';

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;

      toBuy.toBuyItems = ShoppingListCheckOffService.toBuy();

      toBuy.bought = function (item, itemIndex) {
        ShoppingListCheckOffService.bought(item, itemIndex);
      }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;

      alreadyBought.alreadyBoughtItems = ShoppingListCheckOffService.alreadyBought();

    }

    function ShoppingListCheckOffService () {
      var service = this;

      var toBuyItems = [
        {
          name: "bread",
          quantity: 10
        },
        {
          name: "cheese",
          quantity: 2
        },
        {
          name: "egg",
          quantity: 5
        },
        {
          name: "coke",
          quantity: 2
        },
        {
          name: "vodka",
          quantity: 1
        }
    ];

    var alreadyBoughtItems = [];

    service.toBuy = function () {
      return toBuyItems;
    };

    service.bought = function (item, itemIndex) {

      alreadyBoughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };

    service.alreadyBought = function () {
      return alreadyBoughtItems;
    };

    }


})();
