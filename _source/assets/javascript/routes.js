angular.module('rmcApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeController',
        templateUrl: "{{ 'home.liquid' | asset_url }}"
      })
      .when('/about', {
        controller: 'aboutController',
        templateUrl: "{{ 'about.liquid' | asset_url }}"
      })
      .otherwise({
        redirectTo: '/'
    });
});

angular.module('MyApp', [])

.controller('aboutController', [function() {
    angular.element(document).ready(function () {
      console.log('hello!');
    });
}]);

angular.module('rmcApp')
  .controller('homeController', function ($scope) {
    $scope.hi = 'Hola!'
});
