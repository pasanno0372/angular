(function() {
  'use strict';

  angular
    .module('mynodejs')
    .controller('AboutController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$http,$interval) {
    var vm = this;
    vm.value ='';
    
    var requestproduct = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:8000/product/'
        }).then(function successCallback(response) {
            console.log('success');
            console.log(response);
            vm.value = response.data;
        }, function errorCallback(response) {
            console.log('fail');
        });
    };

    var click ='';
    vm.start = function () {
        click = $interval(requestproduct, 1000);
    };

    vm.stop = function () {
        $interval.cancel(click);
        vm.value ='';
    };
  }
})();
