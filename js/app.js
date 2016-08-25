(function() {
  //include ui.router into what angular loads for the app
  angular.module('pizza', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("index.html");

      // states Menu, coupons, suds, tour, donation, job, about
      $stateProvider
        .state('menu', {
          url: "/menu",
          templateUrl: "views/menu.html"
        })
        .state('coupons', {
          url: "/coupons",
          templateUrl: "views/coupons.html"
        })
        .state('suds', {
          url: "/suds",
          templateUrl: "views/suds.html"
        })
        .state('tour', {
          url: "/tour",
          templateUrl: "views/tour.html"
        })
        .state('donation', {
          url: "/donation",
          templateUrl: "views/donation.html"
        })
        .state('job', {
          url: '/job',
          templateUrl: "views/template.html"
        })
        .state('about', {
          url: "/about",
          templateUrl: "views/about.html"
        });
    });
});
