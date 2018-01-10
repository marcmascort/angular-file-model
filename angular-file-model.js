//
// angular-file-model
// ==================
//
// Directive that makes the inputs with type `file` to be
// available in the `$scope` and be assigned to a model.
//
(function () {
  'use strict';

  angular.module('file-model', [])

  .directive('fileModel', function () {
      return {
	require: 'ngModel',
        restrict: 'A',
        link: function($scope, element, attrs, ngModel) {
          var checkIsValid = function(){
            ngModel.$setValidity('validFile', element.val() !=='');
       	  };
        
          checkIsValid();

          element.bind('change', function () {
            $scope.$apply(function () {
                checkIsValid();
                ngModel.$setViewValue(attrs.multiple ? element[0].files : element[0].files[0]);
                ngModel.$render();
            });
          });
        }
      };
    }
  );

})();
