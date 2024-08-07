# movie-library
![WhatsApp Image 2024-08-06 at 8 53 07 PM](https://github.com/user-attachments/assets/6ccb1f68-0279-4ad1-b18e-498915750e27)
Movie Library Project:-
Overview
Features
Technologies Used
Setup Instructions
Login Functionality
Movie List Sidebar
Movie Detail Page

https://github.com/user-attachments/assets/9f0435de-1c97-4591-b777-5d36832fe7e4


Overview
The Movie Library Project is a web application built with React, TypeScript, and Redux that allows users to browse and filter a collection of movies. The application supports user authentication using the reqres.in API and provides a dynamic user interface for viewing movie details, sorting, and filtering movies.

Features
User authentication using reqres.in API
Dynamic filtering and sorting of movies
Responsive design using Tailwind CSS
Integration with a JSON server for movie data
State management with Redux
Technologies Used
Frontend: React, TypeScript, Tailwind CSS
State Management: Redux
API: reqres.in for authentication, JSON server for movie data
Animations: Framer Motion
Setup Instructions
To run this project locally, follow these steps:

npx json-server --watch db.json --port 5000
Start the development server:

Visit http://localhost:3000 in your browser to see the application in action.
Login Functionality
This project uses reqres.in for authentication. The application currently uses a hardcoded login and password for demonstration purposes.

Login Endpoint: https://reqres.in/api/login
Credentials:
Email: eve.holt@reqres.in
Password: cityslicka
After logging in, the user is authenticated and can access the movie library features.

How to Implement
Login Form:
The login form is built with React and uses react-toastify for notifications. It captures user credentials and sends a POST request to reqres.in for authentication.

Redux Integration:
Upon successful login, the authentication token is stored in the Redux store, allowing the rest of the application to access authenticated routes.

Movie List Sidebar
The sidebar allows users to filter and sort movies based on various criteria:

Filter by Rating: Users can select a rating to filter the movie list.
Sort by Year: Movies can be sorted in ascending or descending order based on their release year.
Implementation Details
Filtering: The selected ratings are stored in the Redux state, and the movie list is filtered accordingly.
Sorting: The sorting order is also managed via Redux, and the list is dynamically updated based on the selected criteria.
Movie Detail Page
The movie detail page displays comprehensive information about a selected movie, including:

Redux Integration
Redux is used to manage the global state of the application, including:

User Authentication: The user's authentication status and token are stored in Redux.
Filters and Sorting: The selected filters and sorting order are managed globally, ensuring consistency across components.
Key Redux Files
Actions: Define actions for updating filters, sorting, and authentication.
Reducers: Handle the state changes based on dispatched actions.
Store: The central store that holds the entire application state.

