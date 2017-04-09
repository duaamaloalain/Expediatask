angular.module("myApp",[])
.controller("AllExpediaData",function($scope,$http){
	var object;
    $http.get('/api/expedia').then(function(expediaData){ //get data from backend by api
       object=expediaData; 
       for(var key in object){
         $scope.AllData=object.data.offers.Hotel;  
       }
    })
})