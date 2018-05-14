(function() {
  'use strict';

  angular
    .module('mynodejs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
