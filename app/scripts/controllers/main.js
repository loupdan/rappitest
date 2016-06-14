'use strict';

/**
 * @ngdoc function
 * @name rappiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rappiApp
 */
angular.module('rappiApp')
  .controller('MainCtrl', function ($scope, service) {
  	this.awesomeThings = [
    ];
  	$scope.newscontent = '';
  	
  	$scope.getNews = function(){
  		service.getdata().success(function (data){
       		$scope.newscontent = data; 
       	});
  	};
  })
  .factory('service', function($http){
    return {
        getdata: function(){
            return $http.get('scripts/news_mock.json'); 
        }
    };
});
