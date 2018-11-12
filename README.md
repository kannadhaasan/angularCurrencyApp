# angularJSCurrencyApp
### This apps facilates the messages recieves from customer sends to message processor which is spring boot backend application and then gets back the processed messages and delivers to the front end.

## Technology Used

### Front end: Angular JS, JavaScript, HTML, CSS, Bootstrap
### Client Host: http-server
### Backend: Java Spring boot
### Server: Tomcat

![Currency]()

## Deployment Steps:

### 1. angularJSCurrencyApp

#### Step 1: Download the currencyapp file from github (https://github.com/kannadhaasan/angularJSCurrencyApp.git) and place at any path in  local machine
#### Step 2: Setting up http server:
* Download node JS from https://nodejs.org/en/ and install it in local system
* Open cmd prompt with run as admin and execute the following command to install the http-server: npm install http-server
* In command prompt direct to the currencyapp downloaded folder and execute this command: http-server. Now server will get started and client side application will get hosted. As soon as the server starts it gives an url to access the application. Copy the URL and paste it in your browser. Now you can able to access the home page of the application
### 2. Endpoint
#### Step 1: Download the currency-tradeprocessor Endpoint application from following link (https://github.com/kannadhaasan/MessageConsumerSpringBootEndpoint.git)
#### Step 2: Open springboot STS bundle and launch the application. Once IDE launches, open the currency-tradeprocessor app using following steps:
* Create a new folder in IDE: file -> new -> folder -> folder name: currency-tradeprocessor
* Go to file -> import -> General -> Archive File -> Click Next 
* From archive file: browse the path to currency-tradeprocessor downloaded location (Check the Overwrite existing resources without warning) 
* Into folder: Browse path newly created folder: currency-tradeprocessor and click finish
#### Step 3: Now project is set up in IDE. Now go to following path to run the main class: Expand currency-tradeprocessor -> Java Resource -> src/main/java -> io.currencyapp.springboot.starter -> CurrencyApp.java
#### Step 4: Right click CurrencyApp.java -> run as -> Java Application. Once application successfully runs then post the messages from front end using http-server url

### Advantages:
* Multiple users can able to send trade messages using URL
* It reaches end point without any external application help
* Recieved trade messages can also be viewed.

### How to access:
* Once http server started access the application (http://ipFromServer:portno.index.html)
* Now application is ready to either post or view the messages. 
* Click on "Post Messsage" to post any message or "View Message" to view the posted message.
* Please look into application architecture diagram in the following path of this repository (angularJSCurrencyApp/Currency.JPG) 

### Issues faced while development
* Port Issue: While running the application one of the most frequent issue was port occupied by another process. So, everytime while running the application I had to kill the process and had to run the application again. Spring boot applcation runs on 8080 port. To identify which process runs on port, execute following command in command prompt: netstat -a -n -o | find "port no", and to kill that  process, execute the following command: taskkill /F /PID processID. 
* Spring application runs on embedded server so we don't need to explicitly configure any server for the project in project facets. To execute the application, just right click on the main method and run as java application.

## Though this project developed with an easy approach, ideally this method will lead a way for any future enhancement to implement hard functionalities.
