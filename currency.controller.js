(function(){

var app= angular.module("currencyApp", []);

app.controller("currencyCtrl", currencyFn);


function currencyFn($http) {

   $http.get('http://localhost:3000/currency')
    .then (function(response){
      console.log(response);
    })

  this.postfun = function(){
    window.location="post.html";
  }

  this.viewfun = function(){
    window.location="view.html";
  }

  

  this.postToJson = function(){
      var userData = this.formData;
      $http.post('http://localhost:3000/currency/', userData)
          .then (function(response){
            console.log(response);
          })

        }




}

})();
