# API Documentation

## Base URL

The base URL for all API endpoints is `http://localhost:3000`.

## User Routes

### Create a User

- **Endpoint:** `/users`
- **Method:** `POST`
- **Description:** Create a new user.
- **Request Body:**
    - `name` (string, required): The user's name.
    - `email` (string, required): The user's email address.
    - `username` (string, required): The user's username.

### Get a User by ID

- **Endpoint:** `/users/:id`
- **Method:** `GET`
- **Description:** Retrieve a user by their unique identifier.
- **URL Parameters:**
  - `id` (string)

### Get All Users

- **Endpoint:** `/users`
- **Method:** `GET`
- **Description:** Retrieve a list of all users.

### Edit a User Data

- **Endpoint:** `/users/:id`
- **Method:** `PUT`
- **Description:** Update a user's information.
- **URL Parameters:**
  - `id` (string)
- **Request Body:**
  - **Body:**
    - `name` (string): The updated user's name (optional).
    - `email` (string): The updated user's email address (optional).
    - `username` (string): The updated user's password (optional).

### Delete a User

- **Endpoint:** `/users/:id`
- **Method:** `DELETE`
- **Description:** Delete a user by their unique identifier.
- **URL Parameters:**
  - `id` (string)
