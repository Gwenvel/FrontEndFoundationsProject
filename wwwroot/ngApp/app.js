var myApp = angular.module("myApp", ['ui.router', 'ngResource', 'ui.bootstrap']);
myApp.controller("MainController", MainController);
myApp.controller("AboutController", AboutController);
myApp.controller("InventoryController", InventoryController);
myApp.controller("ContactController", ContactController);
myApp.service("$productService", ProductService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/main.html',
            controller: MainController,
            controllerAs: 'controller'
        }).state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: AboutController,
            controllerAs: 'controller'
        }).state('inventory', {
            url: '/inventory',
            templateUrl: '/ngApp/views/inventory.html',
            controller: InventoryController,
            controllerAs: 'controller'
        }).state('contact', {
            url: '/contact',
            templateUrl: '/ngApp/views/contact.html',
            controller: ContactController,
            controllerAs: 'controller'
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise('/notFound');

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});