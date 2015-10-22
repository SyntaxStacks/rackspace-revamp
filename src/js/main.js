angular.module("Rackspace", ["ui.bootstrap", "ui.router", "ngCookies"]);
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
    {text:'Dont go to weddings when you have code tests', done:false},         
    {text: 'Include more puppies', done:false}
  ];
  
  
  
  $scope.addSuggestion = function () {
    $scope.suggestions.push({text:$scope.formText, done:false});
    $scope.formText = '';
  };

}





