angular-file-model
==================

Simple Angular.js directive that allows input element's of type `file` to be 
handled in models inside a controller's scope.

Usage
-----

Install with bower:

    bower install angular-file-model --save

Add to your HTML files:

    <script src='/bower_components/angular-file-model/angular-file-model.js'></script>

Now, inject to your application:

    angular.module('myApp', ['angular-file-model']);

Ready to use in your controllers!:

`file.html`:

    <input type='file' file-upload='fileModel'>
    <button type='button' ng-click='upload()'>Upload</button>

`controller.js:`

    var DemoCtrl = [
      '$scope', 
      function ($scope) {
        $scope.upload = function () {
          $scope.fileModel // This is where the file is linked to.
        };
      }
    ]

Author
------
© 2014, Jose Luis Rivas `<me@ghostbar.co>`. 

License
-------
The files are licensed under the MIT terms.