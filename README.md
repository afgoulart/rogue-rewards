# Gamification System

This is a NestJS-based project for creating a gamification system. The system includes modules for user management, authentication, game management, challenges, achievements, and leaderboards.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Modules](#modules)
  - [Auth Module](#auth-module)
  - [User Module](#user-module)
  - [Game Module](#game-module)
  - [Challenge Module](#challenge-module)
  - [Achievement Module](#achievement-module)
  - [Leaderboard Module](#leaderboard-module)
- [License](#license)

## Features

- **User Authentication**: Secure authentication using JWT.
- **User Management**: Manage user profiles and scores.
- **Game Management**: Create and manage games and levels.
- **Challenges**: Create and manage challenges for users to complete.
- **Achievements**: Award achievements and badges to users.
- **Leaderboards**: Display and manage leaderboards based on user scores.

## Technologies Used

- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient and scalable server-side applications.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [TypeORM](https://typeorm.io/): An ORM for TypeScript and JavaScript.
- [Passport](http://www.passportjs.org/): Authentication middleware for Node.js.
- [JWT (JSON Web Tokens)](https://jwt.io/): A compact, URL-safe means of representing claims to be transferred between two parties.

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/gamification-system.git
   cd gamification-system
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the environment variables**:

   Create a `.env` file in the root of your project and add the necessary environment variables (see [Environment Variables](#environment-variables)).

4. **Run database migrations (if necessary)**:

   ```bash
   npm run typeorm migration:run
   ```

5. **Start the application**:

   ```bash
   npm run start
   ```

   The application will run on `http://localhost:3000`.

## Environment Variables

You need to set up a `.env` file with the following variables:

```plaintext
# Database settings
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=myuser
DB_PASSWORD=mypassword
DB_NAME=mydatabase

# JWT settings
JWT_SECRET=mySuperSecretKey
JWT_EXPIRES_IN=3600s
```

## Usage

You can interact with the API using tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/). Below are some of the available endpoints:

- **Auth Module**:

  - `POST /auth/login`: Log in a user and receive a JWT.
  - `POST /auth/register`: Register a new user.

- **User Module**:

  - `GET /user`: Get a list of users.
  - `GET /user/:id`: Get a specific user by ID.
  - `PATCH /user/:id`: Update user information.
  - `DELETE /user/:id`: Delete a user.

- **Game Module**:

  - `POST /game`: Create a new game.
  - `GET /game`: Get a list of games.
  - `PATCH /game/:id`: Update a game.
  - `DELETE /game/:id`: Delete a game.

- **Challenge Module**:

  - `POST /challenge`: Create a new challenge.
  - `GET /challenge`: Get a list of challenges.
  - `PATCH /challenge/:id`: Update a challenge.
  - `DELETE /challenge/:id`: Delete a challenge.

- **Achievement Module**:

  - `POST /achievement`: Create a new achievement.
  - `GET /achievement`: Get a list of achievements.
  - `PATCH /achievement/:id`: Update an achievement.
  - `DELETE /achievement/:id`: Delete an achievement.

- **Leaderboard Module**:
  - `GET /leaderboard`: Get the leaderboard.

## Modules

### Auth Module

Handles user authentication and authorization using JWT. It includes login, registration, and token validation functionality.

### User Module

Manages user data including profiles and scores. Users are stored in a relational database with TypeORM.

### Game Module

Handles the creation and management of games and their levels. Each game can have multiple levels or stages.

### Challenge Module

Manages challenges within the system. Challenges are tasks or missions that users need to complete to earn rewards.

### Achievement Module

Tracks and awards achievements or badges to users. Achievements can be tied to specific actions or milestones within the system.

### Leaderboard Module

Displays user rankings based on scores. The leaderboard updates dynamically as users' scores change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
