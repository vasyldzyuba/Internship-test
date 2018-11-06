let app = angular.module('app', ['ngRoute']);
 app.config(function ($routeProvider) {
 	$routeProvider.when('/', {
 		templateUrl: '/interns.html',
 		controller: 'internsCtrl',
 		controllerAs: 'interns'
 	});