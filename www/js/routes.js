angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.joysticksTroubleshooting', {
    url: '/JT',
    views: {
      'side-menu21': {
        templateUrl: 'templates/joysticksTroubleshooting.html',
        controller: 'joysticksTroubleshootingCtrl'
      }
    }
  })

  .state('menu.rightAndLeftWheelMovementTroubleshooting', {
    url: '/R&LWM',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rightAndLeftWheelMovementTroubleshooting.html',
        controller: 'rightAndLeftWheelMovementTroubleshootingCtrl'
      }
    }
  })

  .state('menu.gearUpAndDownTroubleshooting', {
    url: '/GU&D',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gearUpAndDownTroubleshooting.html',
        controller: 'gearUpAndDownTroubleshootingCtrl'
      }
    }
  })

  .state('menu.gearGrabberAndCloserTroubleshooting', {
    url: '/GG&C',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gearGrabberAndCloserTroubleshooting.html',
        controller: 'gearGrabberAndCloserTroubleshootingCtrl'
      }
    }
  })

  .state('menu.automaticGearPickupTroubleshooting', {
    url: '/AGP',
    views: {
      'side-menu21': {
        templateUrl: 'templates/automaticGearPickupTroubleshooting.html',
        controller: 'automaticGearPickupTroubleshootingCtrl'
      }
    }
  })

  .state('menu.climberRotationTroubleshootion', {
    url: '/CR',
    views: {
      'side-menu21': {
        templateUrl: 'templates/climberRotationTroubleshootion.html',
        controller: 'climberRotationTroubleshootionCtrl'
      }
    }
  })

  .state('menu.agitatorRotationTroubleshooting', {
    url: '/AG',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agitatorRotationTroubleshooting.html',
        controller: 'agitatorRotationTroubleshootingCtrl'
      }
    }
  })

  .state('menu.agitatorUnjamingTroubleshooting', {
    url: '/AU',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agitatorUnjamingTroubleshooting.html',
        controller: 'agitatorUnjamingTroubleshootingCtrl'
      }
    }
  })

  .state('menu.batteryReplacementTroubleshooting', {
    url: '/BR',
    views: {
      'side-menu21': {
        templateUrl: 'templates/batteryReplacementTroubleshooting.html',
        controller: 'batteryReplacementTroubleshootingCtrl'
      }
    }
  })

  .state('menu.goodJob', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/goodJob.html',
        controller: 'goodJobCtrl'
      }
    }
  })

  .state('menu.eXPLOSIONS', {
    url: '/BOOM',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eXPLOSIONS.html',
        controller: 'eXPLOSIONSCtrl'
      }
    }
  })

  .state('menu.fuelShooterTroubleshooter', {
    url: '/FS',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fuelShooterTroubleshooter.html',
        controller: 'fuelShooterTroubleshooterCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});