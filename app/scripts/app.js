'use strict';

/**
 * @ngdoc overview
 * @name enlApp
 * @description
 * # enlApp
 *
 * Main module of the application.
 */
angular
  .module('enlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	 
      .when('/organisation', {
        templateUrl: 'views/organisation.html',
        controller: 'OrganisationCtrl',
        controllerAs: 'organisation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
