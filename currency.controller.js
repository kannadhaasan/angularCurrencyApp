(function(){

var app= angular.module("currencyApp", []);

app.controller("currencyCtrl", currencyFn);
this.successMessage = undefined;
      this.errorMessage = undefined;

function currencyFn($http) {



   $http.get('http://localhost:8080/topics')
    .then (function(response){
      console.log(response);
    })

  this.postfun = function(){
    window.location="post.html";
  }

  this.viewfun = function(){
    window.location="view.html";
  }


    this.hideMode = true;
    this.currentdate = new Date();
    this.locale = "en-us";
    this.month = this.currentdate.toLocaleString(this.currentdate, {month: "short"}).toUpperCase();
    this.datetime =  this.currentdate.getDate() + "-"
                + this.month  + "-"
                + this.currentdate.getFullYear() + " "
                + this.currentdate.getHours() + ":"
                + this.currentdate.getMinutes() + ":"
                + this.currentdate.getSeconds();
                console.log(this.datetime);





  this.postToJson = function(){

      var userData = this.formData;

      $http({
            method: 'POST',
            url: 'http://localhost:8080/topics/',
            headers: {  'Content-Type': 'application/json;charset=utf-8' },
           data:  userData
       }).then (function(response){
        console.log(response);
        this.successMessage = "Data Successfully Updated";
        window.location.reload();
      },
      function(){
        this.errorMessage = "There is an error. Please try again";
      }
    );


        }




}

})();
