define([
   'approot/Services/dataService',
  'approot/Controllers/dashboard',
  'approot/Controllers/createCAR',
  'approot/Controllers/dashboard.charts'
],
    function (dataService, dashboardController, createCARController, dashboardChartsController) {
        'use strict';
        angular.module('app', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAnimate', 'ngTouch', 'ngCookies','chart.js','ui.grid','ngAria', 'ngMaterial'])
            .config(function routeConfig($stateProvider, $urlRouterProvider) {
                // For unmatched routes
                $urlRouterProvider.otherwise('/');

                // Application routes
                $stateProvider
                .state('dashboard', {
                    url:'/',
                    templateUrl: 'app/Templates/dashboard.html'
                })
                .state('CAR', {
                    url: '/CAR',
                    templateUrl: 'app/Templates/createCAR.html'
                })
                  
            })
            .run(['$rootScope', '$state', function ($rootScope, $state) {
                $rootScope.$state = $state;
            }])
           .controller('DashboardController', dashboardController)
            .controller('CreateCARController', createCARController)
            .controller('DashboardChartsController',dashboardChartsController)
            .factory('dataService', dataService);
    }
);