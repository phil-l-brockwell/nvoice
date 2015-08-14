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

.controller('MainCtrl', ['$scope', '$location', '$state', '$modal', function($scope, $location, $state, $modal) {

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
      templateUrl: 'confirm/_confirm.html',
      size: 'sm',
      controller: 'ModalCtrl'
    });

    modalInstance.result.then(function() {
      console.log(invoice);
      $scope.reset();
    });
  };
}])

.controller('ModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

  $scope.cancel = function () {
    $modalInstance.dismiss('NO');
  };

  $scope.ok = function() {
    $modalInstance.close();
  };
}]);
