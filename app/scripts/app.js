'use strict';

/**
 * @ngdoc overview
 * @name agilitysimApp
 * @description
 * # agilitysimApp
 *
 * Main module of the application.
 */
angular
  .module('agilitysimApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
