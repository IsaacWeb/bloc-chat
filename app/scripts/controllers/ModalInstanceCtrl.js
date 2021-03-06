
(function() {
  function ModalInstanceCtrl($uibModalInstance) {
    this.submit = function() {
      this.room = {
        name: ''
      };
      $uibModalInstance.close(this.name);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
