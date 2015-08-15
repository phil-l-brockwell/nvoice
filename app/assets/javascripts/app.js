angular.module('nVoice', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'templates'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'welcome/_welcome.html',
      controller: 'MainCtrl'
    })

    .state('preview', {
      url: '/preview',
      templateUrl: 'preview/_preview.html',
      controller: 'MainCtrl'
    })

  $urlRouterProvider.otherwise('welcome');
}])

.controller('MainCtrl', ['$http', '$scope', '$location', '$state', '$modal', function($http, $scope, $location, $state, $modal) {

  $scope.date = Date.now();
  $scope.id = Math.floor((Math.random() * 1000) + 1);

  $scope.showPreview = function() {
    $state.go('preview');
  };

  $scope.showWelcome = function() {
    $state.go('welcome');
  };

  $scope.reset = function() {
    $scope.cName = '';
    $scope.cEmail = '';
    $scope.cAddress = '';
    $scope.cPostcode = '';
    $scope.desc = '';
    $scope.price = '';
    $scope.bName = '';
  };

  $scope.sendInvoice = function() {
    var invoice = { cName: $scope.cName, cEmail: $scope.cEmail, cAddress: $scope.cAddress, cPostcode: $scope.cPostcode, desc: $scope.desc, price: $scope.price, bName: $scope.bName };
    var modalInstance = $modal.open({
      templateUrl: 'modal/_confirm.html',
      size: 'sm',
      controller: 'ModalCtrl'
    });

    modalInstance.result.then(function() {
      console.log(invoice);
      $scope.reset();
      $http.post('/invoices', invoice).success(function(data) {
        console.log(data)
      });
    });
  };
}])
