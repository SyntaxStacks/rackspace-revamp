
'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('Rackspace').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                templateUrl: '/templates/oldSchool.php'
            })
    }
]);
