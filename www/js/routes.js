angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.dashboard'
      2) Using $state.go programatically:
        $state.go('tabsController.dashboard');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /dashboard/tab1/dashboard
      /dashboard/tab3/dashboard
  */
  .state('tabsController.dashboard', {
    url: '/dashboard',
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      },
      'tab3': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.pastActivity', {
    url: '/past-activity',
    views: {
      'tab2': {
        templateUrl: 'templates/pastActivity.html',
        controller: 'pastActivityCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/dashboard',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('activitySettings', {
    url: '/activity-settings',
    templateUrl: 'templates/activitySettings.html',
    controller: 'activitySettingsCtrl'
  })

  .state('activityInProgress', {
    url: '/activity-in-progress',
    templateUrl: 'templates/activityInProgress.html',
    controller: 'activityInProgressCtrl'
  })

  .state('tabsController.activity1Details', {
    url: '/activity1',
    views: {
      'tab2': {
        templateUrl: 'templates/activity1Details.html',
        controller: 'activity1DetailsCtrl'
      }
    }
  })

  .state('tabsController.activity2Details', {
    url: '/activity2',
    views: {
      'tab2': {
        templateUrl: 'templates/activity2Details.html',
        controller: 'activity2DetailsCtrl'
      }
    }
  })

  .state('activityCompleted', {
    url: '/activity-complete',
    templateUrl: 'templates/activityCompleted.html',
    controller: 'activityCompletedCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('yogaClass', {
    url: '/yoga',
    templateUrl: 'templates/yogaClass.html',
    controller: 'yogaClassCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});