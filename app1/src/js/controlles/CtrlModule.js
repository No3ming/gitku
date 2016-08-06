angular.module("CtrlModule", [])
	.controller("CtrlHeader",function($scope, $rootScope, commonService){
		$scope.caseClass=commonService.caseHide($scope);
	})
    .controller('CtrlRegister', function($scope, $rootScope, loginService,commonService) {
        $rootScope.title = "注册用户";
        $scope.go = function($scope) {
            loginService.sendRegisterData($scope);
        };
    })
    .controller('CtrlLogin', function($scope, $rootScope, loginService) {
        $scope.goList = function($scope) {
            loginService.sendLoginData($scope);
        };
        $scope.goRegister = function($scope) {
            window.location.hash = "#/register";
        };
        $rootScope.title = "开心摇摇用户登录";
    })
    .controller('CtrlList', function($scope, $rootScope, listService) {
        $rootScope.title = "新品上市";
        listService.listData($scope);
    });
