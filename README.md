# Full Stack Application with Role-Based Access Control (RBAC)

This project implements a **Full Stack Web Application** with Role-Based Access Control (RBAC) using **Node.js**, **MongoDB**, **JWT**, and **React.js**. The application supports user authentication and authorization, and it ensures that users can access resources based on their roles: **Admin**, **Moderator**, and **User**.

## Project Structure

The project is divided into two main parts:

1. **Backend (Node.js + Express)**:
   - Handles user authentication, registration, login, and role-based access control.
   - Implements JWT-based authentication to manage sessions.
   - MongoDB is used for database storage.

2. **Frontend (React.js)**:
   - A React-based UI to allow users to register, login, and view dashboard data based on their role.
   - Styled with custom CSS for responsiveness and a clean UI.

## Features

- **User Registration**: Allows new users to sign up and select a role (Admin, Moderator, or User).
- **User Login**: Users can log in and receive a JWT token.
- **Role-Based Access Control (RBAC)**: Access to certain routes and data is based on the user's role.
  - Admin: Can access and perform administrative actions.
  - Moderator: Can access restricted data but with fewer privileges than Admin.
  - User: Regular user with limited access.
- **Protected Routes**: Certain routes and data are only accessible by authenticated users with the appropriate role.

## Technologies Used

- **Frontend**: React.js, Axios (for API calls)
- **Backend**: Node.js, Express, MongoDB, JWT (JSON Web Token)
- **Styling**: Custom CSS (Responsive design)
- **Authentication**: JWT-based authentication

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** and **npm** (Node Package Manager)
- **MongoDB** (local or cloud instance)
- **Postman** (to test the APIs)

## Installation

### 1. Clone the repository

### 2. Backend Setup

     Step 1: Navigate to the backend folder:

            cd backend

    Step 2: Install dependencies:

            npm install

    Step 3: Configure environment variables:
            Create a .env file in the backend folder and add the following values:

            PORT=5000
            MONGO_URI=your_mongodb_connection_string
            JWT_SECRET=your_jwt_secret_key

    Step 4: Run the backend server:

            npm run dev
            
            The backend should now be running on http://localhost:5000.

### 3. Frontend Setup

    Step 1: Navigate to the frontend folder:

            cd frontend

    Step 2: Install dependencies:

            npm install

    Step 3: Start the frontend development server:

            npm start

            The frontend should now be running on http://localhost:3000.

### 4. API Endpoints

Here’s a list of available API endpoints for testing with Postman or similar tools:

    1. POST /api/auth/register:

    Register a new user.

    Request body:

        {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123",
        "role": "User"
        }

    2. POST /api/auth/login:

    Login and get a JWT token.

    Request body:

        {
        "email": "john@example.com",
        "password": "password123"
        }

    3. GET /api/user/admin (Protected, Admin only):

    Access by Admin role.

    Requires JWT token in the Authorization header: Bearer <JWT_TOKEN>.

    4. GET /api/user/moderator (Protected, Moderator only):
    
    Access by Moderator role.

    Requires JWT token in the Authorization header: Bearer <JWT_TOKEN>.

    5. GET /api/user/user (Protected, User only):

    Access by User role.

    Requires JWT token in the Authorization header: Bearer <JWT_TOKEN>.


### 4. Testing the APIs

1. Register a User: Use the POST /api/auth/register endpoint to register a new user with the desired role (User, Admin, Moderator).

2. Login a User: Use the POST /api/auth/login endpoint to authenticate and receive a JWT token.

3. Access Protected Routes: Use the GET /api/user/admin, GET /api/user/moderator, and GET /api/user/user endpoints by passing the JWT token in the Authorization header.

    Example Authorization Header:

    Postman Testing Example:

        1. Register: Send a POST request to /api/auth/register with user details.

            {
                "name": "TestUser",
                "email": "testuser@example.com",
                "password": "testuser@123",
                "role": "User"
            }

            {
                "name": "TestUser",
                "email": "testuser@example.com",
                "password": "testuser@123",
                "role": "Admin"
            }

            {
                "name": "TestUser",
                "email": "testuser@example.com",
                "password": "testuser@123",
                "role": "Moderator"
            }


        2. Login: Send a POST request to /api/auth/login with email and password to receive the JWT token.

            {
                 "email": "testuser@example.com",
                 "password": "testuser@123"
            }


        3. Access Protected Routes: Send a GET request to /api/user/admin with the JWT token in the        Authorization header.

            Authorization: Bearer <JWT_TOKEN>

