angular.module('WealthyApp', ['ui.router', 'ngResource', 'FetchApi'])

	.controller('wealthyPageCtrl', ['$scope', '$resource', 'Address',
		function($scope, $resource, Address){

			$scope.FetchAddresses = function(pincode){
				$scope.AddressAtLocation = Address.getAddressDetails({'filters[pincode]' : pincode});
				console.log("$scope.AddressAtLocation", $scope.AddressAtLocation);
			}
			$scope.FetchAddresses(560102);

	}])
	
	.config(function($stateProvider, $urlRouterProvider) {
	    
	    $urlRouterProvider.otherwise('/');
	    
	    $stateProvider
	        
	        .state('/', {
	            url: '/',
	            templateUrl: 'views/wealthy.html',
	            controller : 'wealthyPageCtrl'
	        });
	        
	        
	});
