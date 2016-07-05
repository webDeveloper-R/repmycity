var rmcApp = angular.module('rmcApp', ['ngRoute', 'ngResource'])
  .config(function($sceDelegateProvider){
    // Whitelist shopify cdn files
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://cdn.shopify.com/**',
      'http://cdn.shopify.com/**'
    ]);
  })
  .config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  });
