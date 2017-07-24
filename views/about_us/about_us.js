(function  () {
    'use strict';
    angular.module('app.controllers',[])
        .controller('aboutUsController',['$rootScope',"$scope",'CustomService',aboutUsController]);

    function aboutUsController($rootScope,$scope,CustomService){
        var vm = this;

        init();
        activate();



        function init(){

        }

        function activate(){

        }

    }

}());


