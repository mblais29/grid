(function(){
	//Application Modules
	var app = angular.module('myApp',[]);

	//style 0 == grid, style == 1 is list
	var style = 0;
	
	//Application Controllers
	app.controller('storeController', function($scope, $http) {
	  
	  this.products = bikes;

	});
	//Temporary stores the Form information to Local Storage
	app.controller('tempAdd', function($scope) {
		
		this.addItem = function($scope){
			console.log(localStorage.getItem ('type'));
			/* Pushes the new record to the array */
			bikes.push({'type': localStorage.getItem ('type'), 'price': localStorage.getItem ('price'), 'pic': localStorage.getItem ('pic')});
			
		};
	});
		
	//Checks to see if the form is Visible or not	
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
	
//JSON information 
	var bikes = [
	
		{
			"type": "Norco",
			"price": "425",
			"pic": "img/norco-mountain.png"
			
		},
		{
			"type": "Norco",
			"price": "400",
			"pic": "img/norco-mountain2.png"
			
		},
		{
			"type": "Norco",
			"price": "530",
			"pic": "img/norco-mountain3.png"
			
		},
		{
			"type": "Norco",
			"price": "399",
			"pic": "img/norco-cross.png"
			
		},
		{
			"type": "Kona",
			"price": "629",
			"pic": "img/kona-supreme_operator.jpg"
			
		},
		{
			"type": "Kona",
			"price": "295",
			"pic": "img/kona-process_167.jpg"
			
		},
		{
			"type": "Kona",
			"price": "349",
			"pic": "img/kona-hei_hei_supreme.jpg"
			
		},
		{
			"type": "Kona",
			"price": "449",
			"pic": "img/kona-rove_al.jpg"
			
		}
	];
})();