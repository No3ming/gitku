angular.module("App",
	["ngRoute",
	 "CtrlModule",
	 "ConstantModule",
	 "ServiceModule"
	])
.config(function($routeProvider){
	$routeProvider
	.when("/register",{
		templateUrl:"./src/templates/register.html",
		controller: "CtrlRegister"
	}).
	when("/login",{
		templateUrl:"./src/templates/login.html",
		controller: "CtrlLogin"
	}).
	when("/list",{
		templateUrl:"./src/templates/list.html",
		controller: "CtrlList"
	}).
	otherwise({
		redirectTo : "/register"
	});
});
