// define an IIFE to protect global namespace
(function ordersControllerIIFE(data){

  // declare and define a Orders controller 
  // Notice it takes a $routeParams
  var OrdersController = function($scope, $routeParams){
    // :customerId in this path "/orders/:customerId"
    var customerId = $routeParams.customerId;
    $scope.orders = null;

    // private function, not available outside of IIFE
    function init(){
      // Search for the customer by id
      for(var i=0, len=$scope.customers.length; i < len; i++){
        if($scope.customers[i].id == parseInt(customerId)){
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }
    $scope.customers= data;

    init();
  };

  // Prevent the minifier from breaking dependency injection.
  OrdersController.$inject = ['$scope', '$routeParams'];

  // The Controller is part of the module.
  angular.module('customersApp').controller('ordersController', OrdersController);

})(customerData);