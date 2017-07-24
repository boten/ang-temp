(function  () {
    'use strict';
    angular.module('app.controllers',[])
        .controller('aboutUsController',['$rootScope',"$scope",'CustomService',aboutUsController]);

    function aboutUsController($rootScope,$scope,CustomService){
        var self = this;


        this.aboutUsData = CustomService.userData.aboutUsData;

    }

}());


