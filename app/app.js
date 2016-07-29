var app = angular.module('WeddingApp', ['WeddingCtrl', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //define routes
  $stateProvider
  .state('Home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  $stateProvider
  .state('Story', {
  	url: '/story',
  	templateUrl: 'views/story.html',
  	controller: 'StoryCtrl'
  })
  $stateProvider
  .state('Thanks', {
  	url: '/thanks',
  	templateUrl: 'views/thanks.html',
  	controller: 'ThanksCtrl'
  })
  $stateProvider
  .state('GettingReady', {
  	url: '/photos/getting-ready',
  	templateUrl: 'views/getting-ready.html',
  	controller: 'GettingReadyCtrl'
  })
  $stateProvider
  .state('FirstLook', {
  	url: '/photos/first-look',
  	templateUrl: 'views/first-look.html',
  	controller: 'FirstLookCtrl'
  })
  $stateProvider
  .state('Ceremony', {
  	url: '/photos/ceremony',
  	templateUrl: 'views/ceremony.html',
  	controller: 'CeremonyCtrl'
  })
  $stateProvider
  .state('Reception', {
  	url: '/photos/reception',
  	templateUrl: 'views/reception.html',
  	controller: 'ReceptionCtrl'
  })
  $stateProvider
  .state('SunsetPhotos', {
  	url: '/photos/sunset',
  	templateUrl: 'views/sunset.html',
  	controller: 'SunsetCtrl'
  })
  $stateProvider
  .state('Navbar', {
  	url: '/',
  	templateUrl: 'navbar.html',
  	controller: 'NavbarCtrl'
  })




  //$locationProvider.html5Mode(false).hashPrefix('!');
}]);