
var botApp = angular.module('botApp', [
	'ngRoute',
    ]);

botApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	// $controllerProvider.allowGlobals();
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/',
		{
			templateUrl : "modules/views/index.html",
			controller : "chatbotController"
		})
	
	.otherwise({
        redirectTo: '/'
      });

	/*// use the HTML5 History API
        $locationProvider.html5Mode(true);*/

}]);