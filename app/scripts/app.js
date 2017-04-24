'use strict';

/**
 * @ngdoc overview
 * @name annuaireAngularApp
 * @description
 * # annuaireAngularApp
 *
 * Main module of the application.
 */
var app = angular.module('annuaireAngularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'main',
    'creation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/creation', {
        templateUrl: 'views/creation.html',
        controller: 'CreationCtrl',
      })
      .when('/edition/:contactId', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
