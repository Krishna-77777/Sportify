Sportify E-commerce Platform
A complete full-stack e-commerce web application for a sporting goods store, built with the MERN stack (MongoDB, Express, React, Node.js). This project features a responsive user interface, user authentication, a dynamic shopping cart, and a multi-step checkout process.

Live Demo (Replace with your actual Vercel deployment link)

 # Features
User Authentication: Secure user registration and login system with JWT (JSON Web Tokens) for session management.

Product Catalog: Fetches and displays products from the backend API in a clean, responsive grid.

Dynamic Shopping Cart: Users can add, view, and remove items from their cart. The state is managed globally with React Context.

Protected Routes: Sensitive pages like Profile and Checkout are only accessible to logged-in users.

User Profile: Authenticated users can view their profile details and a complete history of their past orders.

Multi-Step Checkout: A guided process for users to enter shipping information and select a payment method.

Responsive Design: The UI is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

🛠️ Tech Stack
Frontend
React.js: A JavaScript library for building user interfaces.

Vite: A modern frontend build tool for fast development.

React Router: For client-side routing and navigation.

CSS Modules: For locally scoped and conflict-free styling.

React Context API: For global state management (Authentication & Cart).

Backend
Node.js: A JavaScript runtime environment.

Express.js: A web framework for Node.js to build REST APIs.

MongoDB: A NoSQL database for storing user, product, and order data.

Mongoose: An Object Data Modeling (ODM) library for MongoDB.

JWT & Bcrypt.js: For secure authentication and password hashing.
 
  # Project Structure
This project is structured as a monorepo, with the frontend and backend in separate directories.

/
|-- /backend/             # Node.js & Express API
|   |-- /controllers
|   |-- /models
|   |-- /routes
|   |-- ...
|   `-- server.js
|
|-- /sport-shop/          # React Frontend
|   |-- /src
|   |   |-- /components
|   |   |-- /context
|   |   |-- /pages
|   |-- ...
|   `-- vite.config.js
|
`-- vercel.json            

⚙️ Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites
Node.js (v18 or higher)

npm (comes with Node.js)

MongoDB (a local instance or a free cloud instance from MongoDB Atlas)

Installation & Setup
Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Setup the Backend:
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Create a .env file in the /backend folder and add your variables
# (See .env.example below)

# Run the backend server
npm run dev 
Your backend will be running on http://localhost:8000.

Setup the Frontend:

Open a new terminal window.

Bash

# Navigate to the frontend folder from the root directory
cd sport-shop

# Install dependencies
npm install

# Run the frontend development server
npm run dev
Your React application will be running on http://localhost:5173.

Environment Variables
Create a .env file in the /backend directory:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
