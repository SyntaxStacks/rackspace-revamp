angular.module("Rackspace", ["ui.bootstrap", "ui.router", "ngCookies", "ui.sortable"]);
"use strict";

angular.module("Rackspace").config(["$stateProvider", "$urlRouterProvider", function(t, e) {
    e.otherwise("/"), t.state("index", {
        url: "/",
        templateUrl: "templates/oldSchool.php"
    }).state("oldSchool", {
        url: "/oldSchool",
        templateUrl: "templates/oldSchool.php"
    }).state("bootstrapped", {
        url: "/bootstrapped",
        templateUrl: "templates/bootstrapped.php"
    })
 }]);


function MasterCtrl(t, e) {
    var o = 992;
    t.getWidth = function() {
        return window.innerWidth
    }, t.$watch(t.getWidth, function(g) {
        t.toggle = g >= o ? angular.isDefined(e.get("toggle")) ? e.get("toggle") ? !0 : !1 : !0 : !1
    }), t.toggleSidebar = function() {
        t.toggle = !t.toggle, e.put("toggle", t.toggle)
    }, window.onresize = function() {
        t.$apply()
    }
}

angular.module("Rackspace").controller("MasterCtrl", ["$scope", "$cookieStore", MasterCtrl]);


function suggestCtrl($scope) {
  
  $scope.suggestions = [
    {text:'Dont go to weddings when you have code tests', done:false, notRemoved:true},         
    {text: 'Include more puppies', done:false, notRemoved:true}
  ];
  
  $scope.addSuggestion = function () {
    $scope.suggestions.push({text:$scope.formText, done:false, notRemoved:true});
    $scope.formText = '';
  };
  
  
  $scope.removeSuggestion = function (index) {
	console.log("index is:" + index);
  	$scope.suggestions.splice(index, 1);
  };
  
  $scope.class = false;

	$scope.changeClass = function(){
	  if ($scope.class === false){
	    $scope.class = true;
	  }else if($scope.class === true){
	    $scope.class = false; 
		};
	};

}







