# CS361_microservice
Microservice for Daniel's portfolio project

To request data, first make sure the server is running. Using a terminal, while in the directory of the microservice, call npm start.
Upon starting the server, you should see a message in the terminal stating "listening on http://localhost:3000".
Once you see that message, you can call the API with a HTTP GET request. For example, GET localhost:3000/medical.

You will then receive the data through the HTTP response, in the form of JSON objects. 
In this example, you will receive all objects relating to organizations who have a category of medical. 

![UML sequence diagram](/microservice_UML.png)
