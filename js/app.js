var app = angular.module('geo',['navList']);

var nav = angular.module('navList',['ngRoute']);

nav.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'components/home.html',
		controller: 'homeController'
	})
	.when('/about',{
		templateUrl: 'components/about.html',
		controller: 'aboutController'	
	})
	.when('/affordableHousing',{
		templateUrl: 'components/affordableHousing.html',
		controller: 'housingController'	
	})
	.when('/geoTechnoLab',{
		templateUrl: 'components/geoTechnoLab.html',
		controller: 'geoController'	
	})
	.when('/houseKeeping',{
		templateUrl: 'components/houseKeeping.html',
		controller: 'keepingController'	
	})
	.when('/homeAutomationAndElectricalService',{
		templateUrl: 'components/haes.html',
		controller: 'haesController'	
	})
	.otherwise({redirectTo: '/'});
});