# Node Express MongoDB Mock Server

Welcome to the Node.js Express MongoDB Mock Server! This project provides a mock server setup using Node.js, Express, and MongoDB. It's designed to help you create a simulated API with sample CRUD operations.

## Features

- **Node.js and Express:** A lightweight and efficient server setup for handling HTTP requests.
- **MongoDB:** A NoSQL database for storing and retrieving mock data.
- **Sample CRUD Operations:** Includes endpoints for Create, Read, Update, and Delete operations.
- **Easy to Customize:** Adapt the mock server to suit your specific needs by modifying routes and data models.
- **Environment Configuration:** Set up your own MongoDB connection using environment variables.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install` or `yarn install`
3. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_USERNAME=<your-mongodb-username>
     DB_PASSWORD=<your-mongodb-password>
     DB_CLUSTER=<your-mongodb-cluster>
     PORT=<your-preferred-port>
     ```
4. Start the server: `npm run dev` or `yarn run dev`

## Project Structure

- `/models`: MongoDB data models for defining the structure of mock data.
- `/routes`: Express route handlers for different API endpoints.
- `server.js`: Main server file containing the server configuration and database connection.
- `.env`: Environment file for configuring MongoDB connection.

## MongoDB Configuration

The server connects to MongoDB using the following connection string:

```javascript
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
```

Ensure that you have set up your `.env` file with the correct credentials before running the server.

## Usage

Feel free to customize and extend this mock server based on your project requirements. Use it for development, testing, or as a starting point for building more complex APIs.

## Sample Routes

- **GET /api/items:** Get all items.
- **GET /api/items/:id:** Get a specific item by ID.
- **POST /api/items:** Create a new item.
- **PUT /api/items/:id:** Update an existing item.
- **DELETE /api/items/:id:** Delete an item by ID.

## Contributing

Contributions are welcome! If you encounter issues, have improvements, or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
