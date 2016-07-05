// ROUTES
var homePageUrl = '{{ "home" | asset_url | json }}';
homePageUrl = 'https:' + homePageUrl.replace(/"/g, '');

var aboutPageUrl = '{{ "about" | asset_url | json }}';
aboutPageUrl = 'https:' + aboutPageUrl.replace(/"/g, '');


rmcApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
      controller: 'homeController',
      templateUrl: homePageUrl
    })

    .when('/about', {
      controller: 'aboutController',
      templateUrl: aboutPageUrl
    })

});
