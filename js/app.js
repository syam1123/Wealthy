angular.module('WealthyApp', ['ui.router', 'ngResource', 'FetchApi'])

	.controller('wealthyPageCtrl', ['$scope', '$resource', 'Address',
		function($scope, $resource, Address){
			$scope.initialize = function(){
				$scope.isGotPincode = false;
			}
			$scope.initialize();
			$scope.FetchAddresses = function(pincode){
				
				if (pincode) {
					$scope.AddressAtLocation = Address.getAddressDetails({'filters[pincode]' : pincode});
					console.log("$scope.AddressAtLocation", $scope.AddressAtLocation);
					$scope.isGotPincode = true;
				};
				
			}
			$scope.multipleValue = function(addressValue){
				if(addressValue.length >=2){
					return true;
				}
				else{
					return false;
				}
			}

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
