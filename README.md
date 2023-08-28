# Meetcode

This monorepo contains both the client and server components of the Code Runner project. The client folder uses Vite React.js for the frontend, while the server folder uses Node.js for the backend. This project allows you to run C++ code in a containerized manner.

#![Screenshot (53)](https://github.com/tech-wizard720/meetcode/assets/73032064/a67e05fa-7869-4c58-b067-b049eb8c6394)
# Demo


![Scr![Screenshot (49)](https://github.com/tech-wizard720/meetcode/assets/73032064/8e8bf56c-6108-4543-9227-d4![Screenshot (48)](https://github.com/tech-wizard720/meetcode/assets/73032064/b87e4b3c-bb41-47dd-99c3-300aabd90912)
1c6ef1314d)
eenshot (52)](ht![Screenshot (50)](https://github.com/tech-wizard720/meetcode/assets/73032064/c96a9ed2-97ea-4b4d-987f-8fdd92f6ef6d)
tps://github.com/tech-wizard720/meetcode/assets/73032064/41e6e672-f69b-4b7b-999c-2637304dfe15)

![Screenshot (51)](https://github.com/tech-wizard720/meetcode/assets/73032064/f2a488e9-e508-4a46-9ea5-bc482ba1ccbd)


## Prerequisites

Before running this project, please ensure that you have the following dependencies installed:

- Node.js (v14 or higher)
- Docker
- RabbitMQ server

## Getting Started

Follow the steps below to start the project locally:

1. Build the docker image by the following command:
- 
  ```
  docker build -t my-cpp-image .
  ```


2. Start the RabbitMQ server. Make sure it is running and accessible.

3. Start the server:
- Navigate to the `server` directory:
  ```
  cd server
  ```
- Install the server dependencies:
  ```
  npm install
  ```
- Start the server:
  ```
  npm start
  ```
  or
  ```
  nodemon start
  ```

4. Run the client:
- Navigate to the `client` directory:
  ```
  cd client
  ```
- Install the client dependencies:
  ```
  npm install
  ```
- Start the client:
  ```
  npm run dev
  ```

The client will be accessible at `http://localhost:3000`.

## Usage

Once the project is up and running, you can use the Code Runner to execute C++ code in a containerized environment. Follow the instructions provided by the client to submit and execute your C++ code.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

Please ensure that your code follows the project's coding conventions and includes appropriate tests.
