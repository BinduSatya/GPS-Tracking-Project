# GPS Tracking Project API Documentation

## User Registration Endpoint

### POST /users/register

This endpoint is used to register a new user.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**: The request body should be a JSON object containing the following fields:
  - `fullname`: An object containing:
    - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
    - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
  - `email` (string, required): The email address of the user. Must be a valid email format.
  - `password` (string, required): The password for the user. Must be at least 6 characters long.

Example request body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}