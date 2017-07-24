(function  () {
    'use strict';
    angular.module('app.controllers')
        .controller('flickerController',['$rootScope',"$scope",'CustomService',flickerController]);

    function flickerController($rootScope,$scope,CustomService){
        var self = this;


        this.flickerData = CustomService.userData.flickerData;

        if(CustomService.flickerImg){
            self.photos = CustomService.flickerImg;
        }

        this.getPhotos = function () {
            self.error = undefined;
            var id = self.flickerData.id;
            if(!id){
                self.photos = [];
                self.error = 'please enter user id and try again';
                self.spinner = false;
                return
            }
            console.log('user id is: '+id);
            self.spinner = true;
            CustomService.getImgFromServer()
                .then(function(data){
                    if(data && data.length > 0){
                        self.photos = data;
                        self.error = undefined;
                    }else{
                        self.photos = [];
                        self.error = 'Oops... no images were found, please check your user id and try again';
                    }
                    self.spinner = false;

                },function(err){
                    self.photos = [];
                    self.error = 'Oops... no images were found, please check your user id and try again';
                    self.spinner = false;
                });

        };

    }

}());
