# udacity_evalnlpproj
Project 4 for Udacity FEND NanoDegree to create an app that evaluates news articles using Natural Language Processor

Project Instructions as per Udacity Project Guidelines

Stage 1 - Getting Started - Setting up the Project
It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally. Remember that once you clone, you will still need to install everything:

cd <project directory>
npm install


If you started this project after July 7, 2020, you will be using the MeaningCloud Sentiment Analysis API for this project.

The project rubric item for "API" criteria says:

The app should make a successful call to the API on form submission. If this is successful, the API keys and response handling were done correctly. You can check that the API keys are found in server.js or a similar node file. It is not acceptable for an API key to be set in a client-facing file (like index.js)

Information from the API response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc.

Step 1: Sign up for an API key

For the MeaningCloud API: You can find the API here. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

Steps 2 and 3 were for a previously used API called Aylen which we are not using so i removed them from this file.

Step 4: Environment Variables
Next, in server/index.js, you need to declare your API credentials, which will look something like this:

// You could call it aylienapi, or anything else
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
If you are using the MeaningCloud API, the process will look pretty similar to the Aylien API process, but you don’t need to use an application_id.

...But there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly, are never a good thing. So, we have to figure out a way to make that not happen.

The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold value. The environment variables only belong to your local system and won't be visible when you push your code to a different environment like Github. Follow the steps below to configure environment variables:

Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file
Create a new .env file in the root of your project.
Fill the .env file with your API keys like this:
API_ID=**************************
API_KEY=**************************

Add this code to the very top of your server/index.js file:

const dotenv = require('dotenv');
dotenv.config();

If you want to refer the environment variables, try putting a prefix process.env. in front of the variable name in the server/index.js file, an example might look like this:
console.log(`Your API key is ${process.env.API_KEY}`);
The step above is just to help you understand how to refer an environment variable from your code. In server/index.js, your updated API credential settings should look like this:

// You could call it aylienapi, or anything else
var textapi = new aylien({
   application_id: process.env.API_ID,
   application_key: process.env.API_KEY
});

Go to your .gitignore file, in the project root, and add .env. It will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys would become pointless.

Step 5: Using the API
We're ready to go! The Aylien API has a lot of different endpoints you can take a look at the Aylien API endpoints. You can see how using the SDK simplifies the requests we need to make. You can also check out the documentation of the MeaningCloud API here. MeaningCloud also has several other APIs, which we won’t be using for this project, but feel free to take a look around if you’re curious!

Now it's up to you to create the various requests and make sure your server is set up appropriately. For example, ensure that the "dependencies" in package.json have a suitable entry for Aylien, such as, "aylien_textapi": "^0.7.0",, where the version may vary with time.

Stage 3 - Project Enhancement
At the current stage, make enhancement in your project code to ensure most of the requirements as mentioned in the project rubric are met. In addition, parse the response body to dynamically fill content on the page.

Only the rubric requirements related to "Offline Functionality" and "Testing" criteria should remain for the next stages.

Stage 4 - Unit Testing using Jest Framework
You must have read the rubric item for "Testing" criteria, that says:

Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/client/js file should have at least one test.

Stage 5 - Service Workers
The rubric item for "Offline Functionality" criteria says:

The project must have set up service workers in webpack.

Go to the webpack config file, and add the setup for service workers.  Test that the site should be available even when you stop your local server .

Stage 6 - Deployment
A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but check out Netlify or Heroku for some really intuitive free hosting options.
