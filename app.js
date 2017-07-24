(function  () {
    'use strict';
    angular.module('app',['ui.router','app.routes','app.services','app.controllers'])
        .controller('mainController',['$rootScope',"$scope",mainController]);

    function mainController($rootScope,$scope){
        var self = this;


    }

}());
