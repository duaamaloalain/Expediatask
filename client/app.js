angular.module("myApp",[])
.controller("AllExpediaData",function($scope,$http){
	var object;
    $http.get('/api/expedia').then(function(expediaData){
       object=expediaData;
       for(var key in object){
         $scope.AllData=object.data.offers.Hotel; 
       }
    })
})