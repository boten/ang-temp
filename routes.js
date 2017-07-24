angular.module('app.routes', [])
    .config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/index/about-us");
        $stateProvider
            .state('main-menu', {
                url: "/index",
                views: {
                    'main-menu': {
                        templateUrl:"views/main_menu/main_menu.html"
                    }
                }
            })
            .state('main-menu.about-us', {
                url: "/about-us",
                views: {
                    'sub-menu': {
                        templateUrl: "views/about_us/about_us.html",
                        controller: 'aboutUsController as about'
                    }
                }
            })
            .state('main-menu.flicker', {
                url: "/flicker",
                views: {
                    'sub-menu': {
                        templateUrl: "views/flicker/flicker.html",
                        controller: 'flickerController as flicker'
                    }
                }
            })
            .state('main-menu.open-time', {
                url: "/open-time",
                views: {
                    'sub-menu': {
                        templateUrl: "views/open_time/open_time.html",
                        controller: 'openTimeController as openTime'
                    }
                }
            })
});