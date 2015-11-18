angular.module('WealthyApp', ['ui.router', 'ngResource', 'FetchApi'])

	.controller('wealthyPageCtrl', ['$scope', '$resource', 'Address',
		function($scope, $resource, Address){

			$scope.FetchAddresses = function(pincode){
				$scope.AddressAtLocation = Address.getAddressDetails({'filters[pincode]' : pincode});
				console.log("$scope.AddressAtLocation", $scope.AddressAtLocation);
			}
			$scope.FetchAddresses(560102);

	}])
	.factory('Address',function($resource){
		return $resource('https://data.gov.in/api/datastore/resource.json?resource_id=6176ee09-3d56-4a3b-8115-21841576b2f6&api-key=f7bea1fcf1a8c41d6f6e372c876308e7&',{
			'filters[pincode]' : '@pincode'
		},
		{
			getAddressDetails : {
				method : 'GET',
				isArray : false,
				transformResponse: function(data, header) {
			          return (angular.fromJson(data));
			        }
			}
		})
	})
	.config(function($stateProvider, $urlRouterProvider) {
	    
	    $urlRouterProvider.otherwise('/');
	    
	    $stateProvider
	        
	        .state('/', {
	            url: '/',
	            templateUrl: 'views/wealthy.html',
	            controller : 'wealthyPageCtrl'
	        });
	        
	        
	});
