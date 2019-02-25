app.controller("UserController",function ($controller,$rootScope,$scope,$location,$timeout,UserService) {
    $scope.register=function (user) {
     console.log(user);
        UserService.register(user).then(function (response) {
            console.log(response);
            $scope.users={};
            $scope.userList();

        });


    }
    $scope.userList=function () {
        UserService.userList().then(function (response) {
            $scope.values=response.data.keyValue;
            console.log($scope.values);


        });


    }

    $scope.editUser=function (index) {
        var obj = $scope.values[index];
        $scope.users=obj;

    }
    $scope.deleteUser=function (index) {
        var obj = $scope.values[index];
        UserService.delete(obj).then(function (response) {
            $scope.userList();
        });


    }

});