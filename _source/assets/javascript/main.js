// MODULE
var rmcApp = angular.module('rmcApp', ['ngRoute', 'ngResource']);

angular.module('rmcApp', []).config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

angular.module('rmcApp', []).config(function ($sceProvider) {
  $sceProvider.enabled(false);
});
