# Group Chat Application

## Project Description

A simple group chat application built using React and Socket.IO, allowing users to sign in, send and receive messages in real-time, with a focus on responsiveness and clean code standards.

## Features

- **User Sign-In:** Allows users to sign in with a username.
- **Real-Time Messaging:** Messages are sent and received in real-time.
- **Error Handling:** Notifies users if a message fails to send.
- **Responsive Design:** Optimized for both desktop and mobile views.
- **Sign Out Functionality:** Users can sign out and remove their data from local storage.

## Technologies Used

- **Frontend:** React, Vite, Styled-Components, React-Icons
- **Backend:** Node.js, Express, Socket.IO
- **Linting and Formatting:** ESLint (Airbnb config), Prettier
- **Other:** React Scroll to Bottom, Lodash

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SoroushKeyana/Group-Chat.git

2. Navigate to the project directory:

    ```bash
    cd <repository-directory>

3. Install the dependencies:

    ```bash
    npm install

## Running the Application
You can start both the frontend and backend servers from the root directory or start them individually.

### Starting Both Servers from the Root Directory

    ```bash
    npm start

    This command will concurrently start:

    - **Backend Server: Runs on http://localhost:3001**
    - **Frontend Server: Runs on http://localhost:3000**

### Starting Servers Individually

1. Backend Server:

    Navigate to the backend directory and run:

    ```bash
    cd backend
    npm start

2. Frontend Server: 
    Navigate to the frontend directory and run:

    ```bash
    cd frontend
    npm start

## Project Structure

├── backend          # Backend code (Express, Socket.IO)
├── frontend         # Frontend code (React, Vite)
├── package.json     # Root package.json for concurrent running
├── README.md        # Project documentation
└── .gitignore       # Files to ignore in version control



