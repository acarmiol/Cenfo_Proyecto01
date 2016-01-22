'use strict';

// Declare app level module which depends on views, and components
angular.module('myBlogs', [
  'ngRoute',
  'firebase',
  'myBlogs.blogs'

 
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/blogs'});
}]);
