(function  () {
    'use strict';
    angular.module('app.controllers')
        .controller('openTimeController',['$rootScope',"$scope",'CustomService',openTimeController]);

    function openTimeController($rootScope,$scope,CustomService){
        var self = this;

        this.daysArray = ['sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'];


        $scope.updateDay = function (item,location,choise) {
            if(item[location]){
                item[location].day = choise;
            }
        };

        this.openTimeArray = CustomService.userData.openTimeArray;

        this.addTime = function () {
          self.openTimeArray.push({startDay:{day:"",open:"",close:""},endDay:{day:"",open:"",close:""} });
        };

        this.removeTime = function (index) {
           if((index || index == 0) && self.openTimeArray.length != 1){
               self.openTimeArray.splice(index,1);
           }
        };



    }

}());
