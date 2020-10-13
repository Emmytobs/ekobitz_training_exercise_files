# This file contains the solutions to the [how the web works exercises](https://snoseeds.github.io/inf-paces-school/courses/intermediate-javascript-part-2/how-the-web-works-exercises.html)

### How the Web Works Exercises.

###### Answer the following questions. Write out your answers in atext or markdown file.
1. What is HTTP?
> HTTP (Hyper Text Transfer Protocol) can be thought of as a communication protocol that facilitates the exchange of data between clients and servers

2. What is a URL?
> A URL (Uniform Resource Locator) is made up of certain components that directly specify where resource(s) are located on the internet.

3. What is TCP?
> TCP (Transmission Control Protocol) is one of the main protocols of the Internet Protocol. It provides reliable, ordered, and error-checked delivery of a stream of data between applications.

4. What is IP?
> An IP (Internet Protocol) is unique to every computer on the web. It governs how data is sent accross a network from one computer to another.

5. What is DNS?
> A DNS (or Domain Name System) is a server that accepts a domain name (such as http://www.twitter.com) and returns the IP address for the server hosting that website.

6. What is idempotent?
> Idempotent is a term used to describe HTTP methods (otherwise known as 'verbs' such as GET, PUT, POST, DELETE). What it means for a HTTP method is that different operations can be performed on pieces of data, withcout changing the state of the data.

7. What is a query string?
> Query strings can be regarded as ampersand(&)-seperated lists of parameters or options, written as key-value pairs (in such manner: queryString=queryValue), passed in a URL immediately after the "?" symbol.

8. What is a path or route?
> A path refers to the location of a specific resourse on a server, albeit not all the time. Sometimes it could be the path to a specific API endpoint on the server that can handle certain operations on a set of data, for instance.

9. List four HTTP Verbs and their use cases.
> POST - POST is used to create a specific piece of data and store it in a server
> GET - GET is used to retrieve data from a server (or in a database that is accessible through the server)
> PUT - PUT can be used to update an entire set of data in a server
> DELETE - DELETE can be used to remove resources or other forms of data in a server (or in a database that is accessible through the server)

10. What is a client?
> In the context of HTTP and REST, a client is any computer that is capable of sending HTTP requests to the server

11. What is a server?
> A server is basically a computer. This computer is able to respond to different requests from a client, which could include sending data to the client, or performing an operation in a database

12. What is an HTTP request?
> A HTTP request is made when a computer makes a network request to a server through a URL in order to perform an operation or simply access a specific resource.

13. What is an HTTP response?
> A HTTP response is made when a server responds to HTTP requests made from a client by sending back some data or performing the desired operation

14. What is an HTTP header? Give a couple examples of request and response headers you have seen.
> An HTTP header outlines the details of a HTTP request or HTTP response.
> Some examples of request headers include:
> - Content-Type, which specifies the type of data being sent to the server
> - User-Agent, which specifies the name of the client making the request (such as the browser's name)
> - Accept, which specifies the types of data to be accepted in the response from the server
>
> Some examples of response headers include:
> - Content-Type, which specifies the type of data being sent back to the client
> - Connection, which specifies the whether the server should cache the resources requested for faster response time on subsequest requests
> - DATE, which specifies the date and time that the response was sent


15. What is REST?
> REST (Representational State Transfer) is a architecture for designing web services, or resources hosted on a server or a database that is accessible by a server

16. What is JSON?
> JSON is a common data-exchange format that has become the de facto medium of sending data in most web applications today.

17. What happens when you type in "Hello World" in google.com and press enter?
> An HTTP request is made to the server hosting the google.com website. The request typically will consist of the search term "Hello World" along with some other bits of data to help the server respond better.
> The server will typically have an API endpoint for handling the HTTP request sent and will then go ahead to work on the request by looking for results related to the search term.
> After the operation is finished, the server will send a HTTP response composing the results of the search term that will then be displayed on the browser.

18. What does it mean when we say the web is "stateless"?
> "Stateless" in technical terms means having no record of any data or "state" of an operation or transaction. Indeed, the web has no record of previous requests or transactions handled by the web server, as a server's response to perform a specific operation is based entirely on the information that comes with the interaction requests. In simpler words, the server keeps no record of the bits of any request sent to it. That is the essence of a REST API

19. What is curl?
> It is a command-line tool used for sending HTTP requests to a server.

20. Make a GET request to the icanhazdadjoke API with curl to find all jokes involving the word "pirate." (your answer should be the curl command required).
> curl -H "Accept: application/json" https://icanhazdadjoke.com/search?term=pirate
> Result: 
> ```json
>   {"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[{"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},{"id":"QuscibaMClb","joke":"What does a pirate pay for his corn? A buccaneer!"},{"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet? They always get stuck at \"C\"."},{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"}],"search_term":"pirate","status":200,"total_jokes":5,"total_pages":1}  
> ```