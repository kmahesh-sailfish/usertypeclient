/**
 * Created by rubhu on 6/14/2016.
 */
angular.module('crudFactoryApp.controller', []).

    /* Company controller */
    controller('companyController', function($scope, crudAPIFactory,$parse) {
        crudAPIFactory.getuserList().success(function (response) {
            console.log(response) ;
            $scope.Users = response;

        });
        $scope.submit=function(user){
            crudAPIFactory.createuser(user).success(function(response){
                crudAPIFactory.getuserList().success(function (response) {
                    $scope.Users = response;
                    $scope.message= "successfully added the data"
                    $scope.user.userName = "";
                    $scope.user.password = "";
                    $scope.user.email = "";
                });
            })

        }
        $scope.edit=function(user){
            crudAPIFactory.getuserdetails(user).success(function(response){

                $scope.user = {};
                $scope.user.usertypeID=response[0].usertypeID;
                $scope.user.userName = response[0].userName;
                $scope.user.password  = response[0].password;
                $scope.user.email  = response[0].email;

            })
        }

           $scope.updateuser=function(user){
               console.log(user);
               crudAPIFactory.updateUser(user).success(function(response){
                  $scope.message= "successfully updated"
                   crudAPIFactory.getuserList().success(function (response) {
                       $scope.Users = response;
                       $scope.message="";
                       $scope.user.userName = "";
                       $scope.user.password = "";
                       $scope.user.email = "";
                   });

               })

           }

    })
.controller('editcontrol',function($scope,crudAPIFactory,$location){

    })