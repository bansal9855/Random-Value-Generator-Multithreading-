# Random Value Generator Dashboard

## Project Overview

The **Random Value Generator Dashboard** is a React application that communicates with a Flask backend via WebSocket to display real-time random numbers. Each box in the dashboard refreshes its displayed value based on predefined parameters, allowing users to see changing values in a visually appealing layout. This project demonstrates the integration of a Python backend with a React frontend, showcasing skills in web development and real-time data handling.

## Features

- Real-time random number generation using WebSocket.
- User-defined parameters for value ranges and refresh rates.
- Responsive layout using Tailwind CSS for styling.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask, Flask-SocketIO
- **WebSocket**: Flask-SocketIO for real-time communication
- **Styling**: Tailwind CSS for modern, responsive design

## Input and Output Format

### Input

The input is provided through the `Box` component props:

- **value**: Initial random value (number).
- **lb**: Lower bound for the random number generation (number).
- **ub**: Upper bound for the random number generation (number).
- **refreshTime**: Time in seconds for how often the value refreshes (number).
- **bgColor**: Background color class from Tailwind CSS (string).

### Example Input

```javascript
<Box value={15} lb={10} ub={20} refreshTime={10} bgColor="bg-orange-200" />
```

### Output

The output is a visually formatted box displaying:

- **Current Value**: The latest random number generated within the specified range.
- **LB**: The lower bound for random number generation.
- **UB**: The upper bound for random number generation.
- **Refresh Time**: The interval (in seconds) at which the value refreshes.

### Example Output

For the input above, the output in the rendered component might look like this:

```
+--------------------------+
|          18              |   <-- Current Value
|         LB: 10           |   <-- Lower Bound
|         UB: 20           |   <-- Upper Bound
|     Refresh Time: 10 sec  |   <-- Refresh Time
+--------------------------+
```

## Installation and Setup

To set up the project locally, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and [Python](https://www.python.org/downloads/) installed on your machine.

### Clone the Repository

```bash
git clone <repository_url>
cd random-value-generator-dashboard
```

### Set Up the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install the required Python packages:
   ```bash
   pip install flask flask-socketio flask-cors
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

### Set Up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the required Node packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Usage

Once both the backend and frontend are running, navigate to `http://localhost:3000` in your web browser. You should see the dashboard with multiple boxes displaying random values that refresh based on their specified intervals.

## Conclusion

This project serves as a demonstration of real-time web application development, showcasing the ability to create a responsive UI and manage state effectively using React. The integration with a Flask backend provides a solid foundation for developing more complex applications requiring real-time data handling.

