## Fullstack Help Contact App (Future Skills)

## Backend Overview

The backend is built with Node.js and Express, using MongoDB as the database. Mongoose is used to model the data.
Key Files:

    server.js: Initializes the server and connects to MongoDB.
    app.js: Contains the main app setup and middleware.
    models/cardModel.js: Defines the schema for the Card data.
    controllers/cardController.js: Handles the business logic for managing Card data.
    routes/cardRoutes.js: Sets up API routes for handling requests related to Card data.

 ## Install backend dependencies:
    cd backend
    npm install 
    npm install dotenv nodemon
    npm install cors express mongoose
    

## Set up environment variables:

    Backend: Create a .env file in the backend/ directory with the following content:
    MONGODB_URI=mongodb+srv://Ravi-Coding:my_password@cluster0.mongodb.net/helpcenter?retryWrites=true&w=majority
    PORT=3008
    DB Name - helpcenter 
    
## Start the backend server:
    nodemon server.js
    
##  View the backend application:
    http://localhost:3008
    
## API Endpoints : 

    Checked API Enspoints by POSTMAN
    GET /ping to check if the server is running.
    POST /api/cards to create a new card.
    GET /api/cards to get all cards.
    GET /api/cards/:title to get a specific card by title.
