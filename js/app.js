(function(){

	var app = angular.module('myApp',[]);
	//style 0 == grid, style == 1 is list
	var style = 0;
	
	app.controller('storeController', function($scope, $http) {
	  
	  this.products = bikes;

	});
	
	app.controller('tempAdd', function($scope) {
		
		this.addItem = function($scope){
			console.log(localStorage.getItem ('type'));
			bikes.push({'type': localStorage.getItem ('type'), 'pic': localStorage.getItem ('pic')});
			
		};
	});
		
		
	app.controller('check', function($scope){
		$scope.style = style;
	    $scope.checkStyle = function() {
	        return $scope.style;             
	    };
	    //Turns the Add form on/off
	    $scope.IsVisible = false;
        $scope.ShowHide = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;
        };
        
	});
	

var bikes = [

	{
		"type": "Norco",
		"pic": "img/norco-mountain.png"
		
	},
	{
		"type": "Norco",
		"pic": "img/norco-mountain2.png"
		
	},
	{
		"type": "Norco",
		"pic": "img/norco-mountain3.png"
		
	},
	{
		"type": "Norco",
		"pic": "img/norco-cross.png"
		
	},
	{
		"type": "Kona",
		"pic": "img/kona-supreme_operator.jpg"
		
	},
	{
		"type": "Kona",
		"pic": "img/kona-process_167.jpg"
		
	},
	{
		"type": "Kona",
		"pic": "img/kona-hei_hei_supreme.jpg"
		
	},
	{
		"type": "Kona",
		"pic": "img/kona-rove_al.jpg"
		
	}
];

	
	
})();