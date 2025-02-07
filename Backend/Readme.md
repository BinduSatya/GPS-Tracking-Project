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
```

#### Response

- **Success**:
  - **Status Code**: `201 Created`
  - **Body**: A JSON object containing the newly created user and an authentication token.

Example success response:

```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketID": "some-unique-socket-id",
    "createdAt": "2025-02-07T10:00:00.000Z",
    "updatedAt": "2025-02-07T10:00:00.000Z"
  },
  "token": "some-jwt-token"
}
```

- **Validation Error**:
  - **Status Code**: `400 Bad Request`
  - **Body**: A JSON object containing the validation errors.

Example validation error response:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Firstname must be at least 3 characters",
      "param": "firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

- **Duplicate Email Error**:
  - **Status Code**: `500 Internal Server Error`
  - **Body**: A JSON object containing the error message.

Example duplicate email error response:

```json
{
  "error": "User with this email already exists"
}
```

#### Notes

- Ensure that the `Content-Type` header is set to `application/json`.
- The `password` field will be hashed before storing it in the database.
- The `socketID` field will be automatically generated and assigned to the user.

## User Login Endpoint

### POST /users/login

This endpoint is used to log in an existing user.

#### Request

- **URL**: `/users/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**: The request body should be a JSON object containing the following fields:
  - `email` (string, required): The email address of the user. Must be a valid email format.
  - `password` (string, required): The password for the user. Must be at least 6 characters long.

Example request body:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response

- **Success**:
  - **Status Code**: `200 OK`
  - **Body**: A JSON object containing the authentication token and user details.

Example success response:

```json
{
  "token": "some-jwt-token",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "socketID": "some-unique-socket-id",
    "createdAt": "2025-02-07T10:00:00.000Z",
    "updatedAt": "2025-02-07T10:00:00.000Z"
  }
}
```

- **Validation Error**:
  - **Status Code**: `400 Bad Request`
  - **Body**: A JSON object containing the validation errors.

Example validation error response:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

- **Authentication Error**:
  - **Status Code**: `401 Unauthorized`
  - **Body**: A JSON object containing the error message.

Example authentication error response:

```json
{
  "message": "Invalid email or password"
}
```

#### Notes

- Ensure that the `Content-Type` header is set to `application/json`.
- The `password` field will be compared with the hashed password stored in the database.
- A JWT token will be generated and returned upon successful authentication.
