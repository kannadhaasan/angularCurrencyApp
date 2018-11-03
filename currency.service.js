(function(){
var app = angular.module("currencyApp");
app.service("currencyDataSvc", function($http){
    var self = this;
      self.createMessage = function(userData){
            return $http.post('http://localhost:3000/currency/', userData)
            .then(function(response){
              console.log(response);
            })
      }

      self.getMessage = function () {
        var promise1 = $http.get('http://localhost:3000/currency');
        var promise2 =  promise1.then(function (response) {
          return response.data;

          });
          return promise2;
      }

})
})();
