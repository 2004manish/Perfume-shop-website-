# Perfume Shop Website

This project is a full-stack web application for a perfume shop, where users can browse and purchase various perfumes. It is built using React for the frontend and Node.js with MongoDB for the backend.

## Features

- *Frontend*:
  - Display of perfumes with images, descriptions, prices, and reviews.
  - Responsive design for mobile, tablet, and desktop screens.
  - "Buy Now" button for each perfume.
- *Backend*:
  - API for fetching perfume data.
  - Integrated MongoDB for storing product and review data using MongoDB Compass.

## Project Structure

### Frontend
- Located in the client folder.
- Built with React.
- Key files:
  - App.js: Main application component.
  - pages: Home and Product - pages
  - styles: Homepage.css => Styles for the homepage, ProductPage.css => Styles for productpage 

### Backend
- Located in the server folder.
- Built with Node.js and Express.js.
- Key files:
  - server.js: Entry point for the backend server.
  - routes/productRoutes.js: Routes for managing product data.
  - models/Product.js: Contains schema definitions of the product for MongoDB collections.
  - ProductData.json: Local JSON file for storing perfume/product details.

## Installation

### Prerequisites

- Node.js: v22.13.1
- MongoDB installed locally or accessible via cloud.
- MongoDBCompass : MongoDB GUI for adding the products

### Steps

1. Create a new folder called perfume-shop anywhere on your system and copy the content from the given perfume-shop by me in the newly created folder:
   - Open the terminal inside the perfume-shop folder and run to intialize npm: `npm init -y`
   - To create React App, run inside the perfume-shop folder:
      ```
      npx create-react-app client
       ```
   - Install Dependencies: Install libraries like React Router and Axios:
      ```
      npm install react-router-dom axios
      ```

2. Navigate to the project directory:
   `cd perfume-shop`
   
3. Install dependencies for the backend:
     ```
     cd server
     npm install
     ```

4. Install dependencies for the frontend:
    ```
     cd ../client
     npm install
     ```


## Usage

### Start the Backend

1. Navigate to the server folder: `cd server`
   
2. Start the backend server: `npm start`
   
   The server will run on http://localhost:5000 by default.

### Start the Frontend

1. Navigate to the client folder: `cd ../client`
   
2. Start the React development server: `npm start`
   
   The application will open in your default web browser at http://localhost:3000.

## Technologies Used

- *Frontend*:
  - React
  - CSS
- *Backend*:
  - Node.js
  - Express.js
  - MongoDB




## Contact

For questions or support, please contact:
- *Name*: Manish Kumar
- *Email*: manishrajput6137m@gmail.com


## Code Structure
perfume-shop/
├── client/           # React Front-End
│   ├── public/
│   ├── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       ├── index.js
│       ├── styles/
│           ├── Homepage.css
│           ├── ProductPage.css
├── server/           # Node.js Back-End
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── ProductData.json
│   ├── .env

