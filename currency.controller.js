(function () {

	var app = angular.module("currencyApp", ['ngMessages']);

	app.controller("currencyCtrl", currencyFn);

	function currencyFn(currencyDataSvc, $http) {
		var self = this;
		this.successMessage = undefined;
		this.errorMessage = undefined;

		currencyDataSvc.getMessage()
		.then(function (data) {
			self.message1 = data;
			console.log(self.message1);

		})

		this.selectMessage = function (index) {
			this.selectedMessage = this.message1[index]
		}

		this.selecteduser = function (index) {
			this.selecteduser = this.message[index];
		}

		this.postfun = function () {
			window.location = "post.html";
		}

		this.viewfun = function () {
			window.location = "view.html";
		}


		this.currentdate = new Date();
		this.locale = "en-us";
		this.month = this.currentdate.toLocaleString(this.currentdate, {
				month: "short"
			}).toUpperCase();
		this.datetime = this.currentdate.getDate() + "-"
			 + this.month + "-"
			 + this.currentdate.getFullYear() + " "
			 + this.currentdate.getHours() + ":"
			 + this.currentdate.getMinutes() + ":"
			 + this.currentdate.getSeconds();
		console.log(this.datetime);

		this.postToJson = function () {

			var userData = {
				"userId": this.formData.userId,
				"currencyFrom": this.formData.currencyFrom,
				"currencyTo": this.formData.currencyTo,
				"amountSell": this.formData.amountSell,
				"amountBuy": this.formData.amountBuy,
				"rate": this.formData.rate,
				"timePlaced": this.datetime,
				"originatingCountry": this.formData.originatingCountry
			}


			$http({
				method: 'POST',
				url: 'http://localhost:8080/messages',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				data: userData
			}).then(function (response) {
				console.log(response);
				window.location.reload();
				this.successMessage = "Data Successfully Updated";
			},
				function () {
				this.errorMessage = "There is an error. Please try again";
			});

		}

	}

})();
