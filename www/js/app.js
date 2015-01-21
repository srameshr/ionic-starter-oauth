// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	
	.state('signUp', {
		url: '/signUp',
		templateUrl: 'templates/signUp.html',
		controller: 'SignUpController'
	})

	$urlRouterProvider.otherwise('/signUp');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('SignUpController', function($scope, $cordovaFacebook, $cordovaGooglePlus, $ionicLoading){
	/*
	 * Learn how facebooks graph api works: https://developers.facebook.com/docs/graph-api/quickstart/v2.2
	 * The array params "public_profile", "email", "user_friends" are the permissions / data that the app is trying to access.
	*/
	$scope.fbLogin = function(){

		$cordovaFacebook.login(["public_profile", "email", "user_friends"])
    .then(function(success) {
    	/*
    	 * Get user data here. 
    	 * For more, explore the graph api explorer here: https://developers.facebook.com/tools/explorer/
    	 * "me" refers to the user who logged in. Dont confuse it as some hardcoded string variable. 
    	 * 
    	*/
    	//To know more available fields go to https://developers.facebook.com/tools/explorer/
    	$cordovaFacebook.api("me?fields=id,name,picture", [])
    	.then(function(result){
    		/*
    		 * As an example, we are fetching the user id, user name, and the users profile picture
    		 * and assiging it to an object and then we are logging the response.
    		*/
    		var userData = {
    			id: result.id,
    			name: result.name,
    			pic: result.picture.data.url
    		}
    		//Do what you wish to do with user data. Here we are just displaying it in the view
    		$scope.fbData = JSON.stringify(userData, null, 4);
    		

    	}, function(error){
    		// Error message
    	})
      
    }, function (error) {
      // Facebook returns error message due to which login was cancelled.
      // Depending on your platform show the message inside the appropriate UI widget
      // For example, show the error message inside a toast notification on Android
    });

	}

	/*
	 * Google login
	*/

	$scope.googleLogin = function(){

		$ionicLoading.show({template: 'Loading...'}); 
		/*
		 * Google login. This requires an API key if the platform is "IOS".
		 * Example: $cordovaGooglePlus.login('yourApiKey')
		*/
		$cordovaGooglePlus.login()
		.then(function(data){
			
			$scope.googleData = JSON.stringify(data, null, 4);
			$ionicLoading.hide();

		}, function(error){
			
			// Google returns error message due to which login was cancelled.
      // Depending on your platform show the message inside the appropriate UI widget
      // For example, show the error message inside a toast notification on Android
      $ionicLoading.hide();

		});
	}
})


