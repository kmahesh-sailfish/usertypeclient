/**
 * Created by rubhu on 6/14/2016.
 */
var crudFactoryApp = angular.module('crudFactoryApp', []);

angular.module('crudFactoryApp', [
    'crudFactoryApp.controller',
    'crudFactoryApp.crudFactory',
    'ngRoute'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            //when("/", {templateUrl: "partials/home.html", controller: "companyController"}).
            .when('/',
            {
                templateUrl: "partial/display.html",
                controller: "companyController"
            })
        .when('/edit',
            {
                templateUrl: "partial/edit.html",
                controller: "editController"
            })
        .otherwise('/',
            {
                templateUrl: "partial/display.html",
                controller: "companyController"
            });
    }]);