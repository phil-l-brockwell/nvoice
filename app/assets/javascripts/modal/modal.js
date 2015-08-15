angular.module('nVoice')

.controller('ModalCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

  $scope.cancel = function () {
    $modalInstance.dismiss('NO');
  };

  $scope.ok = function() {
    $modalInstance.close();
  };
}]);