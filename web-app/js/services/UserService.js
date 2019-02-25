app.factory("UserService",function ($http) {

    var factory={};
    factory.register=function (user) {
        return $http.post("http://localhost:8080/MyProjectAngular/user/register",user).success(function (data) {
            console.log("hIII");
            console.log(data);

            return data;
        });

    }
    factory.userList=function () {
        return $http.get("user/userList").success(function (data) {
            return data;
        });

    }
    factory.delete=function (obj) {
        return $http.post("http://localhost:8080/MyProjectAngular/user/delete",obj).success(function (data) {
            console.log("hIII");
            console.log(data);

            return data;
        });

    }



    return factory;

});