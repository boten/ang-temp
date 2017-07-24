(function () {
    'use strict';

    function CustomService($http,$timeout,$q) {

        var vm = this;

        init();
        activate();



        function init(){

        }

        function activate(){

        }



    }

    angular.module('app.services',[])
        .service('CustomService', ['$http','$timeout','$q', CustomService]);

})();
