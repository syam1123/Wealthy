angular.module('FetchApi',['ngResource'])
	.factory('Address',function($resource){
		return $resource('https://data.gov.in/api/datastore/resource.json',{
			'filters[pincode]' : '@pincode',
			'resource_id' : '6176ee09-3d56-4a3b-8115-21841576b2f6',
			'api-key' : 'f7bea1fcf1a8c41d6f6e372c876308e7'
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
