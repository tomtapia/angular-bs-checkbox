'use strict';

describe('Directive: bsCheckbox', function () {

  // load the directive's module
  beforeEach(function() {
    module('bscheckbox');
  });

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    element = angular.element('<input type="checkbox" bs-checkbox>');
    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('should have input element type checkbox', function() {
    expect(element).toBeDefined();
  });

  it('should be checked attribute', function () {
    expect(element.prop('checked')).toBe(false);
  });
});
