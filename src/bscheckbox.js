(function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name bscheckbox.directive:bsCheckbox
   * @description
   * # bsCheckbox
   */
  angular.module('bscheckbox', [])
    .directive('bsCheckbox', ['$timeout', function ($timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var config = attrs.bsCheckbox !== '' ? angular.fromJson(attrs.bsCheckbox) : {};
          $timeout(function () {
            element.checkboxpicker(config);
          });
        }
      };
    }]);
})(angular);
