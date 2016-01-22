'use strict';

angular.module('myBlogs.blogs', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blogs', {
    templateUrl: 'blogs/blogs.html',
    controller: 'BlogsCtrl'
  });
}])

.controller('BlogsCtrl', ['$scope','$firebaseArray', function($scope,$firebaseArray) {
	console.log($scope)
}]);