# Meetcode

This monorepo contains both the client and server components of the Code Runner project. The client folder uses Vite React.js for the frontend, while the server folder uses Node.js for the backend. This project allows you to run C++ code in a containerized manner.

# Demo

![Screenshot (48)](https://github.com/tech-wizard720/meetcode/assets/73032064/9f1eb885-7b30-4447-b1b0-51eaac93061a)
![Screenshot (49)](https://github.com/tech-wizard720/meetcode/assets/73032064/60585024-bcc7-4b7a-922b-3db478f39fe4)
![Screenshot (50)](https://github.com/tech-wizard720/meetcode/assets/73032064/5ecb4a3f-fb10-4de9-8e5e-a7
![Screenshot (51)](https://github.com/tech-wizard720/meetcode/assets/73032064/5dd58d11-7449-4c7c-ae6b-c15f6e9dde75)
cb0bc37127)
![Screenshot (52)](https://github.com/tech-wizard720/meetcode/assets/73032064/93958e96-caaf-4f5e-afd5-5c2933e810bb)
![Screenshot (53)](https://github.com/tech-wizard720/meetcode/assets/73032064/cf0c6dcb-6010-494c-8caa-d671e9058ca9)


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
