'use strict';

/**
 * @ngdoc function
 * @name annuaireAngularApp.controller:EditionCtrl
 * @description
 * # EditionCtrl
 * Controller of the annuaireAngularApp
 */
var edition = angular.module('edition',[]);

edition.controller('EditionCtrl',['$scope','$routeParams', '$location', 
  function ($scope, $routeParams, $location) {
    var newContact = false;
    if ($routeParams.contactId) {
        $scope.contact = $scope.contacts[$routeParams.contactId];
    } else {
        $scope.contact = "";
        newContact = true;
    }
    $scope.saveContact = function() {
        if (newContact) {
            $scope.contacts.push($scope.contact);
        } else {
          $scope.contacts[$routeParams.contactId] = $scope.contact;
        }
        $location.path("/");
    };
    $scope.annuler = function(contact) {
       $scope.contact={};
    }
    $scope.delete = function() {
       $scope.contacts.splice($routeParams.contactId,1);
    }
}] 
    
  );