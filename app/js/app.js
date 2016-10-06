(function() {
  //include ui.router into what angular loads for the app
  angular.module('pizza', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider.otherwise("/");
      $locationProvider.html5Mode(true); //

      // states Menu, coupons, suds, tour, donation, job, about
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "static/views/home.html",
          controller: function($scope){

          }
        })
        .state('menu', {
          url: "/menu",
          templateUrl: "static/views/menu.html",
          controller: function($scope){

          }
        })
        .state('coupons', {
          url: "/coupons",
          templateUrl: "static/views/coupons.html",
          controller: function($scope){

          }
        })
        .state('suds', {
          url: "/suds",
          templateUrl: "static/views/suds.html",
          controller: function($scope){

          }
        })
        .state('tour', {
          url: "/tour",
          templateUrl: "static/views/tour.html",
          controller: function($scope){

          }
        })
        .state('tour2', {
          url: "/tour2",
          templateUrl: "static/views/tour2.html",
          controller: function($scope){

          }
        })
        .state('donation', {
          url: "/donation",
          templateUrl: "static/views/donation.html",
          controller: function($scope){

          }
        })
        .state('job', {
          url: '/job',
          templateUrl: "static/views/job.html",
          controller: function($scope){

          }
        })
        .state('about', {
          url: "/about",
          templateUrl: "static/views/about/about.html",
          controller: function($scope){

          }
        });
    });
})();
