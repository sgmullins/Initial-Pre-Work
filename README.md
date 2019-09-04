# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit techtonic.com our 'client'(a web browser on our computer in this case) makes a GET request via the HTTP protocol to the techtonic domain server and asks it for the files associated with the website. The server then serves up the files to our browser via packets. The browser then interprets those packet files for us and displays the website.

## From start to finish, how does data reach you to be rendered in the browser?

The browser sends a GET request for a file to a remote server or from the local hard drive. When the browser makes a request to an IP address or domain it will be routed to the remote server where the files are stored. The remote server will respond to the browsers request and send back all the files requested or the files needed for the specific page via packets of data. The browser then takes those data packets, parses them and then renders the parsed data, displaying the data into the format we are used to seeing.

## What code is rendered in the browser?

In short, HTML, CSS and Javascript are the main pieces of code rendered in a browser. A more specific explaination was gleaned from the info on a logrocket.com blog (https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/
) which explains that first the browser must render the packet of bytes sent from the server into characters. The conversion from bytes to characters is a done via the character encoding properties of the HTML file. Characters must then be rendered into tokens via a parsing process. When being parsed, the browser is interpreting all of the HTML tags and elements and their associated 'rules'(ie. h1 tagged text will be x font size, script tags will load the specified file...). This 'rule' interpretation is called tokenization and is creating a token for each tag and element. The tokens are then converted into nodes which are used to build the DOM of the page. If you have a CSS file associated with the page, the browser is nearly simultaneously creating a CSSOM which is similar to the DOM. After these two object models are constructed, the browser starts the layout process, determining where the elements will go, what size they will be and what styling they have.

## What is the server-side code’s main function?

The main function of server-side code is to process and serve the client side request. Server side code will run the appropriate scripts before sending the HTML to the client side. Examples of server side code can be node, PHP or Ruby on Rails.

## What is the client-side code’s main function?

Client-side code's main function is to run locally after the HTML has been loaded. The most common language for client side code would be JavaScript.

## What is runtime?

Runtime is the whole associated process of a program running. A commenter, Carl Norum on stackoverflow put it simply when he wrote, "you could describe the runtime as everything that happens that you didn't explicitly write yourself." Runtime is the stuff required for running an app that the programmer didn't write.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

A single instance of client-side assets are created when a request is made. Depending on how many requests a client (ie. browser) is making there can be many single asset instances created.

## How many instances of the server-side code are available at any given time?

A single instance of server side code is available at a given time. The server-side code is waiting to interpret and respond to an http request.

## How many instances of the databases connected to the server application are created?

When you link your server to a database, one single instance is created. It seems possible that you could be connected to a few different databases but only one 'tunnel'(we called them tunnels at my last employer) or instance is created for each database.
