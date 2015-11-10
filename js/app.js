(function(){

	var app = angular.module('myApp',[]);
	var style = 0;
	
	app.controller('products', function($scope, $http) {
	  $http.get('bicycles.json').success(function(data) {
		$scope.bicycles = data;
	  });

	});
	app.controller('check', function($scope){
		$scope.style = style;
		
	    $scope.checkStyle = function() {
	    	
	        return $scope.style;             
	    };
	});
	
	
	
})();