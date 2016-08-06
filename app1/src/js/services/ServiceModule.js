angular.module("ServiceModule", [])
    .service('loginService', function($http, apiUrl) {
        return {
            sendLoginData: function(scope) {
                $http.get(apiUrl.USERINFO_URL + "?" + JSON.stringify({
                        status: "login",
                        userID: login.username.value,
                        password: login.password.value
                    }).replace(/{|}|/g, "").replace(/,/g, "&").replace(/:/g, "="))
                    .success(function(data) {
                        scope.loginMs=data;
                        // window.location.hash="#/list";
                    });
            },
            sendRegisterData: function(scope) {
                $http
                    .get(apiUrl.USERINFO_URL + "?" + JSON.stringify({
                        status: "register",
                        userID: register.username.value,
                        password: register.password.value
                    }).replace(/{|}|\"/g, "").replace(/,/g, "&").replace(/:/g, "="))
                    .success(function(data) {
                        // scope.login = data;
                        // window.location.hash="#/list";
                         scope.loginMs=data;
                        console.log(data);
                    });
            }
        };
    })
    .service('listService', function($http, apiUrl) {
        return {
            listData: function(scope) {
                $http.get(apiUrl.GOODSLIST_URL)
                    .success(function(data) {
                        console.log(data);
                    });
            }
        };
    })
    .service('commonService', function($http, apiUrl) {
        return {
            caseHide: function() {
                return "case-hide";
            }
        };
    });
