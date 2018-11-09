(function(){
var app = angular.module("currencyApp");
app.service("currencyDataSvc", function($http){
    var self = this;
      self.getMessage = function () {
        var promise1 = $http.get('http://localhost:8080/messages');
        var promise2 =  promise1.then(function (response) {
          return response.data;

          });
          return promise2;
      }

});
})();
