(function  () {
    'use strict';
    angular.module('app.controllers')
        .controller('flickerController',['$rootScope',"$scope",'CustomService',flickerController]);

    function flickerController($rootScope,$scope,CustomService){
        var vm = this;

        init();
        activate();



        function init(){

        }

        function activate(){

        }



    }

}());
