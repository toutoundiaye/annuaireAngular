'use strict';

/**
 * @ngdoc function
 * @name annuaireAngularApp.controller:CreationCtrl
 * @description
 * # CreationCtrl
 * Controller of the annuaireAngularApp
 */
var creation = angular.module('creation',[]);
  creation.controller('CreationCtrl',['$scope', 
  function ($scope) {
     $scope.contacts = [
      {name:'Tina',phoneCall:'0678878974'},
      {name:'David',phoneCall:'0687874214'}
    ];
    $scope.save = function(contact) {
       $scope.contacts.push(contact);
       $scope.contact={};
    }
    $scope.cancel = function(contact) {
       $scope.contact={};
    }
  }] 
    
  );


app.directive("accordeon", function(){
    return{
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function(){
            var contacts = [];
            this.gotOpened = function(selectedContact){
               contacts.forEach(function(contact){
                    if(selectedContact != contact){
                       contact.showMe = false;
                    }
                });
            };
            this.addContact = function(contact){
               contacts.push(contact);
            };
        }};
      }
);

app.directive("contact", function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordeon',
        scope: {name: '=contactName'},
        template: '<div>' +
        '<div class="title" ng-click="toggle()">{{name}}</div>' +
        '<div class="body" ng-show="showMe" ng-transclude></div>' +
        '</div>',
        link: function(scope, element, attrs, accordeonController){
            scope.showMe = false;
            accordeonController.addContact(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                accordeonController.gotOpened(scope);
            };
        }
    };
});