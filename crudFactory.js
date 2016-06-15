/**
 * Created by rubhu on 6/14/2016.
 */
angular.module('crudFactoryApp.crudFactory', [])
    .factory('crudAPIFactory', function($http) {
        //Get Company List
        var crudFactory={};
        crudFactory.getuserList = function () {
            return $http({
                url: "http://localhost:5000/users/display",
                method: 'GET'
            });

        };
        crudFactory.createuser=function(user){
            console.log(user);
            return $http({
                url: "http://localhost:5000/users/Inserdata",
                method: 'POST',
                data:user
            });
        }
        crudFactory.getuserdetails = function (user) {

            return  $http({
                url: "http://localhost:5000/users/getdetails?usertypeID=" + user.usertypeID,
                method: 'GET'

            });
        };
        crudFactory.updateUser = function (user) {

            return $http({
                url: "http://localhost:5000/users/updatetext?usertypeID="+ user.usertypeID,
                method: 'PUT',
                data:user

            });
        };

        return crudFactory
    })