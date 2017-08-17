angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('index', {
    url: '/page5',
    templateUrl: 'templates/index.html',
    controller: 'indexCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('selectInterests', {
    url: '/page8',
    templateUrl: 'templates/selectInterests.html',
    controller: 'selectInterestsCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});